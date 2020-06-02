import { echo } from 'coa-echo'
import { env } from 'coa-env'
import { die } from 'coa-error'
import { _ } from 'coa-helper'
import { mysql } from 'coa-mysql'
import { existsSync, writeFileSync } from 'fs'

export default new class {

  async getReplacer (ModelName: string, title: string, system: string = 'main') {

    const model_name = _.snakeCase(ModelName)
    const modelName = _.camelCase(ModelName)

    const database = env.mysql.databases[system] || die.hint(`缺少${system}子系统数据库配置`)

    const fields = await this.getFields(database.database, model_name)

    const pick = [] as string[], postBody = [] as string[], scheme = [] as string[], postValue = [] as string[]

    _.forEach(fields, ({ name, comment, type, value }) => {
      const val = /(char|text)/.test(type) ? `'${value}'` : value
      scheme.push(`${name}:${val},`)
      if (name === 'created' || name === 'updated') return
      pick.push(`'${name}'`)
      postBody.push(`${name}: {required: true, description: '${comment}', example: ''},`)
      postValue.push(`${name}: ctx.required('${name}',${val}),`)
    })

    // 替换模板
    return (str: string) => str
      .replace(/\/\/ @ts-ignore\n/g, '')
      .replace(/\$modelName\$/g, modelName)
      .replace(/\$ModelTitle\$/g, title)
      .replace(/\$ModelName\$/g, ModelName)
      .replace(/\$model_name\$/g, model_name)
      .replace(/\$模块名称\$/g, title)
      .replace(/\/\/ \$scheme\$/g, scheme.join('\n'))
      .replace(/\/\/ \$postBody\$/g, postBody.join('\n'))
      .replace(/\/\/ \$postValue\$/g, postValue.join('\n'))
      .replace(/'\$pick_array\$'/g, pick.join(','))
  }

  private async getFields (table_schema: string, table_name: string) {
    // 从数据库获取信息
    const ret = await mysql.io('columns')
      .withSchema('information_schema')
      .select('column_name as name', 'data_type as type', 'column_comment as comment', 'column_default as value')
      .where({ table_schema, table_name })
      .where('column_name', '<>', 'id')

    if (ret.length < 2) {
      echo.cyan('数据表 %s 不存在', table_name)
      process.exit(-1)
    }
    return ret
  }

  toFile (render: (src: string) => string, src_string: string, dist: string) {

    const dist_string = render(src_string)

    if (existsSync(dist)) {
      dist = dist.replace(/\.ts$/, '.new.ts')
      echo.green('新文件: ' + dist)
    } else {
      echo.green('已生成: ' + dist)
    }
    writeFileSync(dist, dist_string)
    return dist
  }

}
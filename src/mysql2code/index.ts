import { _ } from 'coa-helper'
import { mkdirSync } from 'fs'
import { resolve } from 'path'
import bin from './bin'

export default new class {

  private dir = ''

  option (dir: string) {
    this.dir = dir
  }

  // 自动生成数据模块
  async generate (ModelName: string, title: string, schema?: string) {

    ModelName = _.upperFirst(_.camelCase(ModelName))

    const replacer = await bin.getReplacer(ModelName, title, schema)

    mkdirSync(resolve(this.dir, ModelName), { recursive: true })

    bin.toFile(replacer, require('./template/action').default, resolve(this.dir, `${ModelName}/action.ts`))
    bin.toFile(replacer, require('./template/model').default, resolve(this.dir, `${ModelName}/m${ModelName}.ts`))

  }
}
import { $, _ } from 'coa-helper'
import { MysqlBin } from 'coa-mysql'
import { writeFileSync } from 'fs'

export class Mysql2Docs {
  private readonly mysqlBin: MysqlBin

  constructor(mysqlBin: MysqlBin) {
    this.mysqlBin = mysqlBin
  }

  // 自动生成数据库文档
  async autoGenerateMarkdown(database: string, file: string, title?: string): Promise<void> {
    const pathMarkdown = file

    const where = { table_schema: database }

    const tablesRows = await this.mysqlBin
      .io('tables')
      .withSchema('information_schema')
      .where(where)
      .where('table_type', 'BASE TABLE')
      .select('table_name', 'engine', 'table_collation', 'table_comment')
    const columnsRows = await this.mysqlBin
      .io('columns')
      .withSchema('information_schema')
      .where(where)
      .select(
        'table_name as table_name',
        'column_name as name',
        'column_type as type',
        'is_nullable as nullable',
        'column_default as value',
        'column_comment as comment'
      )
    const indexesRows = await this.mysqlBin
      .io('statistics')
      .withSchema('information_schema')
      .where(where)
      .where({ non_unique: 1 })
      .select('table_name', 'index_name', 'column_name', 'index_type as type', 'index_comment as comment')

    const tablesCreate: Record<string, any> = {}
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    await $.asyncEach(tablesRows, async ({ table_name }: any) => {
      if (table_name.startsWith('v')) return
      const ret = await this.mysqlBin.io.raw('SHOW CREATE TABLE ??', table_name)
      tablesCreate[table_name] = ret[0][0]['Create Table'].replace(/AUTO_INCREMENT=\d+ /g, '')
    })

    title = title + '数据库文档'

    const content = []
    content.push('## ' + title)
    content.push('')

    content.push('### 目录')
    _.forEach(tablesRows, ({ table_name, table_comment }) => {
      content.push(`- [${table_name} ${table_comment}](#${table_name.toLowerCase()}-${table_comment})`)
    })
    content.push('')

    _.forEach(tablesRows, ({ table_name, engine, table_collation, table_comment }) => {
      content.push(`### ${table_name} ${table_comment}`)
      content.push('')
      content.push(`\`${engine}\`  \`${table_collation}\``)
      content.push('')
      content.push('##### 结构')
      content.push('')
      content.push('| 字段 | 类型 | 必填 | 默认值 | 描述 |')
      content.push('|:---|:---|:---:|:---:|:---|')
      _.forEach(
        _.filter(columnsRows, (v) => v.table_name === table_name),
        (v) => {
          const { name, type, nullable, comment } = v
          content.push(`| ${name} | ${type} | ${nullable === 'NO' ? '是' : ''} | ${this.getDefaultValue(v)} | ${comment} |`)
        }
      )
      content.push('')
      content.push('##### 索引')
      content.push('')
      content.push('| 索引 | 字段 | 类型 | 描述 |')
      content.push('|:---|:---|:---:|:---|')
      _.forEach(
        _.filter(indexesRows, (v) => v.table_name === table_name),
        (v) => {
          const { index_name, column_name, type, comment } = v
          content.push(`| ${index_name} | ${column_name} | ${type} | ${comment} |`)
        }
      )
      content.push('')
      content.push('##### 创建语句')
      content.push('')
      content.push('```sql')
      content.push(tablesCreate[table_name])
      content.push('```')
      content.push('')
    })

    await writeFileSync(pathMarkdown, content.join(LF))
  }

  private getDefaultValue(item: any) {
    if (item.name === 'id') return ''
    if (item.type.indexOf('text') > -1) return 'Empty'
    if (item.type.indexOf('json') > -1) {
      if (item.comment.indexOf('数组形式')) return '[ ]'
      return '{ }'
    }
    if (item.value === '') return "''"
    return item.value
  }
}

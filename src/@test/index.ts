import { $ } from 'coa-helper'
import { MysqlToCode, MysqlToDocs } from '..'
import mysql from './cMySQL'

$.run(async () => {
  await new MysqlToCode(mysql.bin).generate('src/service/markGenerate', 'MarkGenerate', '码生成记录')
  await new MysqlToDocs(mysql.bin).generate(mysql.database, 'database.md')
})

import { $ } from 'coa-helper'
import test_mysql2code from './test_mysql2code'

$.run(async () => {
  await test_mysql2code.testMysql2Code()
})

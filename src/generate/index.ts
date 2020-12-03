import { $ } from 'coa-helper'
import cMysql from '../app/cMysql'
import { Mysql2Code } from '../mysql2code/Mysql2Code'

const mysql2code = new Mysql2Code(cMysql.bin)
console.info(typeof mysql2code.generate)

/**

 await cMysql.io.schema.createTableIfNotExists('shop_express_delivery', table => {
  table.comment('商城系统物流公司表')
  table.charset('utf8mb4')
  table.collate('utf8mb4_unicode_ci')
  table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
  table.string('deliveryId', 32).comment('物流公司ID').notNullable().defaultTo('')
  table.string('deliveryName', 32).comment('物流公司名称').notNullable().defaultTo('')
  table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
  table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
  table.unique(['deliveryId'])
 })
 await mysql2code.generate('OrderStore', '订单数据')


 await cMysql.io.schema.createTableIfNotExists('shop_express_delivery', table => {
  table.comment('商城系统物流公司表')
  table.charset('utf8mb4')
  table.collate('utf8mb4_unicode_ci')
  table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
  table.string('deliveryId', 32).comment('物流公司ID').notNullable().defaultTo('')
  table.string('deliveryName', 32).comment('物流公司名称').notNullable().defaultTo('')
  table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
  table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
  table.unique(['deliveryId'])
 })
 await mysql2code.generate('OrderStore', '订单数据')

 */

$.run(async () => {

})
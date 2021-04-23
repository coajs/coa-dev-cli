import { $ } from 'coa-helper'
import cMysql from '../app/cMysql'
import { Mysql2Code } from '../mysql2code/Mysql2Code'

const mysql2code = new Mysql2Code(cMysql.bin)
console.info(typeof mysql2code.generate)

/**



 await cMysql.io.schema.dropTableIfExists('core_store')
 await cMysql.io.schema.createTableIfNotExists('core_store', table => {
    table.comment('核心系统小店表')
    table.charset('utf8mb4')
    table.collate('utf8mb4_unicode_ci')
    table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
    table.string('storeId', 32).comment('小店名称ID').notNullable().defaultTo('')
    table.string('storeNo', 32).comment('小店编号').notNullable().defaultTo('')
    table.string('storeHashId', 32).comment('小店序列号').notNullable().defaultTo('')
    table.string('accountId', 32).comment('账户ID').notNullable().defaultTo('')
    table.string('storeAccountId', 32).comment('小店账户ID').notNullable().defaultTo('')
    table.string('name', 32).comment('小店名称').notNullable().defaultTo('')
    table.string('companyId', 32).comment('公司ID').notNullable().defaultTo('')
    table.string('province', 64).comment('地址-省').notNullable().defaultTo('')
    table.string('city', 64).comment('地址-市').notNullable().defaultTo('')
    table.string('district', 64).comment('地址-区').notNullable().defaultTo('')
    table.string('address', 64).comment('地址-详细地址').notNullable().defaultTo('')
    table.string('phone', 64).comment('客服电话').notNullable().defaultTo('')
    table.string('avatar', 256).comment('小店头像').notNullable().defaultTo('')
    table.string('ownerName', 64).comment('负责人姓名').notNullable().defaultTo('')
    table.string('ownerMobile', 64).comment('负责人手机号').notNullable().defaultTo('')
    table.integer('status').comment('状态，1正常 2隐藏').notNullable().defaultTo(1)
    table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
    table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
    table.unique(['storeId'])
  })


 await cMysql.io.schema.dropTableIfExists('shop_salesman')
 await cMysql.io.schema.createTableIfNotExists('shop_salesman', table => {
    table.comment('商城系统销售员表')
    table.charset('utf8mb4')
    table.collate('utf8mb4_unicode_ci')
    table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
    table.string('salesmanId', 32).comment('销售员ID').notNullable().defaultTo('')
    table.string('storeId', 32).comment('小店ID').notNullable().defaultTo('')
    table.string('accountId', 32).comment('账户ID').notNullable().defaultTo('')
    table.string('storeAccountId', 32).comment('小店账户ID').notNullable().defaultTo('')
    table.string('name', 32).comment('小店名称').notNullable().defaultTo('')
    table.string('mobile', 32).comment('手机号').notNullable().defaultTo('')
    table.string('avatar', 256).comment('头像').notNullable().defaultTo('')
    table.string('source', 32).comment('来源').notNullable().defaultTo('')
    table.string('role', 32).comment('身份角色 owner 负责人，employee 员工').notNullable().defaultTo('')
    table.string('type', 32).comment('销售员类别').notNullable().defaultTo('')
    table.string('inviterId', 32).comment('邀请人').notNullable().defaultTo('')
    table.bigInteger('totalSalesAmount').comment('累计销售额').notNullable().defaultTo(0)
    table.bigInteger('totalBonusAmount').comment('累计佣金').notNullable().defaultTo(0)
    table.bigInteger('totalCustomerCount').comment('累计累计顾客数').notNullable().defaultTo(0)
    table.bigInteger('totalOrderCount').comment('累计销售额').notNullable().defaultTo(0)
    table.integer('status').comment('状态，1正常 2隐藏').notNullable().defaultTo(1)
    table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
    table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
    table.unique(['salesmanId'])
  })
 await mysql2code.generate('files', 'ShopSalesman', '小店销售员')

 await cMysql.io.schema.dropTableIfExists('shop_store_spu')
 await cMysql.io.schema.createTableIfNotExists('shop_store_spu', table => {
    table.comment('商城系统小店商品表')
    table.charset('utf8mb4')
    table.collate('utf8mb4_unicode_ci')
    table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
    table.string('storeSpuId', 32).comment('小店名称ID').notNullable().defaultTo('')
    table.string('storeId', 32).comment('小店ID').notNullable().defaultTo('')
    table.string('spuId', 32).comment('商品ID').notNullable().defaultTo('')
    table.bigInteger('weight').comment('权重').notNullable().defaultTo(0)
    table.bigInteger('bonusRate').comment('佣金比例10=10%').notNullable().defaultTo(0)
    table.integer('status').comment('状态，1正常 2隐藏').notNullable().defaultTo(1)
    table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
    table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
    table.unique(['storeId'])
  })
 await mysql2code.generate('files', 'ShopStoreSpu', '小店商品')


 await cMysql.io.schema.dropTableIfExists('shop_spu_store_rate')
 await cMysql.io.schema.createTableIfNotExists('shop_spu_store_rate', table => {
    table.comment('商城系统小店商品佣金比例表')
    table.charset('utf8mb4')
    table.collate('utf8mb4_unicode_ci')
    table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
    table.string('spuId', 32).comment('商品ID').notNullable().defaultTo('')
    table.bigInteger('bonusRate').comment('佣金比例10=10%').notNullable().defaultTo(0)
    table.integer('status').comment('状态，1正常 2隐藏').notNullable().defaultTo(1)
    table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
    table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
    table.unique(['spuId'])
  })
 await mysql2code.generate('files', 'ShopSpuStoreRate', '商品小店比例表')



 await cMysql.io.schema.dropTableIfExists('shop_sales_share')
 await cMysql.io.schema.createTableIfNotExists('shop_sales_share', table => {
    table.comment('商城系统销售员分享表')
    table.charset('utf8mb4')
    table.collate('utf8mb4_unicode_ci')
    table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)

    table.string('shareId', 32).comment('分享ID').notNullable().defaultTo('')
    table.string('type', 32).comment('类型，store店铺分享，spu商品分享').notNullable().defaultTo('')
    table.string('salesId', 32).comment('销售员ID').notNullable().defaultTo('')
    table.string('managerId', 32).comment('管理员ID').notNullable().defaultTo('')
    table.integer('shareTime', 32).comment('分享时间').notNullable().defaultTo(0)

    table.integer('status').comment('状态，1正常 2隐藏').notNullable().defaultTo(1)
    table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
    table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
    table.unique(['shareId'])
  })
 await mysql2code.generate('files', 'ShopSalesShare', '商城系统销售员分享')

 await cMysql.io.schema.dropTableIfExists('shop_user_sales_bind')
 await cMysql.io.schema.createTableIfNotExists('shop_user_sales_bind', table => {
    table.comment('商城系统用户绑定销售员表')
    table.charset('utf8mb4')
    table.collate('utf8mb4_unicode_ci')
    table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)

    table.string('userId', 32).comment('用户ID').notNullable().defaultTo('')
    table.string('salesId', 32).comment('销售员ID').notNullable().defaultTo('')
    table.string('process', 32).comment('绑定状态，pended绑定，started已生效，ended已失效').notNullable().defaultTo('')
    table.integer('bindTime', 32).comment('当前绑定时间').notNullable().defaultTo(0)

    table.integer('status').comment('状态，1正常 2隐藏').notNullable().defaultTo(1)
    table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
    table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
    table.unique(['userId'])
  })
 await mysql2code.generate('files', 'ShopUserSalesBind', '商城系统用户绑定销售员表')

 await cMysql.io.schema.dropTableIfExists('mark_task_graph')
 await cMysql.io.schema.createTableIfNotExists('mark_task_graph', table => {
    table.comment('码系统码任务模板')
    table.charset('utf8mb4')
    table.collate('utf8mb4_unicode_ci')
    table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
    table.string('graphId', 32).comment('模板ID').notNullable().defaultTo('')
    table.string('graphNo', 32).comment('模板编号').notNullable().defaultTo('')
    table.string('source', 32).comment('底图').notNullable().defaultTo('')
    table.string('accountId', 32).comment('所属账户ID').notNullable().defaultTo('')
    table.string('companyId', 32).comment('企业ID').notNullable().defaultTo('')
    table.string('name', 64).comment('模板名称').notNullable().defaultTo('')
    table.string('type', 32).comment('类型，png，tif').notNullable().defaultTo('')
    table.integer('width', 32).comment('底图宽').notNullable().defaultTo(0)
    table.integer('height', 32).comment('底图高').notNullable().defaultTo(0)
    table.json('qrs').comment('二维码信息[x,y,宽,颜色,路径,宽度],数组').notNullable()
    table.integer('weight').comment('权重').notNullable().defaultTo(100)
    table.string('creatorId', 32).comment('创建者ID').notNullable().defaultTo('')
    table.integer('status').comment('状态，1正常 2隐藏').notNullable().defaultTo(1)
    table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
    table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
    table.unique(['graphId'])
  })
 await mysql2code.generate('files', 'MarkTaskGraph', '码系统码任务模板表')

 */

$.run(async () => {

  // await cMysql.io.schema.dropTableIfExists('mark_batch_pack')
  // await cMysql.io.schema.createTableIfNotExists('mark_batch_pack', table => {
  //   table.comment('码系统码压缩包')
  //   table.charset('utf8mb4')
  //   table.collate('utf8mb4_unicode_ci')
  //   table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
  //   table.string('packId', 32).comment('压缩包ID').notNullable().defaultTo('')
  //   table.string('packNo', 32).comment('压缩包编号').notNullable().defaultTo('')
  //   table.string('accountId', 32).comment('账户ID').notNullable().defaultTo('')
  //   table.string('companyId', 64).comment('公司ID').notNullable().defaultTo('')
  //   table.string('graphStoreId', 32).comment('存储的模板信息').notNullable().defaultTo('')
  //   table.string('graphId', 32).comment('模板ID').notNullable().defaultTo('')
  //   table.string('productId', 32).comment('产品ID').notNullable().defaultTo('')
  //   table.string('taskId', 32).comment('任务ID').notNullable().defaultTo('')
  //   table.string('batchId', 32).comment('批次ID').notNullable().defaultTo('')
  //   table.string('type', 32).comment('类型').notNullable().defaultTo('')
  //   table.string('name', 64).comment('压缩包名称').notNullable().defaultTo('')
  //   table.integer('fileCount', 20).comment('文件数量').notNullable().defaultTo(0)
  //   table.integer('qrCount', 20).comment('二维码数量').notNullable().defaultTo(0)
  //   table.integer('download', 20).comment('下载次数').notNullable().defaultTo(0)
  //   table.integer('status').comment('状态，1正常 2隐藏').notNullable().defaultTo(1)
  //   table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
  //   table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
  //   table.unique(['packId'])
  // })
  // await mysql2code.generate('files', 'MarkBatchPack', '码系统码任务批次压缩包')

  //{ typeId: 'CloudPrint', name: '云打印专用模板', graphCount: 0, description: '' },

  // await cMysql.io.schema.dropTableIfExists('mark_task_graph_type')
  // await cMysql.io.schema.createTableIfNotExists('mark_task_graph_type', table => {
  //   table.comment('码系统模板类型')
  //   table.charset('utf8mb4')
  //   table.collate('utf8mb4_unicode_ci')
  //   table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
  //   table.string('typeId', 32).comment('类型ID').notNullable().defaultTo('')
  //   table.string('name', 32).comment('名称').notNullable().defaultTo('')
  //   table.bigInteger('graphCount').comment('创建模板数量').notNullable().defaultTo(0)
  //   table.string('description', 128).comment('码模板类型描述').notNullable().defaultTo('')
  //   table.integer('status').comment('状态，1正常 2隐藏').notNullable().defaultTo(1)
  //   table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
  //   table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
  //   table.unique(['typeId'])
  // })
  // await mysql2code.generate('files', 'MarkTaskGraphType', '码系统模板类型')

  // await cMysql.io.schema.dropTableIfExists('shop_sales_apply_withdraw')
  // await cMysql.io.schema.createTableIfNotExists('shop_sales_apply_withdraw', table => {
  //   table.comment('商城系统小店销售员提现申请')
  //   table.charset('utf8mb4')
  //   table.collate('utf8mb4_unicode_ci')
  //   table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
  //   table.string('applyId', 32).comment('提现申请ID').notNullable().defaultTo('')
  //   table.string('accountId', 32).comment('小店账户ID').notNullable().defaultTo('')
  //   table.string('companyAccountId', 32).comment('企业账户ID').notNullable().defaultTo('')
  //   table.string('storeId', 32).comment('小店ID').notNullable().defaultTo('')
  //   table.string('salesId', 32).comment('申请销售员ID').notNullable().defaultTo('')
  //   table.bigInteger('total').comment('申请金额').notNullable().defaultTo(0)
  //   table.bigInteger('amount').comment('到账金额').notNullable().defaultTo(0)
  //   table.bigInteger('fee').comment('手续费').notNullable().defaultTo(0)
  //   table.string('process', 32).comment('申请进度，pended 已申请  transferred已打款  closed已关闭').notNullable().defaultTo('')
  //   table.bigInteger('applyAt').comment('申请时间').notNullable().defaultTo(0)
  //   table.bigInteger('transferAt').comment('转账时间').notNullable().defaultTo(0)
  //   table.bigInteger('closeAt').comment('关闭时间').notNullable().defaultTo(0)
  //   table.string('operatorId', 32).comment('操作人员ID').notNullable().defaultTo('')
  //   table.integer('status').comment('状态，1正常 2隐藏').notNullable().defaultTo(1)
  //   table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
  //   table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
  //   table.unique(['applyId'])
  // })
  // await mysql2code.generate('files', 'ShopSalesApplyWithdraw', '商城系统小店销售员提现申请')

  // await cMysql.io.schema.dropTableIfExists('mark_file')
  // await cMysql.io.schema.createTableIfNotExists('mark_file', table => {
  //   table.comment('码系统文件表')
  //   table.charset('utf8mb4')
  //   table.collate('utf8mb4_unicode_ci')
  //   table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
  //   table.string('fileId', 32).comment('文件ID').notNullable().defaultTo('')
  //   table.string('fileNo', 32).comment('文件No').notNullable().defaultTo('')
  //   table.string('draftStoreId', 32).comment('存储的设计稿').notNullable().defaultTo('')
  //   table.string('draftId', 32).comment('设计稿').notNullable().defaultTo('')
  //   table.string('taskId', 32).comment('任务ID').notNullable().defaultTo('')
  //   table.string('batchId', 32).comment('批次ID').notNullable().defaultTo('')
  //   table.string('name', 32).comment('名称').notNullable().defaultTo('')
  //   table.string('type', 32).comment('文件类型，raw-url-txt原始二维码链接raw-code-image原始二维码图片graph-image-tif指定格式二维码图片graph-image-png是定格式二维码图片').notNullable().defaultTo('')
  //   table.string('path', 255).comment('访问路径').notNullable().defaultTo('')
  //   table.string('fileCount', 32).comment('压缩包内文件数量').notNullable().defaultTo('')
  //   table.string('qrCount', 32).comment('二维码数量').notNullable().defaultTo('')
  //   table.string('downloadCount', 32).comment('压缩包的下载数量').notNullable().defaultTo('')
  //   table.json('downloadInfo').comment('下载历史').notNullable()
  //   table.string('creatorId', 32).comment('创建者').notNullable().defaultTo('')
  //   table.string('process', 32).comment('生成状态，pended待生成 failed生成失败 completed生成完成').notNullable().defaultTo('')
  //   table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
  //   table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
  //   table.unique(['fileId'])
  // })
  // await mysql2code.generate('files', 'MarkFile', '码系统文件表')

  //
  // await cMysql.io.schema.dropTableIfExists('mark_store_draft')
  // await cMysql.io.schema.createTableIfNotExists('mark_store_draft', table => {
  //   table.comment('码系统设计稿表')
  //   table.charset('utf8mb4')
  //   table.collate('utf8mb4_unicode_ci')
  //   table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
  //   table.string('draftStoreId', 32).comment('设计稿ID').notNullable().defaultTo('')
  //   table.string('draftId', 32).comment('设计稿').notNullable().defaultTo('')
  //   table.json('draft').comment('设计稿数据').notNullable()
  //   table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
  //   table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
  //   table.unique(['draftStoreId'])
  // })
  // await mysql2code.generate('files', 'MarkStoreDraft', '码系统设计稿表')

  // await cMysql.io.schema.dropTableIfExists('biz_bank_card')
  // await cMysql.io.schema.createTableIfNotExists('biz_bank_card', table => {
  //   table.comment('业务系统银行卡')
  //   table.charset('utf8mb4')
  //   table.collate('utf8mb4_unicode_ci')
  //   table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
  //   table.string('cardId', 32).comment('银行卡ID').notNullable().defaultTo('')
  //   table.string('cardNo', 32).comment('银行卡号').notNullable().defaultTo('')
  //   table.string('managerId', 32).comment('管理员ID').notNullable().defaultTo('')
  //   table.string('cardholder', 32).comment('持卡人').notNullable().defaultTo('')
  //   table.string('bankName', 32).comment('银行名称').notNullable().defaultTo('')
  //   table.string('branchName', 32).comment('支行名称').notNullable().defaultTo('')
  //   table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
  //   table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
  //   table.unique(['cardId'])
  // })
  // await mysql2code.generate('files', 'BizBankCard', '业务系统银行卡')

  // await cMysql.io.schema.dropTableIfExists('mark_draft')
  // await cMysql.io.schema.createTableIfNotExists('mark_draft', table => {
  //   table.comment('码系统设计稿')
  //   table.charset('utf8mb4')
  //   table.collate('utf8mb4_unicode_ci')
  //   table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
  //   table.string('draftId', 32).comment('稿ID').notNullable().defaultTo('')
  //   table.string('draftNo', 32).comment('稿No').notNullable().defaultTo('')
  //   table.string('typeId', 32).comment('稿类型').notNullable().defaultTo('')
  //   table.string('background', 255).comment('背景图').notNullable().defaultTo('')
  //   table.string('preview', 255).comment('预览图').notNullable().defaultTo('')
  //   table.string('name', 64).comment('设计稿名称').notNullable().defaultTo('')
  //   table.integer('dpi').comment('分辨率').notNullable().defaultTo(0)
  //   table.integer('width').comment('宽度').notNullable().defaultTo(0)
  //   table.integer('height').comment('高度').notNullable().defaultTo(0)
  //   table.json('qrs').comment('设计稿包含的二维码的数据').notNullable()
  //   table.json('qrCount').comment('每个设计稿包含的二维码数量').notNullable()
  //   table.string('creatorId', 64).comment('创建者ID').notNullable().defaultTo('')
  //   table.integer('status').comment('状态，1正常 2隐藏').notNullable().defaultTo(1)
  //   table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
  //   table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
  //   table.unique(['draftId'])
  // })

  // await cMysql.io.schema.dropTableIfExists('mark_pack')
  // await cMysql.io.schema.createTableIfNotExists('mark_pack', table => {
  //   table.comment('码系统压缩文件')
  //   table.charset('utf8mb4')
  //   table.collate('utf8mb4_unicode_ci')
  //   table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
  //   table.string('packId', 32).comment('压缩文件ID').notNullable().defaultTo('')
  //   table.string('packNo', 32).comment('压缩文件No').notNullable().defaultTo('')
  //   table.string('draftStoreId', 32).comment('记录的草稿数据').notNullable().defaultTo('')
  //   table.string('draftId', 32).comment('草稿ID').notNullable().defaultTo('')
  //   table.string('taskId', 32).comment('任务ID').notNullable().defaultTo('')
  //   table.string('batchId', 32).comment('批次ID').notNullable().defaultTo('')
  //   table.string('name', 64).comment('名称').notNullable().defaultTo('')
  //   table.string('path', 64).comment('访问路径').notNullable().defaultTo('')
  //   table.integer('fileCount').comment('当前压缩文件中包含的所有文件数量').notNullable().defaultTo(1)
  //   table.integer('qrCount').comment('当前压缩文件中包含的所有二维码数量').notNullable().defaultTo(1)
  //   table.integer('downloadCount').comment('下载数').notNullable().defaultTo(1)
  //   table.json('downloadInfo').comment('下载信息').notNullable()
  //   table.string('creatorId', 64).comment('创建者ID').notNullable().defaultTo('')
  //   table.integer('status').comment('状态，1正常 2隐藏').notNullable().defaultTo(1)
  //   table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
  //   table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
  //   table.unique(['draftId'])
  // })

  // await cMysql.io.schema.dropTableIfExists('mark_store_draft')
  // await cMysql.io.schema.createTableIfNotExists('mark_store_draft', table => {
  //   table.comment('码系统设计稿记录表')
  //   table.charset('utf8mb4')
  //   table.collate('utf8mb4_unicode_ci')
  //   table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
  //   table.string('draftStoreId', 32).comment('记录ID').notNullable().defaultTo('')
  //   table.string('draftId', 32).comment('设计稿ID').notNullable().defaultTo('')
  //   table.json('draft').comment('设计稿详细数据').notNullable()
  //   table.integer('status').comment('状态，1正常 2隐藏').notNullable().defaultTo(1)
  //   table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
  //   table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
  //   table.unique(['draftStoreId'])
  // })
  //

  //
  // await cMysql.io.schema.dropTableIfExists('shop_share_material')
  // await cMysql.io.schema.createTableIfNotExists('shop_share_material', table => {
  //   table.comment('商城系统推广物料表')
  //   table.charset('utf8mb4')
  //   table.collate('utf8mb4_unicode_ci')
  //   table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
  //   table.string('materialId', 32).comment('物料ID').notNullable().defaultTo('')
  //   table.string('materialNo', 32).comment('物料编号').notNullable().defaultTo('')
  //   table.integer('count').comment('数量').notNullable().defaultTo(1)
  //   table.string('scene', 32).comment('场景').notNullable().defaultTo('')
  //   table.string('creatorId', 32).comment('创建人').notNullable().defaultTo('')
  //   table.string('process', 256).comment('状态').notNullable().defaultTo('')
  //   table.string('remark', 256).comment('备注').notNullable().defaultTo('')
  //   table.json('downloadInfo').comment('下载信息').notNullable()
  //   table.integer('downloadCount').comment('下载数').notNullable().defaultTo(1)
  //   table.integer('status').comment('状态，1正常 2隐藏').notNullable().defaultTo(1)
  //   table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
  //   table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
  //   table.unique(['materialId'])
  // })
  // await mysql2code.generate('files', 'ShopShareMaterial', '商城系统推广物料表')
  //
  // await cMysql.io.schema.dropTableIfExists('biz_annul_report_2020')
  // await cMysql.io.schema.createTableIfNotExists('biz_annul_report_2020', table => {
  //   table.comment('业务系统2020年终报告')
  //   table.charset('utf8mb4')
  //   table.collate('utf8mb4_unicode_ci')
  //   table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
  //   table.string('accountId', 32).comment('账户ID').notNullable().defaultTo('')
  //   table.string('keyword', 32).comment('年度关键字').notNullable().defaultTo('')
  //   table.bigInteger('spuCount').comment('商品数量').notNullable().defaultTo(0)
  //   table.bigInteger('schoolCount').comment('学校拓展数量').notNullable().defaultTo(0)
  //   table.bigInteger('normalOrderPrice').comment('零售总收入').notNullable().defaultTo(0)
  //   table.bigInteger('bookingOrderPrice').comment('征订总收入').notNullable().defaultTo(0)
  //   table.bigInteger('studentCount').comment('智能校服守护学生').notNullable().defaultTo(0)
  //   table.bigInteger('bookingCount').comment('共发起了1次征订').notNullable().defaultTo(0)
  //   table.bigInteger('firstBookingAt').comment('首次发起征订时间').notNullable().defaultTo(0)
  //   table.bigInteger('maxSchoolBooking').comment('最大一次征订').notNullable().defaultTo(0)
  //   table.bigInteger('schoolNormalCount').comment('共0个专属商城').notNullable().defaultTo(0)
  //   table.bigInteger('firstOnlineAt').comment('商城上线时间').notNullable().defaultTo(0)
  //   table.bigInteger('firstOrderAt').comment('首次商城下单时间').notNullable().defaultTo(0)
  //   table.bigInteger('firstOrderPrice').comment('首次商城下单价格').notNullable().defaultTo(0)
  //   table.bigInteger('orderRefundCount').comment('共处理售后定订单').notNullable().defaultTo(0)
  //   table.bigInteger('refundOrderRate').comment('企业售后比率').notNullable().defaultTo(0)
  //   table.bigInteger('maxOrderCountOrderPriceAverage').comment('最高客单价').notNullable().defaultTo(0)
  //   table.bigInteger('userTradeRate').comment('支付转化率').notNullable().defaultTo(0)
  //   table.bigInteger('userCount').comment('累计访问用户').notNullable().defaultTo(0)
  //   table.bigInteger('memberCount').comment('累计注册用户').notNullable().defaultTo(0)
  //   table.bigInteger('shopUserCompare').comment('商城用户访问趋势同比').notNullable().defaultTo(0)
  //   table.json('shopUserTrade').comment('趋势，12个月的趋势')
  //   table.json('maxSchoolNormal').comment('最大一个专属商城')
  //   table.json('firstUser').comment('第一个用户')
  //   table.integer('status').comment('状态，1正常 2隐藏').notNullable().defaultTo(1)
  //   table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
  //   table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
  //
  //   table.unique(['accountId'])
  // })
  // await mysql2code.generate('files', 'BizAnnulReport2020', '2020年终报告')

  // await cMysql.io.schema.dropTableIfExists('main_image_template')
  // await cMysql.io.schema.createTableIfNotExists('main_image_template', table => {
  //   table.comment('公共系统图片模板')
  //   table.charset('utf8mb4')
  //   table.collate('utf8mb4_unicode_ci')
  //   table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
  //   table.string('templateId', 32).comment('图片模板ID').notNullable().defaultTo('')
  //   table.string('name', 64).comment('名称').notNullable().defaultTo('')
  //   table.string('preview', 256).comment('预览图').notNullable().defaultTo('')
  //   table.integer('width').comment('长度').notNullable().defaultTo(0)
  //   table.integer('height').comment('高度').notNullable().defaultTo(0)
  //   table.string('background', 256).comment('背景图片').notNullable().defaultTo('')
  //   table.json('wxaQrs').comment('微信小程序码').notNullable()
  //   table.integer('status').comment('状态，1正常 2隐藏').notNullable().defaultTo(1)
  //   table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
  //   table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
  //   table.unique(['templateId'])
  // })
  // await mysql2code.generate('files', 'MainImageTemplate', '图片模板')

  // await cMysql.io.schema.dropTableIfExists('shop_regiment')
  // await cMysql.io.schema.createTableIfNotExists('shop_regiment', table => {
  //   table.comment('拼团活动')
  //   table.charset('utf8mb4')
  //   table.collate('utf8mb4_unicode_ci')
  //   table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
  //   table.string('regimentId', 32).comment('活动ID').notNullable().defaultTo('')
  //   table.string('name', 64).comment('活动名称').notNullable().defaultTo('')
  //   table.string('spuId', 64).comment('拼团商品').notNullable().defaultTo('')
  //   table.bigInteger('startAt').comment('拼团开始时间').notNullable().defaultTo(0)
  //   table.bigInteger('endAt').comment('拼团结束时间').notNullable().defaultTo(0)
  //   table.bigInteger('buildPeriod').comment('拼团建立时长').notNullable().defaultTo(0)
  //   table.integer('buildUserCount').comment('团建立人数').notNullable().defaultTo(0)
  //   table.json('skuPrices').comment('商品库存价格').notNullable()
  //   table.string('visible', 32).comment('是否提现显示，visible 显示 invisible不显示').notNullable().defaultTo('')
  //   table.string('robot').comment('是否机器人补全团，yes是 no不是').notNullable().defaultTo('yes')
  //   table.bigInteger('robotOn').comment('机器人参团时刻').notNullable().defaultTo(0)
  //   table.string('process', 32).comment('状态 pended 未开始 started进行中 ended 截止').notNullable().defaultTo('')
  //   table.integer('status').comment('状态，1正常 2隐藏').notNullable().defaultTo(1)
  //   table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
  //   table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
  //   table.unique(['regimentId'])
  // })
  // await mysql2code.generate('files', 'ShopRegiment', '拼团活动')
  //

  // await cMysql.io.schema.dropTableIfExists('shop_regiment_group')
  // await cMysql.io.schema.createTableIfNotExists('shop_regiment_group', table => {
  //   table.comment('拼团活动记录')
  //   table.charset('utf8mb4')
  //   table.collate('utf8mb4_unicode_ci')
  //   table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
  //   table.string('regimentGroupId', 32).comment('活动记录ID').notNullable().defaultTo('')
  //   table.string('regimentId', 32).comment('活动ID').notNullable().defaultTo('')
  //   table.string('headId').comment('团长ID').notNullable().defaultTo('')
  //   table.integer('buildUserCount').comment('团建立人数').notNullable().defaultTo(0)
  //   table.json('userIds').comment('用户Ids').notNullable()
  //   table.json('orderIds').comment('订单Ids').notNullable()
  //   table.json('userOrderIds').comment('用户订单关系').notNullable()
  //   table.json('robots').comment('参加拼团的机器人').notNullable()
  //   table.bigInteger('startAt').comment('拼团开始时间').notNullable().defaultTo(0)
  //   table.bigInteger('endAt').comment('拼团结束时间').notNullable().defaultTo(0)
  //   table.string('process', 32).comment('状态 pended 待成团 failed拼团失败 completed 拼团成功').notNullable().defaultTo('')
  //   table.integer('status').comment('状态，1正常 2隐藏').notNullable().defaultTo(1)
  //   table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
  //   table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
  //   table.unique(['regimentId'])
  // })
  // await mysql2code.generate('files', 'ShopRegimentGroup', '拼团活动记录')

  //
  // mark_quota_flow
  await cMysql.io.schema.dropTableIfExists('mark_quota_order')
  await cMysql.io.schema.createTableIfNotExists('mark_quota_order', table => {
    table.comment('码额度订单')
    table.charset('utf8mb4')
    table.collate('utf8mb4_unicode_ci')
    table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
    table.string('orderId', 32).comment('额度订单ID').notNullable().defaultTo('')
    table.string('outOrderId', 64).comment('外部订单号').notNullable().defaultTo('')
    table.string('accountId', 32).comment('账户ID').notNullable().defaultTo('')
    table.string('type', 32).comment('类型类型，income 收入 outcome 支出').notNullable().defaultTo('')
    table.string('orderType', 32).comment('类型类型，charge充值 refund退还 giving赠送').notNullable().defaultTo('')
    table.integer('count').comment('额度数量').notNullable().defaultTo(0)
    table.string('operatorId', 32).comment('操作人ID').notNullable().defaultTo('')
    table.string('remark', 500).comment('备注').notNullable().defaultTo('')
    table.integer('status').comment('状态，1正常 2隐藏').notNullable().defaultTo(1)
    table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
    table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
    table.unique(['orderId'])
  })
  await mysql2code.generate('files', 'MarkQuotaOrder', '码额度订单表')

  await cMysql.io.schema.dropTableIfExists('mark_quota_flow')
  await cMysql.io.schema.createTableIfNotExists('mark_quota_flow', table => {
    table.comment('码额度流水')
    table.charset('utf8mb4')
    table.collate('utf8mb4_unicode_ci')
    table.increments().comment('自增长ID、主键').notNullable().defaultTo(0)
    table.string('flowId', 32).comment('额度流水ID').notNullable().defaultTo('')
    table.string('orderId', 32).comment('额度订单ID').notNullable().defaultTo('')
    table.string('outOrderId', 64).comment('外部订单号').notNullable().defaultTo('')
    table.string('accountId', 32).comment('账户ID').notNullable().defaultTo('')
    table.string('flowType', 32).comment('类型类型，income入账 outcome出账').notNullable().defaultTo('')
    table.integer('currentCount').comment('当前剩余额度数量').notNullable().defaultTo(0)
    table.integer('count').comment('额度数量').notNullable().defaultTo(0)
    table.string('remark', 500).comment('备注').notNullable().defaultTo('')
    table.integer('status').comment('状态，1正常 2隐藏').notNullable().defaultTo(1)
    table.bigInteger('created').comment('创建时间').notNullable().defaultTo(0)
    table.bigInteger('updated').comment('更新时间').notNullable().defaultTo(0)
    table.unique(['flowId'])
  })
  await mysql2code.generate('files', 'MarkQuotaFlow', '码额度流水表')

})

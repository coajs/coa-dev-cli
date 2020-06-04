export default `
import { $ } from 'coa-helper'
import { MysqlCached } from 'coa-mysql'

const scheme = {
  // $scheme$
}
const pick = ['$pick_array$']
const caches = {}

export declare namespace $ModelName$ {
  type Scheme = typeof scheme
  type PartialScheme = Partial<Scheme>
}
export default new class extends MysqlCached<$ModelName$.Scheme> {

  constructor () {
    super({ name: '$ModelName$', title: '$ModelTitle$', prefix: '$modelPrefix$', scheme, pick, caches })
  }

  async getList (where: { status: number }, where2: { search: string }) {

    const list = await this.findIdList([where, where2], qb => {
      qb.filter(where)
      qb.search(['$modelName$Id'], where2.search)
    })

    await $.attach(list, '$modelName$Id', '', ids => this.mGetByIds(ids))

    return list
  }

  async getPageList (page: Page, where: { status: number }, where2: { search: string }) {

    const list = await this.findIdPageList([where, where2], page, qb => {
      qb.filter(where)
      qb.search(['$modelName$Id'], where2.search)
    })

    await $.attach(list.list, '$modelName$Id', '', ids => this.mGetByIds(ids))

    return list
  }
}` as string
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
    super({ name: '$ModelName$', title: '$ModelTitle$', scheme, pick, caches })
  }

  async getList (where: { status: number }, where2: { search: string }) {

    const finger = this.cacheFinger(where, where2)

    const query: Query = qb => {
      qb.filter(where)
      qb.search(['$modelName$Id'], where2.search)
    }

    const list = await this.findIdList(finger, query)

    await $.attach(list, '$modelName$Id', '', ids => this.mGetByIds(ids))

    return list
  }

  async getPageList (page: Page, where: { status: number }, where2: { search: string }) {

    const finger = this.cacheFinger(where, where2)

    const query: Query = qb => {
      qb.filter(where)
      qb.search(['$modelName$Id'], where2.search)
    }

    const list = await this.findIdPageList(finger, page, query)

    await $.attach(list.list, '$modelName$Id', '', ids => this.mGetByIds(ids))

    return list
  }
}` as string
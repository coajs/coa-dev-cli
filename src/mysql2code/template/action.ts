export default `
import m$ModelName$ from './m$ModelName$'
import { die } from 'coa-error'
import { _ } from 'coa-helper'

export default <Action>{

  '$model_name$.ua.post': {
    options: {
      method: 'POST',
      name: '用户创建$模块名称$',
      param: {
        // $postBody$
      }
    },
    async default (ctx) {

      ctx.uAuth.checkUserId()

      //构造$模块名称$信息
      const value = {
        // $postValue$
      }

      const $modelName$Id = await m$ModelName$.insert(value)

      ctx.jsonOk({ $modelName$Id })
    }
  },

  '$model_name$.ua.put': {
    options: {
      method: 'PUT',
      name: '用户修改$模块名称$信息',
      param: {
        // $postBody$
      }
    },
    async default (ctx) {

      ctx.uAuth.checkUserId()

      const $modelName$Id = ctx.required('$modelName$Id', '')

      //构造$模块名称$信息
      const value = {
        // $postValue$
      }

      const result = await m$ModelName$.updateById($modelName$Id, value)

      ctx.jsonOk(result)
    }
  },

  '$model_name$.ua.del': {
    options: {
      method: 'DELETE',
      name: '用户删除$模块名称$',
      param: {
        $modelName$Id: { required: true, description: '$模块名称$ID', example: '' },
      }
    },
    async default (ctx) {

      ctx.uAuth.checkUserId()

      const $modelName$Id = ctx.required('$modelName$Id', '')

      const result = await m$ModelName$.deleteByIds($modelName$Id.split(','))

      ctx.jsonOk(result)
    }
  },

  '$model_name$.ua.get': {
    options: {
      method: 'GET',
      name: '用户获取某个$模块名称$详细信息',
      param: {
        $modelName$Id: { required: true, description: '$模块名称$ID', example: '' },
      }
    },
    async default (ctx) {

      ctx.uAuth.checkUserId()

      const $modelName$Id = ctx.required('$modelName$Id', '')

      const result = await m$ModelName$.checkById($modelName$Id)

      ctx.jsonOk(result)
    }
  },

  '$model_name$.ua.list': {
    options: {
      method: 'GET',
      name: '用户获取$模块名称$列表',
      param: {
        status: { required: false, description: '状态，默认为全部', example: '' },
        search: { required: false, description: '关键词搜索', example: '' },
        last: { required: false, description: '[分页]上次ID，默认为0', example: '' },
        rows: { required: false, description: '[分页]列表数量，默认为20', example: '' },
      }
    },
    async default (ctx) {

      ctx.uAuth.checkUserId()

      const status = ctx.have('status', 0)
      const search = ctx.have('search', '')

      const result = await m$ModelName$.getSortList(ctx.pager(), { status }, { search })

      ctx.jsonOk(result)
    }
  },

  '$model_name$.ma.post': {
    options: {
      method: 'POST',
      name: '管理员创建$模块名称$',
      param: {
        // $postBody$
      }
    },
    async default (ctx) {

      ctx.mAuth.checkId()

      //构造$模块名称$信息
      const value = {
        // $postValue$
      }

      const $modelName$Id = await m$ModelName$.insert(value)

      ctx.jsonOk({ $modelName$Id })
    }
  },

  '$model_name$.ma.put': {
    options: {
      method: 'PUT',
      name: '管理员修改$模块名称$信息',
      param: {
        // $postBody$
      }
    },
    async default (ctx) {

      ctx.mAuth.checkId()

      const $modelName$Id = ctx.required('$modelName$Id', '')

      //构造$模块名称$信息
      const value = {
        // $postValue$
      }

      const result = await m$ModelName$.updateById($modelName$Id, value)

      ctx.jsonOk(result)
    }
  },

  '$model_name$.ma.del': {
    options: {
      method: 'DELETE',
      name: '管理员删除$模块名称$',
      param: {
        $modelName$Id: { required: true, description: '$模块名称$ID', example: '' },
      }
    },
    async default (ctx) {

      ctx.mAuth.checkId()

      const $modelName$Id = ctx.required('$modelName$Id', '')

      const result = await m$ModelName$.deleteByIds($modelName$Id.split(','))

      ctx.jsonOk(result)
    }
  },

  '$model_name$.ma.get': {
    options: {
      method: 'GET',
      name: '管理员获取某个$模块名称$详细信息',
      param: {
        $modelName$Id: { required: true, description: '$模块名称$ID', example: '' },
      }
    },
    async default (ctx) {

      ctx.mAuth.checkId()

      const $modelName$Id = ctx.required('$modelName$Id', '')

      const result = await m$ModelName$.checkById($modelName$Id)

      ctx.jsonOk(result)
    }
  },

  '$model_name$.ma.list': {
    options: {
      method: 'GET',
      name: '管理员获取$模块名称$列表',
      param: {
        status: { required: false, description: '状态，默认为全部', example: '' },
        search: { required: false, description: '关键词搜索', example: '' },
        page: { required: false, description: '[分页]当前页码，默认为1', example: '' },
        rows: { required: false, description: '[分页]列表数量，默认为20', example: '' },
      }
    },
    async default (ctx) {

      ctx.mAuth.checkId()

      const status = ctx.have('status', 0)
      const search = ctx.have('search', '')

      const result = await m$ModelName$.getViewList(ctx.pager(), { status }, { search })

      ctx.jsonOk(result)
    }
  },
}` as string
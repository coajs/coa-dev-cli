export default `
import { gateway } from 'gateway/index'
import m$ModelName$ from './m$ModelName$'

gateway.register('$ModelTitle$',{

  'userCompany.$model_name$.add': {
    options: {
      method: 'POST',
      name: '用户创建$模块名称$',
      param: {
        // $requestBody$
      }
    },
    async handler (ctx) {

      ctx.userAuth.checkUserId()

      // $requestValues$

      //构造$模块名称$信息
      const value = {
        // $formatRequestValues$
      }

      const $modelName$Id = await m$ModelName$.insert(value)

      return { $modelName$Id }
    }
  },

  'userCompany.$model_name$.update': {
    options: {
      method: 'PUT',
      name: '用户修改$模块名称$信息',
      param: {
        // $requestBody$
      }
    },
    async handler (ctx) {

      ctx.userAuth.checkUserId()

      const $modelName$Id = ctx.required('$modelName$Id', '')

      // $requestValues$

      //构造$模块名称$信息
      const value = {
        // $formatRequestValues$
      }

      const count = await m$ModelName$.updateById($modelName$Id, value)

      return {count}
    }
  },

  'userCompany.$model_name$.delete': {
    options: {
      method: 'DELETE',
      name: '用户删除$模块名称$',
      param: {
        $modelName$Id: { required: true, description: '$模块名称$ID', example: '' },
      }
    },
    async handler (ctx) {

      ctx.userAuth.checkUserId()

      const $modelName$Id = ctx.required('$modelName$Id', '')

      const count = await m$ModelName$.deleteByIds($modelName$Id.split(','))

      return {count}
    }
  },

  'userCompany.$model_name$.get': {
    options: {
      method: 'GET',
      name: '用户获取某个$模块名称$详细信息',
      param: {
        $modelName$Id: { required: true, description: '$模块名称$ID', example: '' },
      }
    },
    async handler (ctx) {

      ctx.userAuth.checkUserId()

      const $modelName$Id = ctx.required('$modelName$Id', '')

      const result = await m$ModelName$.checkById($modelName$Id)

      return result
    }
  },

  'userCompany.$model_name$.getSortList': {
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
    async handler (ctx) {

      ctx.userAuth.checkUserId()

      const status = ctx.have('status', 0)
      const search = ctx.have('search', '')

      const result = await m$ModelName$.getSortList(ctx.pager(), { status }, { search })

      return result
    }
  },

  'managerCompany.$model_name$.add': {
    options: {
      method: 'POST',
      name: '管理员创建$模块名称$',
      param: {
        // $requestBody$
      }
    },
    async handler (ctx) {

      ctx.managerAuth.checkManagerId()

      // $requestValues$

      //构造$模块名称$信息
      const value = {
        // $formatRequestValues$
      }

      const $modelName$Id = await m$ModelName$.insert(value)

      return { $modelName$Id }
    }
  },

  'managerCompany.$model_name$.update': {
    options: {
      method: 'PUT',
      name: '管理员修改$模块名称$信息',
      param: {
        // $requestBody$
      }
    },
    async handler (ctx) {

      ctx.managerAuth.checkManagerId()

      const $modelName$Id = ctx.required('$modelName$Id', '')

      // $requestValues$

      //构造$模块名称$信息
      const value = {
        // $formatRequestValues$
      }

      const count = await m$ModelName$.updateById($modelName$Id, value)

      return {count}
    }
  },

  'managerCompany.$model_name$.delete': {
    options: {
      method: 'DELETE',
      name: '管理员删除$模块名称$',
      param: {
        $modelName$Id: { required: true, description: '$模块名称$ID', example: '' },
      }
    },
    async handler (ctx) {

      ctx.managerAuth.checkManagerId()

      const $modelName$Id = ctx.required('$modelName$Id', '')

      const count = await m$ModelName$.deleteByIds($modelName$Id.split(','))

      return {count}
    }
  },

  'managerCompany.$model_name$.get': {
    options: {
      method: 'GET',
      name: '管理员获取某个$模块名称$详细信息',
      param: {
        $modelName$Id: { required: true, description: '$模块名称$ID', example: '' },
      }
    },
    async handler (ctx) {

      ctx.managerAuth.checkManagerId()

      const $modelName$Id = ctx.required('$modelName$Id', '')

      const result = await m$ModelName$.checkById($modelName$Id)

      return result
    }
  },

  'managerCompany.$model_name$.getViewList': {
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
    async handler (ctx) {

      ctx.managerAuth.checkManagerId()

      const status = ctx.have('status', 0)
      const search = ctx.have('search', '')

      const result = await m$ModelName$.getViewList(ctx.pager(), { status }, { search })

     return result
    }
  },
})` as string
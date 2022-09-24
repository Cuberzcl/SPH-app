import _request from './request'

//三级联动
export const reqCategoryList = () =>
  _request({ url: '/product/getBaseCategoryList', method: 'get' })

import _request from './request'
import mock_request from './mockRequest'

//三级联动
export const reqCategoryList = () =>
  _request({ url: '/product/getBaseCategoryList', method: 'get' })

export const reqGetBannerList = () => mock_request({ url: '/banner', method: 'get' })

export const reqGetFloorList = () => mock_request({ url: '/floor', method: 'get' })

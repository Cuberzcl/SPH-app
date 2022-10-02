import { reqCategoryList, reqGetBannerList, reqGetFloorList } from '@/api'

const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
}
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList
  }
}
const actions = {
  async categoryList({ commit }) {
    let { data: res } = await reqCategoryList()
    if (res.code === 200) {
      commit('CATEGORYLIST', res.data.slice(0, 16))
    }
  },
  async getBannerList({ commit }) {
    let { data: res } = await reqGetBannerList()
    if (res.code === 200) {
      commit('GETBANNERLIST', res.data)
    }
  },
  async getFloorList({ commit }) {
    let { data: res } = await reqGetFloorList()
    if (res.code === 200) {
      commit('GETFLOORLIST', res.data)
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}

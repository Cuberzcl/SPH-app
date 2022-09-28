import { reqCategoryList, reqGetBannerList } from '@/api'

const state = {
  categoryList: [],
  bannerList: []
}
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList
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
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}

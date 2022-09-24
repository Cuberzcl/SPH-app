import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home/Home.vue'
import Search from '@/views/Search/Search.vue'
import Login from '@/views/Login/Login.vue'
import Register from '@/views/Register/Register.vue'

Vue.use(VueRouter)
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}

export default new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home, meta: { showFooter: true }, name: 'home' },
    { path: '/search/:keyword?', component: Search, meta: { showFooter: true }, name: 'search' },
    { path: '/login', component: Login, meta: { showFooter: false }, name: 'login' },
    { path: '/register', component: Register, meta: { showFooter: false }, name: 'register' }
  ]
})

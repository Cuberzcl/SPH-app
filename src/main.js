import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNavVue from '@/components/TypeNav/TypeNav.vue'
import CarouselVue from '@/components/Carousel/Carousel.vue'
import store from '@/store/store.js'
import '@/mock/mockServer'
import 'swiper/css/swiper.css'
// import { reqCategoryList } from '@/api'
// reqCategoryList()
Vue.config.productionTip = false
Vue.component(TypeNavVue.name, TypeNavVue)
Vue.component(CarouselVue.name, CarouselVue)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

<template>
  <div>
    <header-vue></header-vue>

    <!-- 路由 -->
    <router-view></router-view>
    <footer-vue v-show="$route.meta.showFooter"></footer-vue>
  </div>
</template>

<script>
import HeaderVue from './components/Header/Header.vue'
import FooterVue from './components/Footer/Footer.vue'

export default {
  name: 'AppVue',
  components: { HeaderVue, FooterVue },
  mounted() {
    this.$store.dispatch('categoryList')
  }
}
</script>

<style lang="less" scoped></style>

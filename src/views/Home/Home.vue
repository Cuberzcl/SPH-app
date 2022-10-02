<template>
  <div>
    <typeNav-vue></typeNav-vue>
    <list-vue></list-vue>
    <recommend-vue></recommend-vue>
    <rank-vue></rank-vue>
    <like-vue></like-vue>
    <floor-vue v-for="floor in floorList" :key="floor.id" :list="floor"></floor-vue>
  </div>
</template>

<script>
import ListVue from '@/views/Home/List/List.vue'
import RecommendVue from '@/views/Home/Recommend/Recommend.vue'
import RankVue from '@/views/Home/Rank/Rank.vue'
import LikeVue from '@/views/Home/Like/Like.vue'
import FloorVue from '@/views/Home/Floor/Floor.vue'
import { mapState } from 'vuex'

export default {
  name: 'HomeVue',
  components: {
    ListVue,
    RecommendVue,
    RankVue,
    LikeVue,
    FloorVue
  },
  mounted() {
    this.$store.dispatch('getFloorList')
  },
  computed: {
    ...mapState({
      floorList: state => state.home.floorList
    })
  }
}
</script>

<style lang="less" scoped></style>

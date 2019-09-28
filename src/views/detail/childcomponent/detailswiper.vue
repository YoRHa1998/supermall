<template>
  <Swiper class="detail-swiper-class">
    <SwiperItem v-for="item in topImages" :key="item">
      <img :src="item" alt="">
    </SwiperItem>
  </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper"

export default {
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
.detail-swiper-class{
  height: 250px;
  overflow: hidden;
}
</style>
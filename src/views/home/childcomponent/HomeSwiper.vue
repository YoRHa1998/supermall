<template>
  <div>
    <Swiper>
      <SwiperItem v-for="item in banner" :key="item.image">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" @load="imgload"/>
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banner:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      isemit:false
    }
  },
  watch:{},
  computed:{},
  methods:{
    imgload(){
      if(!this.isemit){  //判断是否已经传出一个自定义事件了
      this.$emit('imgload')
      this.isemit = true  //如果传出一个事件，就把isemit改为true，这样后面的图片加载好之后就不会继续发送了
      }
    }
  },
  created(){},
  mounted(){}
}
</script>
<style>

</style>
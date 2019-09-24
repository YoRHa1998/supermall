<template>
  <div class="scroll" ref="swiper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"

export default {
  components:{},
  props:{},
  data(){
    return {
      scroll:null
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){
    this.scroll = new BScroll(this.$refs.swiper,{

    })
  }
}
</script>
<style scoped>

</style>
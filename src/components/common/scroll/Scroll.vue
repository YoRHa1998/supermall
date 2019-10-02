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
  props:{
    probetype:{
      type:Number,
      default(){
        return 0
      }
    },
     pullUpLoad:{
      type:Boolean,
      default(){ 
        return false
      }
    }
  },
  data(){
    return {
      scroll:null,
      
    }
  },
  watch:{},
  computed:{},
  methods:{
    scrollTo(x,y,time=500){  //es6：time=500，给参数设置一个默认值，如果不传这个参数，就使用默认值
      this.scroll.scrollTo(x,y,time)
      //scrollTo() 用来滚动到设置的位置，里面有三个参数，分别是x,y,滚动的时间
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  },
  created(){
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.swiper,{
      click:true,  //在BScroll控制的区域中，button按钮无论设不设置click为true，都是可以点击的，但是div
                  //或者span标签，如果不设置为true，是不可以点击的
      probeType:this.probetype,  //通过props动态决定是否要侦测滚动
      pullUpLoad:this.pullUpLoad  //判断是否启用上拉加载更多
    })

    this.scroll.on('scroll',(position)=>{
      this.$emit('backscroll',position)  //将侦测到的滚动发送到父组件
    })

    this.scroll.on('pullingUp',()=>{
      this.$emit('pullUpLoad')
    })
  }
}
</script>
<style scoped>
/* .content{
  height: 100%;
} */
</style>
<template>
  <div class="cart-list">
    <scroll class="scroll-content" ref="scroll">
      <CartListItem v-for="(item,index) in $store.state.cartList" 
                    :key="index" 
                    :itemInfo="item"></CartListItem>
    </scroll>

    <CartButtomBar></CartButtomBar>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"
import CartListItem from "./cartListItem"
import CartButtomBar from "./cartbuttombar"

export default {
  components:{
    Scroll,
    CartListItem,
    CartButtomBar
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){},
  activated() {
    this.$refs.scroll.refresh()   //每当页面处于活跃状态就进行一次刷新，重置可滚动高度
  },
}
</script>
<style scoped>
.cart-list{
  height: calc(100vh - 44px - 49px - 40px);
}
.scroll-content{
  height: 100%;
  overflow: hidden;
}
</style>
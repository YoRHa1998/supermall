<template>
  <div class="cart-list">
    <scroll class="scroll-content">
      <CartListItem v-for="(item,index) in $store.state.cartList" 
                    :key="index" 
                    :product="item"></CartListItem>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"
import CartListItem from "./cartListItem"

export default {
  components:{
    Scroll,
    CartListItem
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
  mounted(){}
}
</script>
<style scoped>
.cart-list{
  height: calc(100vh - 44px - 49px);
}
.scroll-content{
  height: 100%;
  overflow: hidden;
}
</style>
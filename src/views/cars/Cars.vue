<template>
  <div>
    <NavBar class="cart-nav-bar">
      <div slot="center">购物车({{getGoods}})</div>
    </NavBar>

    <cartList></cartList>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import cartList from "./childcomponent/cartList"

export default {
  components:{
    NavBar,
    cartList
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{
    getGoods(){
      return this.$store.state.cartList.length  //获取购物车商品的数量
    }
  },
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style>
.cart-nav-bar{
  color: #ffffff
}
</style>
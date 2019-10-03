<template>
  <div class="buttom-bar">
    <div class="check-content">
      <CheckButton class="checked" :isactive="ischecked" @click.native="checkClick"></CheckButton>
      <span>全选</span>
    </div>

    <div class="price">
      <span>合计:{{totalPrice}}</span>
    </div>

    <div class="topay">
      <span>去结算({{toresult}})</span>
    </div>

  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton"

export default {
  components:{
    CheckButton
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{
    totalPrice(){  //计算总价格
      return this.$store.state.cartList.filter(item => {return item.check}).reduce((preValue,item)=>{
        return preValue += item.price * item.count
      },0).toFixed(2)
    },
    toresult(){  //计算总数量
      return this.$store.state.cartList.filter(item => item.check).length
    },
    ischecked(){  //判断全选组件的状态
      if(this.$store.state.cartList.length === 0) return false  //如果购物车为空，返回false

      //如果查找到有一个没有被选中，也返回false为false，如果没有找到，则返回true 
      return !(this.$store.state.cartList.find(item => !item.check))
    }
  },
  methods:{
    checkClick(){
      if(this.ischecked){  //如果为true，说明全部都被选中了，此时点击取消所有的选中
        this.$store.state.cartList.forEach(item => item.check = false);
      }else{  //else说明有没有选中的，此时点击应该让所有都选中
        this.$store.state.cartList.forEach(item => item.check = true);
      }
    }
  },
  created(){},
  mounted(){}
}
</script>
<style scoped>
.buttom-bar{
  height: 40px;
  position: relative;
  display: flex;
}
.check-content{
  width: 70px;
  height: 40px;
  display: flex;
  align-items: center
}
.checked{
  display: flex;
  margin-left: 10px;
  margin-right: 5px;
}
.price{
  line-height: 40px;
  margin-left: 10px;
  margin-top: 2px;
  flex: 1
}
.topay{
  width: 80px;
  background-color: var(--color-tint);
  line-height: 40px;
  text-align: center;
  color: #fff
}
</style>
<template>
  <div class="goods">
    <GoodsListItem v-for="(item,index) in goodslist" :key="index" :goodsitem="item"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem"

export default {
  components:{
    GoodsListItem
  },
  props:{
    goodslist:{
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
<style>
.goods{
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around; 
  padding: 2%;
}
</style>
<template>
  <div class="goods-item" @click="itemclick">
    <img v-lazy="showImg" alt="" @load="imageload">
  <div class="goods-info">
    <p>{{ goodsitem.title }}</p>
    <span class="price">{{ goodsitem.price }}</span>
    <span class="collect">{{ goodsitem.cfav }}</span>
  </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    goodsitem:{ 
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      iid:null   //保存每个商品的id
    }
  },
  watch:{},
  computed:{
    showImg(){
      return this.goodsitem.image || this.goodsitem.show.img
    }
  },
  methods:{
    imageload(){
      this.$bus.$emit('imageload')
    },
    itemclick(){
      //监听商品的点击事件，当发生点击的时候进行路由的跳转
      this.$router.push('/detail/' + this.iid)  //通过动态路由传递id,注意路径前后都有斜杠
    }
  },
  created(){
    this.iid = this.goodsitem.iid  //从数据中读取id并保存
  },
  mounted(){}
}
</script>
<style>
 .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
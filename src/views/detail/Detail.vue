<template>
  <div class="detail">
    <!-- better-scroll必须设置高度才能使用！！！！不然不能滚！！！ -->
    
    <DetailNav></DetailNav>
    <Scroll class="content">
    <DetailSwiper :topImages="topImages"></DetailSwiper>
    <DetailBaseInfo :goods="goodsinfo"></DetailBaseInfo>
    <DetailShopInfo :shop="shopInfo"></DetailShopInfo>
    </Scroll>
  </div>
</template>

<script>
import DetailNav from "./childcomponent/detailnavbar"
import DetailSwiper from "./childcomponent/detailswiper"
import DetailBaseInfo from "./childcomponent/detailbaseinfo"
import DetailShopInfo from "./childcomponent/detailshopinfo"

import Scroll from "components/common/scroll/Scroll"

import {getDetail,Goods} from "network/detail"

export default {
  name:"Detail",
  components:{
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll
  },
  props:{},
  data(){
    return {
      iid:null,
      topImages:[],
      goodsinfo:{},
      shopInfo:{}
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){
    this.iid = this.$route.params.iid  //$route为当前活跃的路由，params为路由后面带的参数

    getDetail(this.iid).then(res => {
      //1.获取所有数据
      const data = res.result
      //2.获取轮播图数据
      this.topImages = data.itemInfo.topImages
      //3.获取商品的基本信息
      this.goodsinfo = new Goods(data.columns,data.itemInfo,data.shopInfo.services)
      //4.获取店铺的信息
      this.shopInfo = data.shopInfo   
    })
  },
  mounted(){},
}

</script>
<style scoped>
.detail{
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 1;
  /* 用来遮住底下的tab-bar */
}
.content{
  height: calc(100% - 44px);
  background-color: #fff;
}
</style>
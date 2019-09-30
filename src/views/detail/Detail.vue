<template>
  <div class="detail">
    <!-- better-scroll必须设置高度才能使用！！！！不然不能滚！！！ -->
    <DetailNav></DetailNav>
    <Scroll class="content" ref="scroll">
    <DetailSwiper :topImages="topImages"></DetailSwiper>
    <DetailBaseInfo :goods="goodsinfo"></DetailBaseInfo>
    <DetailShopInfo :shop="shopInfo"></DetailShopInfo>
    <DetailImageInfo :goodsimage="goodsimage" @imageload="imageload"></DetailImageInfo>
    <DetailParamsInfo :paramsinfo="paramsinfo"></DetailParamsInfo>
    <DetailComtentInfo :comtentinfo="comtentinfo"></DetailComtentInfo>
    <DetailRecommend :recommend="item" 
                      v-for="(item,index) in recommend" 
                      :key="index"
                      class="detail-recommend"></DetailRecommend>
    </Scroll>
  </div>
</template>

<script>
import DetailNav from "./childcomponent/detailnavbar"
import DetailSwiper from "./childcomponent/detailswiper"
import DetailBaseInfo from "./childcomponent/detailbaseinfo"
import DetailShopInfo from "./childcomponent/detailshopinfo"
import DetailImageInfo from "./childcomponent/detailimageinfo"
import DetailParamsInfo from "./childcomponent/detailparamsinfo"
import DetailComtentInfo from "./childcomponent/detailcomtentinfo"
import DetailRecommend from "./childcomponent/detailrecommend"

import Scroll from "components/common/scroll/Scroll"

import {getDetail,Goods,getRecommend} from "network/detail"

export default {
  name:"Detail",
  components:{
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImageInfo,
    DetailParamsInfo,
    DetailComtentInfo,
    DetailRecommend,
    Scroll,
  },
  props:{},
  data(){
    return {
      iid:null,
      topImages:[],
      goodsinfo:{},
      shopInfo:{},
      goodsimage:{},
      paramsinfo:{},
      comtentinfo:{},
      recommend:[]
    }
  },
  watch:{},
  computed:{},
  methods:{
    imageload(){
      this.$refs.scroll.refresh()
    }
  },
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
      //5.获取商品图片信息
      this.goodsimage = data.detailInfo
      //6.获取参数信息
      this.paramsinfo = data.itemParams
      //7.获取评论信息
      this.comtentinfo = data.rate
    })
    getRecommend().then(res=>{
      this.recommend = res.data.list
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
<template>
  <div class="detail">
    <!-- better-scroll必须设置高度才能使用！！！！不然不能滚！！！ -->
    <DetailNav @jumpclick="jumpclick" ref="nav"></DetailNav>

    <Scroll class="content" ref="scroll" @backscroll="contentscroll" :probetype="3">
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <DetailBaseInfo :goods="goodsinfo"></DetailBaseInfo>
      <DetailShopInfo :shop="shopInfo"></DetailShopInfo>
      <DetailImageInfo :goodsimage="goodsimage" @imageload="imageload"></DetailImageInfo>
      <DetailParamsInfo :paramsinfo="paramsinfo" ref="jumpparams"></DetailParamsInfo>
      <DetailComtentInfo :comtentinfo="comtentinfo" ref="jumpcomtent"></DetailComtentInfo>
      <DetailRecommend :recommend="recommend" ref="jumprecommend"></DetailRecommend>
    </Scroll>
    <BackTop @click.native="backClick" v-show="isShowBack"></BackTop>
    <DetailBottomBar @addToCart="addToCart"></DetailBottomBar>
    <Toast></Toast>
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
import DetailBottomBar from "./childcomponent/detailbottombar"

import Scroll from "components/common/scroll/Scroll"
import {BackTopMixin} from "common/mixin"
import Toast from "components/common/toast/Toast"

import {getDetail,Goods,getRecommend} from "network/detail"

export default {
  name:"Detail",
  mixins:[BackTopMixin],
  components:{
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImageInfo,
    DetailParamsInfo,
    DetailComtentInfo,
    DetailRecommend,
    DetailBottomBar,
    Scroll,
    Toast
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
      recommend:[],
      themeTopY:[],
      currentIndex:null
    }
  },
  watch:{},
  computed:{},
  methods:{
    imageload(){
      //每当图片加载完就刷新页面
      this.$refs.scroll.refresh()  

      // 每当图片加载完就将各主题的offsetTop保存起来
      this.themeTopY = []  //每次刷新先重置一下
      //把各个主题的offsetTop保存起来
      this.themeTopY.push(0)
      this.themeTopY.push(this.$refs.jumpparams.$el.offsetTop)
      this.themeTopY.push(this.$refs.jumpcomtent.$el.offsetTop)
      this.themeTopY.push(this.$refs.jumprecommend.$el.offsetTop)
    },
    jumpclick(index){
      this.$refs.scroll.scrollTo(0,-this.themeTopY[index],300)  //监听点击，滚动到对应位置,Y值应为负值
    },
    contentscroll(position){
      //决定backtop组件是否显示
      this.listenershowback(position)



      //[0,4545,6463,9564] 
      //第一种情况
      //positionY  在0到4545之间   index=0 
      //positionY  在4545到6463之间   index=1
      //positionY  在6463到9564之间   index=2

      //第二种情况
      // positionY  大于9564  index为3

      let positionY = -position.y
      let length = this.themeTopY.length
      for (let i = 0; i < length; i++) {
       
        if(this.currentIndex !==i && ((i<length-1 && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1]) || (i===length-
        1&&positionY >= this.themeTopY[i]))){
          this.currentIndex = i
          this.$refs.nav.currenterIndex = this.currentIndex //修改detailnav中的currenterIndex
        }
      }
    },
    addToCart(){   //接收加入购物车按钮传出来的事件
      const product = {}  //创建一个对象，用于保存准备传到vuex的数据
      //获取需要的数据
      product.image = this.topImages[0]
      product.title = this.goodsinfo.title
      product.desc = this.goodsinfo.desc
      product.price = this.goodsinfo.realPrice
      product.iid = this.iid
      product.count = 1
      product.check = true

      //将数据传到vuex中
      // this.$store.state.cartList.push()  不能这样直接改变state中的值，要通过mutation进行操作
 
      //通过commit使用mutation方法，前面是方法名，后面是传的参数
      // this.$store.commit('addCart',product)
      this.$store.dispatch('addCart',product).then(res=>{
        this.$toast.show(res,1500)  //调用toast插件，传入参数
      })
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
  mounted(){
  },

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
  height: calc(100% - 44px - 49px);
  background-color: #fff;
}

</style>
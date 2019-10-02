<template>
  <div id="home">

    <NavBar class="home-bar"><div slot="center">购物街</div></NavBar>

    <TabControl :title="['流行','新款','精选']"
                @tabclick="tabclick"
                ref="tabControl1"
                :class="{tabcontrol:istabshow}"></TabControl>

    <Scroll class="content"
            ref="scroll"
            :probetype="3"
            :pullUpLoad='true'
            @backscroll="backscroll"
            @pullUpLoad="loadmore">
      <HomeSwiper :banner="banner" @imgload="imgload"></HomeSwiper>
      <Recommend :recommend="recommend"></Recommend>
      <FeaTure></FeaTure>
      <TabControl :title="['流行','新款','精选']" @tabclick="tabclick" ref="tabControl"></TabControl>
      <GoodList :goodslist="showGoods"></GoodList>
    </Scroll>

    <BackTop @click.native="backClick" v-show="isShowBack"></BackTop>
    <!-- .native 监听组件的原生方法需要加上这个修饰符，否则是监听不到的 -->

  </div>
</template>

<script>
import HomeSwiper from "./childcomponent/HomeSwiper";
import Recommend from "./childcomponent/recommendviews";
import FeaTure from "./childcomponent/featureviews";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import {BackTopMixin} from "common/mixin"

import { getHomeMultidata, getGoods } from "network/home"; //导入单独的网络请求封装

export default {
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    FeaTure,
    TabControl,
    GoodList,
    Scroll
  },
  mixins:[BackTopMixin],
  props: {},
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        //首页页面展示数据的数据结构设计，在goods对象中分别存储流行、新款、精选的数据，每个数据在分别
        //为一个对象，里面分别存储各自的页码和数据，数据用一个数组来进行保存
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      tabOffsetTop:0,
      istabshow:false,
      scrolly:0
    };
  },
  watch: {},
  computed: {
    showGoods() {
      //通过计算属性来判断goods的显示
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    tabclick(index) {
      //1.在tabcontrol中通过$emit暴露出来的方法
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }

      //2.每次点击修改两个tabcontrol的curronterIndex的值，使得两个tabcontrol的显示一致
      this.$refs.tabControl1.curronterIndex = index
      this.$refs.tabControl.curronterIndex = index
    },
    backscroll(position){  
      //1.拿到scroll发送的滚动数值，当y轴滚动大于1000时，显示backtop组件
      this.listenershowback(position)

      //2.通过监听滚动数值是否大于获取到的offsetTop值来决定是否显示tabcontrol
      this.istabshow = (-position.y) > this.tabOffsetTop  
    },
    loadmore(){  //触发上拉加载更多时执行请求数据的方法
      this.getgoods(this.currentType)  //传入页面当前选择的类型
    },
    imgload(){    //接收当轮播图加载好之后传过来的方法
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop  //获取到tabcontrol距离顶部的距离
    },

    //将网络请求封装成方法，之后再created中调用方法，保持良好的代码结构
    gethomemultidata() {
      getHomeMultidata().then(res => {
        //这里拿到返回的数据
        // console.log(res);
        this.banner = res.data.banner.list; //在这里赋值到data中定义好的变量
        this.recommend = res.data.recommend.list;
      });
    },



    //请求首页数据的方法
    getgoods(type) {
      //传入Type
      const page = this.goods[type].page + 1; //根据传入的type来设置默认获取第一页的数据
      getGoods(type, page).then(res => {
        //传入type和page来获取对应的数据
        this.goods[type].list.push(...res.data.list); //push(...数组)是一种特殊语法，能够解析数组中的数据，然后
        //push到目标数组中
        this.goods[type].page += 1; //之后保存页数      
        this.$refs.scroll.finishPullUp()  //表示当前上拉加载请求数据展示已经完成，可以进行下一次
      });
    }
  },
  created() {
    //在页面创建完成之后发送网络请求
    this.gethomemultidata();

    //2.请求首页的数据
    this.getgoods("pop");
    this.getgoods("new");
    this.getgoods("sell");
  
  },

  activated() {
    this.$refs.scroll.refresh();   //每次回来的时候刷新一下，能防止一些小bug
    this.$refs.scroll.scrollTo(0,this.scrolly,0)  //回到页面时通过scrollTo方法让页面回到之前记录的位置

  },
  deactivated() {
    this.scrolly = this.$refs.scroll.scroll.y   //离开页面时记录当前滚动到哪里的值
  },

  mounted() {

    //接收事件总线发送的事件
    this.$bus.$on('imageload',()=>{
      this.$refs.scroll.refresh()
    })
  }
};
</script>
<style scoped>

.home{
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-bar {
  text-align: center;
  color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0; 
  z-index: 9;
}
/* .Tab-Control {   
  position: sticky;    //被better-scroll包裹之后
  top: 44px;
  z-index: 9;
  /* position:sticky属性，当滚动条未到设置的top属性时，position处于一个static状态，当滚动条到达设置的高度时，
      position会变成fixed状态，根据设置的top属性相对于浏览器进行定位，来达到一个息顶的效果 */

.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.tabcontrol{
  margin-top: 44px;
  position: relative;
  z-index: 9;
  /* z-index只能设置在有定位属性的元素上 */
}
</style>
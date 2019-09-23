<template>
  <div id="home">
    <div class="home-bar">
      <NavBar><div slot="center">购物街</div></NavBar>
    </div>
      <HomeSwiper :banner="banner"></HomeSwiper>
      <Recommend :recommend="recommend"></Recommend>
      <FeaTure></FeaTure>
      <TabControl class="Tab-Control" :title="['流行','新款','精选']"></TabControl>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>0</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>5</li>
      <li>6</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>0</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>5</li>
      <li>6</li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from "./childcomponent/HomeSwiper";
import Recommend from "./childcomponent/recommendviews";
import FeaTure from "./childcomponent/featureviews"

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl"


import { getHomeMultidata,getGoods} from "network/home"; //导入单独的网络请求封装

export default {
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    FeaTure,
    TabControl
  },
  props: {},
  data() {
    return {
      banner: [],
      recommend: [],
      goods:{    //首页页面展示数据的数据结构设计，在goods对象中分别存储流行、新款、精选的数据，每个数据在分别
      //为一个对象，里面分别存储各自的页码和数据，数据用一个数组来进行保存
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    //将网络请求封装成方法，之后再created中调用方法，保持良好的代码结构
    gethomemultidata(){
    getHomeMultidata().then(res => {
      //这里拿到返回的数据
      // console.log(res);
      this.banner = res.data.banner.list; //在这里赋值到data中定义好的变量
      this.recommend = res.data.recommend.list;
    });
    },

    //请求首页数据的方法
    getgoods(type){  //传入Type
      const page = this.goods[type].page + 1  //根据传入的type来设置默认获取第一页的数据
      getGoods(type,page).then(res=>{  //传入type和page来获取对应的数据
        this.goods[type].list.push(...res.data.list)  //push(...数组)是一种特殊语法，能够解析数组中的数据，然后
                                                      //push到目标数组中
        this.goods[type].page += 1    //之后保存页数
      })
    }
  },
  created() {
    //在页面创建完成之后发送网络请求
    this.gethomemultidata()

     //2.请求首页的数据
    this.getgoods('pop')
    this.getgoods('new')
    this.getgoods('sell')
  },
  mounted() {}
};
</script>
<style>
.home-bar {
  text-align: center;
  color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
#home{
  padding-top:44px;
}
.Tab-Control{
  position: sticky;
  top:44px
  /* position:sticky属性，当滚动条未到设置的top属性时，position处于一个static状态，当滚动条到达设置的高度时，
      position会变成fixed状态，根据设置的top属性相对于浏览器进行定位，来达到一个息顶的效果 */
}
</style>
<template>
  <div class="home-bar">
    <NavBar><div slot="center">购物街</div></NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import {getHomeMultidata} from "network/home"   //导入单独的网络请求封装

export default {
  components:{
    NavBar
  },
  props:{},
  data(){
    return {
      banner: [],
      recommend: []
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){   //在页面创建完成之后发送网络请求
    getHomeMultidata().then(res=>{   //这里拿到返回的数据
      // console.log(res);
      this.banner = res.data.banner.list  //在这里赋值到data中定义好的变量
      this.recommend = res.data.recommend.list
    })
  },
  mounted(){}
}
</script>
<style>
  .home-bar{
    text-align: center;
    color: #ffffff;
    background-color: var(--color-tint);
  }
</style>
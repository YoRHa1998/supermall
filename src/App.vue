<template>
  <div id="app"> 
    <keep-alive exclude="Detail">
      <!-- 这里将detail页面排除在keepalive范围内，因为每次进详情页我们都需要重新加载 -->
      <!-- 注意！！！这里的exclude必须是组件中的name属性值，否则无效！！！ -->
      <router-view></router-view> 
    </keep-alive>
    <maintabBar></maintabBar>
  </div>
</template>

<script>
import maintabBar from "components/common/tabbar/mainTabbar"

export default {
  name:'App',
  components:{
    maintabBar
  }
}
</script>

<style>
  @import url("assets/css/base.css");
</style>

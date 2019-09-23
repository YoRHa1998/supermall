<template>
  <div id="app"> 
    <router-view></router-view> 
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

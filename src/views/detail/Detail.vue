<template>
  <div>
    <DetailNav></DetailNav>
    <DetailSwiper :topImages="topImages"></DetailSwiper>
  </div>
</template>

<script>
import DetailNav from "./childcomponent/detailnavbar"
import DetailSwiper from "./childcomponent/detailswiper"

import {getDetail} from "network/detail"

export default {
  name:"Detail",
  components:{
    DetailNav,
    DetailSwiper
  },
  props:{},
  data(){
    return {
      iid:null,
      topImages:[]
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){
    this.iid = this.$route.params.iid  //$route为当前活跃的路由，params为路由后面带的参数

    getDetail(this.iid).then(res => {
      this.topImages = res.result.itemInfo.topImages
    })
  },
  mounted(){},
}
</script>
<style scoped>

</style>
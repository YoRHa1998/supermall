<template>
  <div>
    <NavBar class="nav-bar">
      <div slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" class="backclass">
      </div>

      <div slot="center" class="nav-class">
        <div v-for="(item,index) in title"
             :key="item" 
             class="nav-item" 
             @click="itemclick(index)"
             :class="{active:currenterIndex === index}"
             >{{ item }}</div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

export default {
  components:{
    NavBar
  },
  props:{},
  data(){
    return {
      title:['商品','参数','评论','推荐'],
      currenterIndex:0
    }
  },
  watch:{},
  computed:{},
  methods:{
    itemclick(index){
      this.currenterIndex = index
      this.$emit("jumpclick",index)
    },
    backClick(){
      this.$router.back()
    }
  },
  created(){},
  mounted(){}
}
</script>
<style scoped>
.nav-bar{
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(100,100, 100, .2);
  position: relative;
  z-index: 1;
}

.nav-class{
  display: flex;
}
.nav-item{
  flex: 1;
  text-align: center;
  font-size: 14px
}
.backclass{
  margin: 12px
}
</style>
<template>
  <div>
    <h3>详情页</h3>
    <h4>{{ iid }}</h4>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      iid:null
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){
    this.iid = this.$route.params.iid  //$route为当前活跃的路由，params为路由后面带的参数
  },
  mounted(){},
  destroyed() {
    console.log('页面销毁');
    
  },
}
</script>
<style scoped>

</style>
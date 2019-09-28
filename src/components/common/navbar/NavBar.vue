<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
    <!-- 设置三个被div包裹的具名插槽，用来承载navbar左中右三个区域的内容 -->
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    background-color: var(--color-tint);
  }
  .left,.right{
    width: 60px;
  }
  .center{
    flex: 1;
  }
</style>
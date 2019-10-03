<template>
  <div class="check">
    <img src="~assets/img/cart/tick.svg" alt="" class="checkimg" :class="{active:isactive}">
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    isactive:{
      type:Boolean,
      default:true
    }
  },
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
.checkimg{
  border-radius: 50%;
  border: 2px solid #aaa
}
.active{
  background-color: red;
  border-color: red;
}
</style>
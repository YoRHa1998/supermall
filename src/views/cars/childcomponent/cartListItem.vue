<template>
  <div>
    {{product}}
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
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

</style>
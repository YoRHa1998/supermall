<template>
  <div>
    <DetailRecommandItem :recommend="item" 
                         v-for="(item,index) in recommend" 
                         :key="index"
                         class="detail-recommend"></DetailRecommandItem>
  </div>
</template>

<script>
import DetailRecommandItem from "./detailrecommenditem"
export default {
  components:{
    DetailRecommandItem
  },
  props:{
    recommend:{
      type:Array
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
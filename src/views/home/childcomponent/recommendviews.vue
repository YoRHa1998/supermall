<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.image" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt=""/>
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    recommend:{
      type:Array,
      default(){
        return []
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
<style>
  .recommend{
    display: flex;
    border-bottom: 8px solid #eee
  }
  .recommend-item{
    flex: 1;
    text-align: center;
    font-size: 10px;
    margin:10px 0 20px;

  }
  .recommend-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 5px
  }
</style>
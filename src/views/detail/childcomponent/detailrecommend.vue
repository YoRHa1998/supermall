<template>
  <div class="recommend-item">
    <img :src="recommend.image" alt="">
  <div class="recommend-info">
    <p>{{ recommend.title }}</p>
    <span class="price">{{ recommend.price }}</span>
    <span class="collect">{{ recommend.cfav }}</span>
  </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
    recommend:{
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
.recommend-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .recommend-item img {
    width: 100%;
    border-radius: 5px;
  }

  .recommend-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .recommend-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .recommend-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .recommend-info .collect {
    position: relative;
  }

  .recommend-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
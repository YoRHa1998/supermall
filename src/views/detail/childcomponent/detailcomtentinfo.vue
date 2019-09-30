<template>
  <div class="comtent">
    <div class="contentInfo">
      <span>用户评价({{ comtentinfo.cRate +"条"}})</span>
      <b>更多</b>
    </div>

    <div v-if="comtentinfo.list" class="userinfo">

      <img :src="comtentinfo.list[0].user.avatar" alt="">
      <b>{{ comtentinfo.list[0].user.uname }}</b>

      <div class="comment-text">
        <p>{{ comtentinfo.list[0].content }}</p>
      </div>

      <div class="comment-msg">
        <span>{{ comtentinfo.list[0].created | showDate}}</span>
        <span>{{ comtentinfo.list[0].style }}</span>
      </div>

      <div class="comment-img">
        <img :src="item" alt="" v-for="(item,index) in comtentinfo.list[0].images" :key="index">
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from "common/unitls"

export default {
  components:{},
  props:{
    comtentinfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    showDate:function(value){
      let date = new Date(value*1000);
      return formatDate(date, 'yyyy-MM-dd')
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
.comtent{
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
}
.contentInfo{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0,0,0,.1);
}
.contentInfo span{
  float: left;
  font-size: 15px;
}
.contentInfo b{
  float: right;
  margin-right: 10px;
  font-size: 13px;
}
.userinfo img{
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.userinfo b{
  position: relative;
  font-size: 15px;
  top: -15px;
  margin-left: 10px;
}
.comment-text{
  font-size: 14px;
  color: #777;
  line-height: 1.5
}
.comment-msg{
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.comment-img{
  margin-top: 10px;
}
.comment-img img{
  width: 70px;
  height: 70px;
  border-radius: 0;
  margin-right: 5px;
}
</style>
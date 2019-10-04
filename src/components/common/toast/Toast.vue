<template>
  <div class="toast" v-show="isShow">
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      isShow:false,
      message:''
    }
  },
  watch:{},
  computed:{},
  methods:{
    show(message='默认文字',duration=2000){
      this.isShow = true
      this.message = message

      setTimeout(()=>{
        this.isShow = false
        this.message = ''
      },duration)
    }
  },
  created(){},
  mounted(){}
}
</script>
<style scoped>
.toast{
  position: Fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 999;
  background-color: rgba(0, 0, 0, .6);
  color:#fff; 
  padding: 8px 10px
}
</style>
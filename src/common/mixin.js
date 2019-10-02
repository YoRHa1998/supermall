import BackTop from "components/content/backtop/BackTop"

export const BackTopMixin = {
  components:{
    BackTop
  },
  data() {
    return {
      isShowBack:false
    }
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)   //通过$refs拿到scroll的组件对象，然后调用对象里的方法
    },
    listenershowback(position){
      this.isShowBack = (-position.y)>1000
    }
  }
}
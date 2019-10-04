import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import FastClick from "fastclick"
import VueLazyLoad from "vue-lazyload"

import toast from "components/common/toast"

Vue.config.productionTip = false

//对body使用fastclick，只需要使用attach()方法
FastClick.attach(document.body)

//安装Toast插件 安装之后回去执行toast的install
Vue.use(toast)

//安装图片懒加载插件
Vue.use(VueLazyLoad)

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Toast from './Toast'

const obj = {}

obj.install = function(Vue){   //install函数会自动传进来一个Vue实例
  //1.创建组件构造器
  const toastConstrustor = Vue.extend(Toast)

  //2.用new的方式使用组件构造器，可以床架出来一个组件对象
  const toast = new toastConstrustor()

  //3.将组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  //4.将toast的模板挂载到body中上
  document.body.appendChild(toast.$el)

  //5.将toast添加到Vue原型中，这样就可以在各处用$toast使用这个插件了
  Vue.prototype.$toast = toast
}

export default obj
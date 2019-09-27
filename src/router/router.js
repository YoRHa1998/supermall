import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cars = () => import('views/cars/Cars')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'',
      redirect:"/home"
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/cars',
      component:Cars
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/detail/:iid',  //动态路由的使用，路径后面跟上冒号+变量名
      component:Detail
    }
  ],
})

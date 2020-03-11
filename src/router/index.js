import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import cart from '@/components/cart'
import item from '@/components/item'
import detail from '@/components/detail'
import mytest from '@/components/mytest'
import Buycart from '@/components/Buycart'
import register from '@/components/register'
import Login from '@/components/Login'
import Test from "../components/Test";

Vue.use(Router)

var routes = [
        {
          path:'/',
          name:'index',
          component:index
        },
        {
          path:'/cart',
          name:'cart',
          component:cart
        },
        {
          path:'/item',
          name:'item',
          component:item
        },
        {
          path:'/detail',
          name:'detail',
          component:detail
        },
        {
          path:'/mytest',
          name:'mytest',
          component:mytest
        },
  {
          path:'/buy',
          name:'Buycart',
          component:Buycart
        }, {
          path:'/register',
          name:'register',
          component:register
        }, {
          path:'/login',
          name:'Login',
          component:Login
        }, {
          path:'/my_weibo',
          name:'Test',
          component:Test
        },


]

export default new Router({
  routes:routes,
  mode:'history'   /*hash*/
})

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
import  myprofile from "../components/myprofile";
import  Kaoshi_reg from "../components/Kaoshi_reg";
import  Kaoshi_log from "../components/Kaoshi_log";
import  finish from "../components/finish";
import Aboutpics from "../components/Aboutpics";
import UpdatePics from "../components/UpdatePics";
import Kaoshi02 from "../components/Kaoshi02";
import Addgoods from "../components/Addgoods";


Vue.use(Router)

var routes;
routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/item',
    name: 'item',
    component: item
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail
  },
  {
    path: '/mytest',
    name: 'mytest',
    component: mytest
  },
  {
    path: '/buy',
    name: 'Buycart',
    component: Buycart
  }, {
    path: '/register',
    name: 'register',
    component: register
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/my_weibo',
    name: 'Test',
    component: Test
  }, , {
    path: '/profile',
    name: 'myprofile',
    component: myprofile,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('username')) {
        console.log('已登录')
        next();
      } else {
        console.log('未登录')
        next('/login')
      }
    }


  },
  {
    path: '/ks_reg',
    name: 'Kaoshi_reg',
    component: Kaoshi_reg
  }, {
    path: '/ks_log',
    name: 'Kaoshi_log',
    component: Kaoshi_log
  }, {
    path: '/finish',
    name: 'finish',
    component: finish
  }, {
    path: '/pics',
    name: 'Aboutpics',
    component: Aboutpics
  },{
     path:'/uppics/:id',
      name:'UpdatePics',
      component:UpdatePics
    },{
     path:'/kaoshi02',
      name:'Kaoshi02',
      component:Kaoshi02
    },,{
     path:'/addgoods',
      name:'Addgoods',
      component:Addgoods
    }



];

export default new Router({
  routes:routes,
  mode:'history'   /*hash*/
})

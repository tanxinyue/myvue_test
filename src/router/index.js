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
import editgoods from "../components/editgoods";
import KaoshiAddgoods from "../components/KaoshiAddgoods";
import kaoshigoodslist from "../components/kaoshigoodslist";
import kaoshi04 from "../components/kaoshi04";
import kaoshiitem from "../components/kaoshiitem";
import search from "../components/search";


Vue.use(Router)

var routes;
routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
    {
    path: '/search',
    name: 'search',
    component: search
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
    },{
     path:'/addgoods',
      name:'Addgoods',
      component:Addgoods
    },{
     path:'/editgood',
      name:'editgoods',
      component:editgoods
    },{
     path:'/kaoshiaddgoods',
      name:'KaoshiAddgoods',
      component:KaoshiAddgoods
    },{
     path:'/ksgoodslist',
      name:'kaoshigoodslist',
      component:kaoshigoodslist
    },{
     path:'/ks04',
      name:'kaoshi04',
      component:kaoshi04
    },{
     path:'/ksitem',
      name:'kaoshiitem',
      component:kaoshiitem
    }





];

export default new Router({
  routes:routes,
  mode:'history'   /*hash*/
})

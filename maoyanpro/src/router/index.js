import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import store from '@/store'
import Home from '@/pages/Home'
import Cinema from '@/pages/Cinema'
import User from '@/pages/User'
import Login from '@/pages/Login'
import Detail from '@/pages/Detail'

import City from '@/components/City'
import Now from '@/components/Now'
import Coming from '@/components/Coming'
import Search from '@/components/Search'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      children : [
      	{ path : '/home/city' , component : City },
      	{ path : '/home/now' , component : Now },
      	{ path : '/home/coming' , component : Coming },
      	{ path : '/home/search' , component : Search },
      	{ path: '/home' ,  redirect: '/home/now' }
      ]
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/login',
      component : Login
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/*',
      redirect: '/home'
    }
  ]
})

router.beforeEach((to, from, next) => {
    if(to.path == '/user') {
      axios.get('/users/isLogin',{
        params : {
          token : window.localStorage.getItem('token')
        }
      }).then((res)=>{
        if(res.data.code === 0){
            store.commit('USER_NAME',res.data.username);
            next()
        }
        else{
            next({
                path: '/login'
            })
        }
      }); 
    } else {
        next()
    }
})

export default router;

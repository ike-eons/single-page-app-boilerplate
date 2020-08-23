import Vue from "vue";
import Router from "vue-router";
import Api from '../services/api.js'

import Login from '../components/views/Login.vue'
import Dashboard from '../components/views/Dashboard.vue'
import Axios from "axios";
import VueRouter from "vue-router";


Vue.use(Router);

// function loggedIn(){
//   localStorage.getItem("token");
// }

const routes = [
      {
        path:'/',
        component:Login,
        name:'Login'
      },
      {
        path:'/dashboard',
        component:Dashboard,
        name:'Dashboard',
        meta:{ requiresAuth : true}
      },
      {
        path:'*',
        redirect:'/'
      }

  ]

  const router = new VueRouter({
    mode:'history',
    routes,
    base: process.env.BASE_URL
  })
  
  function isloggedIn(){
    return localStorage.getItem('token');
  };

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!isloggedIn()) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next() // make sure to always call next()!
    }
  })


export default router
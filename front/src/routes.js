import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Authentication/Login.vue'
import Register from './components/Authentication/Register.vue'
import Feed from './components/Feed.vue'
import Create from './components/product/Create.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path:'/login',
      component : Login,
      meta :{
        forVisitors : true
      }
    },
    {
      path:'/register',
      component : Register,
      meta :{
        forVisitors : true
      }
    },
    {
      path:'/feed',
      component : Feed,
      meta:{
        forAuth: true
      }
    },
    {
      path:'/products/create',
      component : Create, // require('./components/product/Create.vue') not working
      meta:{
        forAuth: true
      }
    }
  ],
  linkActiveClass:'active',
  mode : 'history' //to remove # in url
})

export default router

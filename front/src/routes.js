import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Authentication/Login.vue'
import Register from './components/Authentication/Register.vue'
import Feed from './components/Feed.vue'
import Create from './components/product/Create.vue'
import Edit from './components/product/Edit.vue'
import Details from './components/product/Details.vue'
import Err404 from './components/Errors/404.vue'
import Err500 from './components/Errors/500.vue'


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
    },
    {
      path:'/products/:product/edit',
      component : Edit, // require('./components/product/Edit.vue') not working
      meta:{
        forAuth: true
      }
    },
    {
      path:'/products/:product/details',
      component : Details, // require('./components/product/Details.vue') not working
      meta:{
        forAuth: true
      }
    },
    {
      path:'/404',
      component : Err404, // require('./components/product/Details.vue') not working
    },
    {
      path:'/500',
      component : Err500, // require('./components/product/Details.vue') not working
    }
  ],
  linkActiveClass:'active',
  mode : 'history' //to remove # in url
})

export default router

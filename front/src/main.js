import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'

import VueResource from 'vue-resource'
import Auth from './packages/auth/Auth.js'

Vue.use(VueResource)
Vue.use(Auth)

Vue.http.options.root = 'http://127.0.0.1:8000'
Vue.http.headers.common['Authorization'] ='Bearer '+ Vue.auth.getToken();

// catching errors
Vue.http.interceptors.push((request,next)=>{
  next(response=>{
    if (response.status==404) window.location.href = '/404'
    else if (response.status==500) Router.push('/500')

  })
})
// swal(response.status.toString(),'Server error', {icon: "error"});

Router.beforeEach(
  (to,from,next) => {
    if (to.matched.some(record => record.meta.forVisitors)) {
      if (Vue.auth.isAuthenticated()) {
          next({
            path :'/feed'
          })
      }else next()
    }else if (to.matched.some(record => record.meta.forAuth)) {
      if (!Vue.auth.isAuthenticated()) {
          next({
            path :'/login'
          })
      }else next()
    }
    else next()
  }
)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})

// export default router

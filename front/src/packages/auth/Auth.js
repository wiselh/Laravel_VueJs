export default function(Vue) {

    let authenticated ={}

    Vue.auth = {

      setToken (token,experation) {
        localStorage.setItem('token',token)
        localStorage.setItem('experation',experation)
      },

      getToken() {
        var token = localStorage.getItem('token')
        var experation = localStorage.getItem('experation')
        if ( ! token || ! experation)
          return null

        if (Date.now() > parseInt(experation)) {
            this.destroyed()
            return null
        } else
            return token
      },

      destroyToken() {
        localStorage.removeItem('token')
        localStorage.removeItem('experation')
      },

      isAuthenticated () {
          if (this.getToken())
            return true
          else
            return false

      },

      setAuthenticatedUser(data){
          authenticated = data
      },
      getAuthenticatedUser(){
        return authenticated
      }
    }
    Object.defineProperties(Vue.prototype, {
        $auth: {
          get () {
            return Vue.auth
          }
        }
    })
}

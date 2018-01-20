<template>
  <div class="row">
    <h2 class="text-center">Login</h2>
      <div class="col-md-6 col-md-offset-3">
          <div class="card">
              <div class="card-body">
                <div class="form-group">
                    <input
                        v-model="email"
                        class="form-control"
                        type="email"
                        placeholder="Email">
                </div>
                <div class="form-group">
                    <input
                        v-model="password"
                        class="form-control"
                        type="password"
                        placeholder="Password">
                </div>
                <button @click="login" class="btn btn-success pull-right">
                    Login
                </button>
              </div>
          </div>
      </div>﻿
    </div>
</template>
<script>
export default{
  data() {
    return {
      'email': '',
      'password': ''
    };
  },
  methods: {
    login() {
      var data = {
          client_id : 2,
          client_secret : 'O1aRmKzrAGCmcKDjZKiYfbWdcvmA32VLADSd3jCh',
          grant_type :'password',
          username : this.email,
          password : this.password
      }
      this.$http.post('http://localhost:8000/oauth/token',data)
      .then(response=>{
          this.$auth.setToken(response.body.access_token,response.body.expires_in + Date.now())
          this.$router.push('/feed')
        })
      // .then(function(response) {
      //     console.log(response)
      //   })

    }
  }
}
</script>
<style>
</style>

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
                <button class="btn btn-success pull-right">
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
  }
}
</script>
<style>
</style>

<template>
  <div class="container" id="app">
    <mynavbar></mynavbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  export default {
    components :{
      'mynavbar' : Navbar
    }
  }
</script>

<style>

</style>

<template>
  <div class="col-md-4">
    <div class="thumbnail myhover">
      <img src="https://cdn4.iconfinder.com/data/icons/pretty_office_3/256/packing.png" alt="${0}">

      <div class="caption">
        <span class="pull-right">User ID : {{product.user_id}}</span>
        <h3>{{ product.name }}</h3>
        <p class='text-primary'>${{ product.price }}</p>
        <p>
          <a href="#" class='btn btn-default'>Wish list</a>
          <a href="#" class='btn btn-success'>Buy</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product','authenticatedUser']
}
</script>

<style>
.myhover:hover{
   background-color: rgb(242,242,242);
}
</style>

<template>

<div class="col-md-4">
    <div class="thumbnail myhover">
        <img :src="'http://localhost:8000/Products/'+product.image" style=  'height:119px'>
        <div class="caption">
            <span class="pull-right">User ID : {{product.user_id}}</span>
            <h3>{{ product.name }}</h3>
            <p class='text-primary'>${{ product.price }}</p>
            <hr>
            <p>
                <a href="#" class='btn btn-default'>Wish list</a>
                <a href="#" class='btn btn-success'>Buy</a>
            </p>
            <hr>
            <p>
              <a href="#" class="btn btn-danger btn-sm"
                          @click="$emit('delete-product')" role="button"
                          v-if='product.user_id == authenticatedUser.id'>Delete</a>

              <router-link class='btn btn-primary btn-sm'
                            v-if='product.user_id == authenticatedUser.id'
                            :to="'/products/'+ product.id +'/edit'">
                Update
              </router-link>
              <router-link class='btn btn-default btn-sm'

                            :to="'/products/'+ product.id +'/details'">
                Details
              </router-link>
            </p>

        </div>
    </div>
</div>

</template>

<script>
// import swal from 'sweetalert'
export default {
    props: ['product', 'authenticatedUser'],

}

</script>

<style>

.myhover:hover {
    background-color: rgb(242, 242, 242);
}

</style>

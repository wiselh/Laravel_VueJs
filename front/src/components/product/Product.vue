<template>

<div class="col-md-4">
    <div class="thumbnail myhover">
        <img src="https://cdn4.iconfinder.com/data/icons/pretty_office_3/256/packing.png">
        <div class="caption">
            <span class="pull-right">User ID : {{product.user_id}}</span>
            <h3>{{ product.name }}</h3>
            <p class='text-primary'>${{ product.price }}</p>
            <hr>
            <p>
                <a href="#" class='btn btn-default'>Wish list</a>
                <a href="#" class='btn btn-success'>Buy</a>
                <a href="#" class="btn btn-danger btn-sm" @click='deleteProduct' role="button" v-if="product.user_id==authenticatedUser.id">Delete</a>
            </p>

        </div>
    </div>
</div>

</template>

<script>
import swal from 'sweetalert'
export default {
    props: ['product', 'authenticatedUser'],
    methods: {
        deleteProduct() {
            swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this product!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                      this.$http.delete('api/products/'+this.product.id)
                          .then(response=>{
                            console.log(response)

                            swal("Poof! Your product has been deleted!", {
                                icon: "success",
                            });
                          })

                    } else {
                        swal("Your product is safe!");
                    }
                });
        }
    }
}

</script>

<style>

.myhover:hover {
    background-color: rgb(242, 242, 242);
}

</style>

<template>
  <div class='row'>
        <my-product v-for="product in products"
                    :key="product.id"
                    :product='product'
                    @delete-product='deleteProduct(product)'
                    :authenticatedUser ='authenticatedUser'></my-product>
  </div>
</template>

<script>
  import Product from './Product.vue'
  export default {
    components: {
      'my-product' :Product
    },
    data(){
      return {
        products:[],
      }
    },
    computed:{
      authenticatedUser () {
        return this.$auth.getAuthenticatedUser()
      }
    },
    created() {
      this.$http.get('api/products')
       .then(response=> {
         this.products=response.body
       })
    },
    methods: {
        deleteProduct(product) {
          console.log(product)
            swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this product!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                      this.$http.delete('api/products/'+ product.id)
                          .then(response=>{

                            swal("Poof! Your product has been deleted!", {
                                icon: "success",
                            });

                            let index = this.products.indexOf(product)
                            this.products.splice(index,1) // to remove the product from vue after delete it
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
  table{
  padding:20px;
}
</style>

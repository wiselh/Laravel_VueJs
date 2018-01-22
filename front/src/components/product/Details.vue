<template>
    <div class='container'>
      <h2 class='text-center'>Product Details</h2>
      <div class="col-md-12 ">
        <div class="panel panel-default">

	           <div class="panel-body">
               <img class='pull-left' src="https://cdn4.iconfinder.com/data/icons/pretty_office_3/256/packing.png">
               <h3 class='text-center'>{{ product.name }}</h3>
               <h4 class='text-primary text-center'>${{ product.price }}</h4>

               <p>{{ product.description }}</p>
               <hr>
                  <p class='pull-left'>
                      <a href="#" class='btn btn-default'>Wish list</a>
                      <a href="#" class='btn btn-success'>Buy</a>
                  </p>

                  <p class='pull-right'>
                    <a href="#" class="btn btn-danger btn-sm"
                                @click="deleteProduct" role="button">Delete</a>

                    <router-link class='btn btn-primary btn-sm'

                                  :to="'/products/'+ product.id +'/edit'">
                      Update
                    </router-link>
                  </p>
             </div>
       </div>
      </div>
    </div>
</template>

<script>
  export default {
    props: ['product', 'authenticatedUser'],
    created(){
        this.getProduct()
    },
    data(){
      return {
        product :{}
      }
    },

    methods: {
      getProduct(){
        //get product
        this.$http.get('api/products/'+this.$route.params.product)
          .then(response=>{
            this.product = response.body // set product data
            }

          )
      },
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
                              this.$router.push('/feed')

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

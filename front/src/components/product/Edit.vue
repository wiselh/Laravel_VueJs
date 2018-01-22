<template>
    <div class='container'>
      <h2 class='text-center'>Edit Product</h2>
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">

	           <div class="panel-body">
		              <div class='form-group'>
                    <label for="name">Name</label>
                    <input type="text" name="name" id="" class='form-control' v-model='product.name'>
                  </div>
                  <div class='form-group'>
                    <label for="price">Price</label>
                    <input type="text" name="price" id="" class='form-control' v-model='product.price'>
                  </div>
                  <div class='form-group'>
                    <label for="description">Description</label>
                    <textarea name="description" id="" cols="3" rows="5" class='form-control' v-model='product.description'></textarea>
                  </div>
                  <button class='btn btn-success pull-right'
                    @click='update'>Update</button>
             </div>
       </div>
      </div>
    </div>
</template>

<script>
  export default {
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
            })

      },
      update() {
         this.$http.put('api/products/'+this.$route.params.product,this.product)
         .then(response=>{
           // Popup
           swal("Updated","Your product has been updated!", {
               icon: "success",
           });
         })
      }
    }
  }
</script>

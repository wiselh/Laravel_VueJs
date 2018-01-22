<template>
    <div class='row'>
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">
	           <div class="panel-body">
		              <form @submit.prevent='create'>
                    <div class='form-group'>
                      <label for="name">Name</label>
                      <input type="text" name="name" id="" class='form-control'
                              v-model='product.name'
                              v-validate="'required'">
                      <div class='help-block alert alert-danger'
                              v-show="errors.has('name')" style='color:red'>
                        {{errors.first('name')}}
                      </div>
                    </div>
                    <div class='form-group'>
                      <label for="price">Price</label>
                      <input type="text" name="price" id="" class='form-control'
                            v-model='product.price'
                            v-validate="'min_value:1'" >
                      <div class='help-block alert alert-danger'
                              v-show="errors.has('price')" style='color:red'>
                        {{errors.first('price')}}
                      </div>
                      <!-- <span class='pull-left' style='margin:0 5px 0 10px;'>Free :</span><input type="checkbox" name="free_price" class='checkbox'> -->
                    </div>
                    <div class='form-group'>
                      <label for="description">Description</label>
                      <textarea name="description" cols="3" rows="5" class='form-control'
                                v-model='product.description'
                                v-validate="'required'"></textarea>
                      <div class='help-block alert alert-danger'
                              v-show="errors.has('description')" style='color:red'>
                        {{errors.first('description')}}
                      </div>
                    </div>
                    <input type='submit' class='btn btn-success pull-right' value='create'>
                  </form>
             </div>
       </div>
      </div>
    </div>
</template>

<script>
// import { Validator } from 'vee-validate'
export default {
    data(){
      return {
        product :{
          name: '',
          price : 0,
          description : ''
        }
      }
    },
    methods: {
      create() {
        this.$validator.validateAll().then((result) =>{
           if (result) {
             this.$http.post('api/products',this.product)
              .then(response=>{
                this.$router.push('/feed')
              })
           }
        })
      }
    }
  }
</script>

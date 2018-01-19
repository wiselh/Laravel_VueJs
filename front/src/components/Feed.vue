<template>
  <div class='row'>
    <h1>Products</h1>
    <table class='table table-hover'>
      <thead>
        <th>Name</th>
        <th >Price</th>
        <th class="text-center">Description</th>
      </thead>
      <tbody>
          <tr v-for="product in products">
            <td>{{ product.name }}</td>
            <td class='text-primary'>${{ product.price }}</td>
            <td>{{ product.description }}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        products:[]
      }
    },
    created() {
      this.$http.get('api/products')
       .then(response=> {
         this.products=response.body
       })
    }
  }
</script>
<style>
table{
  padding:20px;
}
</style>

<template>
  <div>
    <div class="title">
      <h2>Add Product</h2>
      <product-form @save-product="createProduct" :model="model"></product-form>
    </div>
  </div>
</template>

<script>
import Form from '@/components/product/Form.vue'

import { API } from 'aws-amplify';
import { onCreateProduct } from '@/graphql/subscriptions';

export default {
  name : 'product-create',
  created() {
    this.subscribe()
  },
  data() {
    return {
      model : {}
    }
  },
  methods : {
    createProduct() {
      delete this.model.createdAt;
      delete this.model.updatedAt;
      this.$store.dispatch('addProduct', this.model)
    },
    subscribe() {
      API.graphql({ query: onCreateProduct })
        .subscribe({
          next: (eventData) => {
            // console.log('Product added', eventData)
            let productId = eventData.value.data.onCreateProduct.id
            this.$bvToast.toast(`Product Updated`+productId, {
              title: 'Azami Rugs Toast',
              autoHideDelay: 5000
            })
            // this.$router.push({name: 'ViewProduct', params: { id: productId }})
          }
        });
    }
  },
  components: {
    'product-form' : Form
  }
}
</script>
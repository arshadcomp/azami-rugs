<template>
  <div>
    <div class="title">
      <h3>Update Product</h3>
      <product-form @save-product="updateProduct" :model="model" :isEditing="true"></product-form>
    </div>
  </div>
</template>

<script>
import Form from '@/components/product/Form.vue'

import { API } from 'aws-amplify';
import { onUpdateProduct } from '@/graphql/subscriptions';

export default {
	name : 'product-update',
	created() {
    this.subscribe()
    if(!this.model.name)
			this.$store.dispatch('productById', this.$route.params.id)
	},
	computed: {
		model() {
      const productById = this.$store.getters.productById(this.$route.params.id)
      return Object.assign({}, productById)
		}
	},
  data() {
    return {
      subscription : {}
    }
  },
  methods : {
    updateProduct() {
      delete this.model.createdAt;
      delete this.model.updatedAt;
      delete this.model.orders;
      this.$store.dispatch('updateProduct', this.model)
    },
    subscribe() {
      this.subscription = API.graphql({ query: onUpdateProduct, authMode: 'API_KEY' })
        .subscribe({
          next: (eventData) => {
            // console.log('Product updated', eventData)
            let productId = eventData.value.data.onUpdateProduct.id
            this.$router.push({name: 'ViewProduct', params: { id: productId }})
                        .catch(err => { console.log('DUPLICATE ROUTE ERROR', err) })
          }
        });
    },
    unsubscribe() {
      this.subscription.unsubscribe();
    }
  },
  components: {
    'product-form' : Form
  }
}
</script>
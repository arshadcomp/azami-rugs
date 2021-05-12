<template>
		<b-card :title="product.name" class="mb-3 h-100">
			<router-link :to="'/product/'+product.id">
				<product-image :imageUrl="product.image"></product-image>
			</router-link>
      <b-card-text class="mt-2">
				<p class="d-flex justify-content-between">
					<small class="text-muted text-capitalize">{{ product.category.split('_').join(' ').toLowerCase() }}</small>
					<!-- <small class="text-muted">{{ product.material }}</small> -->
					<b-badge v-if="product.featured" variant="primary">Featured</b-badge>
				</p>
        {{ product.description.substring(0,100)+'...' }}<br>
				<!-- <b-button :to="'/admin/product/view/'+product.id" variant="outline-primary"><b-icon-eye></b-icon-eye> View Details</b-button> -->
				<!-- <b-button v-if="!$route.path.includes('admin')">View</b-button> -->
      </b-card-text>
      <template #footer>
				<b-button-group size="sm" v-if="$route.path.includes('admin')">
					<b-button :to="'/admin/product/view/'+product.id" variant="outline-primary"><b-icon-eye></b-icon-eye> View</b-button>
					<b-button :to="'/admin/product/update/'+product.id" variant="outline-primary"><b-icon-pencil></b-icon-pencil> Update</b-button>
					<b-button :to="'/admin/product/remove/'+product.id" variant="outline-primary"><b-icon-trash></b-icon-trash> Delete</b-button>
				</b-button-group>
				<b-button v-else :to="'/product/'+product.id" variant="outline-primary" class="stretched-link"><b-icon-eye></b-icon-eye> View Details</b-button>
				<!-- <span v-else-if="product.featured"><b-badge variant="primary">Featured</b-badge></span>
				<span v-else>Unique Design</span> -->
      </template>
    </b-card>
</template>

<script>
import ProductImage from '@/components/product/Image.vue'

export default {
	name: 'product-item',
	props: ['product'],
	components: {
		'product-image' : ProductImage
	},
}
</script>
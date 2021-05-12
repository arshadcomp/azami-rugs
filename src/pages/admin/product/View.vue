<template>
	<b-card
		:header="featured"
		:title="product.category.split('_').join(' ')"
		tag="article"
		style="max-width: 20rem;"
		class="mb-2"
	>
	<ProductImage :imageUrl="product.image"/>
	<b-card-text>
		<p class="d-flex justify-content-between">
			<small class="text-muted">{{ product.name }}</small>
			<small class="text-muted">{{ product.material }}</small>
		</p>
		
		{{ product.description }}

	</b-card-text>
	<template #footer>
			<b-button-group size="sm">
				<b-button :to="'/admin/product/view/'+product.id" variant="outline-primary"><b-icon-eye></b-icon-eye> View</b-button>
				<b-button :to="'/admin/product/update/'+product.id" variant="outline-primary"><b-icon-pencil></b-icon-pencil> Update</b-button>
				<b-button :to="'/admin/product/remove/'+product.id" variant="outline-primary"><b-icon-trash></b-icon-trash> Delete</b-button>
			</b-button-group>
		</template>
	</b-card>
</template>

<script>
import ProductImage from '@/components/product/Image.vue'
export default {
	name: 'view-product',
	components: {
		ProductImage
	},
	computed: {
		product() {
			return this.$store.getters.productById(this.$route.params.id)
			// const productById = this.$store.getters.productById(this.$route.params.id)
      // return Object.assign({}, productById)
		},
		featured() {
			return this.product.featured ? 'Featured' : null
		}
	},
}
</script>
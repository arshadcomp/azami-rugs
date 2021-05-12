<template>
	<b-container class="mt-5 pt-5">
		<b-row>
			<b-col cols="12" md="4" class="mb-3">
				<ProductImage :imageUrl="product.image"/>
			</b-col>
			<b-col cols="12" md="8" class="mb-3">
				<b-badge v-if="product.featured" variant="primary" class="mb-3">Featured</b-badge>
				<h3 class="font-courgette">{{ product.name }}</h3>
				<p>{{ product.description }}</p>
				<h5>Product Information</h5>
				<p>{{product.material}}</p>
				<p class="text-capitalize">{{product.category.split('_').join(' ').toLowerCase()}}</p>
				<b-button :to="'/contact'" variant="outline-primary" ><b-icon-card-checklist></b-icon-card-checklist> Get A Quote</b-button>

			</b-col>
		</b-row>
	</b-container>
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
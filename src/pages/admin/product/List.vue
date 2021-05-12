<template>
	<div class="mb-3">
		<h3>Product List</h3>
		<b-container class="m-0 p-0">
			<b-row>
				<b-col cols="12" md="6" class="mb-3" v-for="product in products" :key="product.id">
					<product-item :product="product"></product-item>
				</b-col>
			</b-row>
		</b-container>
		<!-- <div v-for="product in products" :key="product.id" class="mb-3 pb-2 border-bottom"> -->
			<!-- <b-card-group columns>
				<product-item v-for="product in products" :key="product.id" :product="product"></product-item>
			</b-card-group> -->
			<!-- <product-item :product="product"></product-item>
			<b-button-group size="sm">
				<b-button :to="'/admin/product/view/'+product.id" variant="outline-primary"><b-icon-eye></b-icon-eye> View</b-button>
				<b-button :to="'/admin/product/update/'+product.id" variant="outline-primary"><b-icon-pencil></b-icon-pencil> Update</b-button>
				<b-button :to="'/admin/product/remove/'+product.id" variant="outline-primary"><b-icon-trash></b-icon-trash> Delete</b-button>
			</b-button-group> -->
		<!-- </div> -->
	</div>
</template>

<script>
import Item from '@/components/product/Item'

export default {
	name: 'product-list',
	created() {
		if(this.products.length === 0)
			this.$store.dispatch('allProducts')
	},
	computed: {
		products() {
			return this.$store.getters.allProducts
		}
	},
	data() {
		return {
			
		}
	},
	components: {
		'product-item' : Item
	}
}
</script>
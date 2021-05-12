<template>
	<b-container>
		
		<b-sidebar id="sidebar-1" title="Filter" shadow>
			<div class="px-3 py-2">
				<b-form-group label="Filter Products By" v-slot="{ ariaDescribedby }">
					<b-form-checkbox-group
						id="checkbox-group-1"
						v-model="selected"
						:options="options"
						:aria-describedby="ariaDescribedby"
						name="flavour-1"
						@change="filter"
						stacked
					></b-form-checkbox-group>
				</b-form-group>
			</div>
		</b-sidebar>
		
		<div class="d-flex justify-content-between mt-5 pt-5 mb-3">
			<h2 class="font-courgette display-2" v-t="'menu.products'"></h2>
			<b-button v-b-toggle.sidebar-1 class="my-auto" variant="primary">Filters</b-button>
		</div>
		
		<b-row v-if="products">
			<b-col cols="12" md="4" class="mb-3" v-for="product in filteredProducts" :key="product.id" >
				<product-item :product="product"></product-item>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import Item from '@/components/product/Item'

export default {
	name: 'product-list',
	created() {
		if(this.products.length === 0)
			this.$store.dispatch('allProducts')
		if(this.$store.getters.productcategories.length === 0)
			this.$store.dispatch('listCategories')
	},
	mounted() {
		this.filteredProducts = this.products // add filter
	},
	data() {
		return {
			selected: [],
			filteredProducts: [],
		}
	},
	computed: {
		products() {
			return this.$store.getters.allProducts
		},
		options() {
      return this.$store.getters.productcategories.map(option => {
        return { value: option.name, text:option.name.split('_').join(' ') }
      }) 
    }
	},
	methods: {
		filter(){
			// console.log('Selected', this.selected)
			this.filteredProducts = this.products.filter(p => 
				this.selected.indexOf(p.category) >= 0
			)
			// console.log('Filterd Products', this.filteredProducts)
		}
	},
	components: {
		'product-item' : Item
	}
}
</script>
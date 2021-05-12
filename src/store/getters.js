
export const productGetters = {
	allProducts: (state) => {
		return state.products
	},
	featuredProducts: (state, getters) => {
		if (getters.allProducts.length > 0) {
			return getters.allProducts.filter(p => p.featured === true)
		}
	},
	productById: (state, getters) => id => {
		if (getters.allProducts.length > 0) {
			return getters.allProducts.filter(p => p.id === id)[0]
		} else {
			return state.product
		}
	},
	productcategories: (state) => {
		return state.productCategories
	}
}
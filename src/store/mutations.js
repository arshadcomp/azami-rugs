import {
	UPDATE_LOCALE,
	ADD_PRODUCT,
	ADD_PRODUCT_SUCCESS,
	PRODUCT_BY_ID,
	PRODUCT_BY_ID_SUCCESS,
	ALL_PRODUCTS,
	ALL_PRODUCTS_SUCCESS,
	UPDATE_PRODUCT,
	UPDATE_PRODUCT_SUCCESS,
	REMOVE_PRODUCT,
	REMOVE_PRODUCT_SUCCESS,
	ALL_CATEGORY_SUCCESS,

	SET_AUTH_STATE,
	SET_AUTH_DATA
} from './mutation-types'

export const productMutations = {
	[UPDATE_LOCALE] : (state, payload) => {
		state.locale = payload
	},
	[ADD_PRODUCT]: (state) => {
		state.showLoader = true
	},
	[ADD_PRODUCT_SUCCESS]: (state, payload) => {
		state.showLoader = false
		state.products.push(payload)
	},
	[PRODUCT_BY_ID] (state) {
		state.showLoader = true
	},
	[PRODUCT_BY_ID_SUCCESS] (state, payload) {
		state.showLoader = false
		state.product = payload
	},
	[ALL_PRODUCTS] (state) {
		state.showLoader = true
	},
	[ALL_PRODUCTS_SUCCESS] (state, payload) {
		state.showLoader = false
		state.products = payload
	},
	[UPDATE_PRODUCT]: (state) => {
		state.showLoader = true
	},
	[UPDATE_PRODUCT_SUCCESS]: (state, payload) => {
		state.showLoader = false
		state.product = payload
		state.products = state.products.map(p => {
			if(p.id === payload.id)
				p = payload
			return p
		})
	},
	[REMOVE_PRODUCT] (state) {
		state.showLoader = true
	},
	[REMOVE_PRODUCT_SUCCESS](state, payload) {
		state.showLoader = false
		let index = state.products.findIndex(m => m.id === payload)
		state.products.splice(index, 1)
		if(state.product.id === payload)
			state.product = {}
	},

	[ALL_CATEGORY_SUCCESS] (state, payload) {
		state.showLoader = false
		// console.log('Category', payload)
		state.productCategories = payload
	}
}

export const authMutations = {
	[SET_AUTH_STATE] (state, authState) {
		state.authorized = authState === 'signedin' ? true : false;
	},
	[SET_AUTH_DATA](state, authData) {
		state.user = authData
	} 
}
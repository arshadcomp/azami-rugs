import { API } from 'aws-amplify';
import i18n from '@/i18n'

import { createProduct } from '@/graphql/mutations';
import { getProduct } from '@/graphql/queries';
import { listProducts } from '@/graphql/queries';
import { updateProduct } from '@/graphql/mutations';
import { deleteProduct } from '@/graphql/mutations';

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
  ALL_CATEGORY_SUCCESS
	
} from './mutation-types'

export const productActions = {
  changeLocale({ commit }, newLocale) {
    i18n.locale = newLocale
    commit(UPDATE_LOCALE, newLocale)
  },
  addProduct ({commit}, payload) {
    commit(ADD_PRODUCT)
    return API.graphql({
      query: createProduct,
      variables: { input: payload },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })
    .then((response) => { 
      commit(ADD_PRODUCT_SUCCESS, response.data.createProduct)
      return response.data.createProduct
    })
    .catch(error => console.log('ERROR CREATING PRODUCT', error));
  },
  productById ({commit}, payload) {
    commit(PRODUCT_BY_ID)
    API.graphql({
      query: getProduct,
      variables: {id: payload},
      authMode: 'API_KEY'
    })
    .then(response => {
      commit(PRODUCT_BY_ID_SUCCESS, response.data.getProduct)
    })
    .catch(error => console.log('ERROR FETCHING PRODUCT', error));
  },
  allProducts ({commit}) {
    commit(ALL_PRODUCTS)
    API.graphql({
      query: listProducts,
      authMode: 'API_KEY'
    })
    .then(response => {
      commit(ALL_PRODUCTS_SUCCESS, response.data.listProducts.items)
    })
    .catch(error => console.log('ERROR FETCHING PRODUCTS', error));
  },
  updateProduct ({commit}, payload) {
    commit(UPDATE_PRODUCT)
    API.graphql({
      query: updateProduct,
      variables: { input: payload },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })
    .then((response) => { 
      commit(UPDATE_PRODUCT_SUCCESS, response.data.updateProduct)
    })
    .catch(error => console.log('ERROR UPDATING PRODUCT', error));
  },
  removeProduct({commit}, payload) {
    commit(REMOVE_PRODUCT)
    API.graphql({
      mutation: deleteProduct,
      variables: { input: payload },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })
    .then(response => {
      commit(REMOVE_PRODUCT_SUCCESS, response.data.deleteProduct)
    })
    .catch(error => console.log('ERROR REMOVING PRODUCT', error))
  },
  listCategories({commit}) {
    commit(ALL_PRODUCTS)
    API.graphql({
      query: `
        query {
          __type(name: "Category") {
            name
            enumValues {
              name
            }
          }
        }
      `,
      authMode: 'API_KEY'
    })
    .then(response => {
      // console.log('Category', response)
      commit(ALL_CATEGORY_SUCCESS, response.data.__type.enumValues)
    })
    .catch(error => console.log('ERROR FETCHING CATEGORIES', error))
  }
}

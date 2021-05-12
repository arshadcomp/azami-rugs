<template>
  <div>
    <b-form @submit.prevent="saveProduct">
      <b-form-group id="input-group-1" label="Product Name" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="model.name"
          required
          placeholder="Enter Product Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Product Description" label-for="input-2">
        <b-form-textarea
          id="input-2"
          v-model="model.description"
          
          placeholder="Enter Product Description"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group-3" label="Product Image" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="model.image"
          
          placeholder="Enter Product Image URL or just image key from Images Album"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Product Material" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="model.material"
          
          placeholder="Enter material of the product like Jute, Cotton etc."
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Category" label-for="input-5">
        <b-form-select v-model="model.category" :options="options"></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-6" label-for="input-6">
        <b-form-checkbox
          id="input-6"
          v-model="model.featured"
          :value=true
          :unchecked-value=false
          class="mb-3 mr-sm-2 mb-sm-0"
        >Featured Product</b-form-checkbox>
      </b-form-group>
      <b-button type="submit" variant="primary" :disabled=isLoading>
        <span v-if="isEditing">Update Product</span>
        <span v-else><b-spinner small v-if="isLoading"></b-spinner>Add Product</span>
      </b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    props: ['model', 'isEditing'],
    created() {
      if(this.$store.getters.productcategories.length === 0)
        this.$store.dispatch('listCategories')
    },
    data() {
      return {

      }
    },
		computed: {
			isLoading() {
				return this.$store.state.showLoader
      },
      options() {
        return this.$store.getters.productcategories.map(option => {
          return { value: option.name, text:option.name.split('_').join(' ') }
        })
        
      }
		},
    methods: {
      saveProduct () {
				this.model.name = this.model.name.trim()
        this.model.image = this.model.image.trim()
        this.model.material = this.model.material.trim()
				// delete this.model.category
				this.$emit('save-product', this.model)
      }
    }
  }
</script>

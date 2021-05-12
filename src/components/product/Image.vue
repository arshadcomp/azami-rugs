<template>
	<amplify-s3-image v-if="inS3Storage" :img-key=imgKey />
	<b-card-img
		v-else
		:src="imageUrl"
		height="300"
		alt="Product Image"
		img-top
	>
	</b-card-img>
</template>

<style scoped>
amplify-s3-image {
  --height: 300px;
  --width: 100%;
}
</style>


<script>
export default {
	name: 'product-image',
	props: ['imageUrl'],
	data() {
		return {

		}
	},
	computed :{
		inS3Storage() {
			return !this.imageUrl.includes("http")
		},
		imgKey() {
			return this.imageUrl.trim()
		}
	}
}
</script>
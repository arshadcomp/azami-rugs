<template>
	<div>
		
		<div class="mb-3 border-bottom">
			<h4>List of Images with Key</h4>
			<div class="alert alert-success">
				<p>Use only Keys</p>
			</div>
			<b-row>
				<b-col v-for="image in images" :key="image.key" cols="12" sm="6" md="4" lg="4" class="mb-3">
					<b-card class="mb-2 h-100" no-body>
						<amplify-s3-image :img-key=image.key />
						<b-card-text class="p-2">
							{{image.key}}
						</b-card-text>
					</b-card>
				</b-col>
			</b-row>
		</div>
		<h3>Use the button below to upload files</h3>
		<amplify-s3-album path="images/" picker=true pickerText="UPLOAD"></amplify-s3-album>
	</div>
</template>

<style>
amplify-s3-image {
  --height: 200px;
  --width: 100%;
}
</style>

<script>
import { Storage } from 'aws-amplify';

export default {
	name: 'image-list',
	created() {
    Storage.list('images/')
      .then(result => {
				console.log(result)
				this.images = result
			})
			.catch(err => console.log(err));
	},
	data() {
		return {
			images: []
		}
	}
}
</script>
<template>
	<div>
		<Caraousel/>
		<b-container class="mb-5">
			<!-- <h1 v-t="'message'"></h1> -->
			<h4 class="font-gradient" v-t="'blocks[0].title'"></h4>
			<h2 class="font-courgette display-3" v-t="'blocks[0].subtitle'"></h2>
			<p class="lead" v-t="'blocks[0].description'"></p>
		</b-container>
		<b-container class="mb-5">
			<b-row class="mb-3 text-center" align-v="center">
				<b-col cols="12" md="6">
					<!-- <img src="https://picsum.photos/seed/picsum/600/600" alt="" class="img-fluid w-100 rounded mb-3"> -->
					<img src="https://source.unsplash.com/oGXtAZzKR20/600x600" alt="" class="img-fluid w-100 rounded mb-3">
				</b-col>
				<b-col cols="12" md="6">
					<h4 class="font-gradient" v-t="'blocks[1].title'"></h4>
					<h2 class="font-courgette" v-t="'blocks[1].subtitle'"></h2>
					<p v-t="'blocks[1].description'"></p>
				</b-col>
			</b-row>
			<b-row class="mb-3 text-center" align-v="center">
				<b-col cols="12" md="6" order-md="2">
					<!-- <img src="https://picsum.photos/seed/picsum/600/600" alt="" class="img-fluid w-100 rounded mb-3"> -->
					<img src="https://source.unsplash.com/2oruk2qVpkI/600x600" alt="" class="img-fluid w-100 rounded mb-3">
				</b-col>
				<b-col cols="12" md="6" order-md="1">
					<h4 class="font-gradient" v-t="'blocks[2].title'"></h4>
					<h2 class="font-courgette" v-t="'blocks[2].subtitle'"></h2>
					<p v-t="'blocks[2].description'"></p>
				</b-col>
			</b-row>
		</b-container>
		

		<div class="parallax">
			<div class="parallax-curtain">
				<b-container class="pt-5">
					<b-icon icon="chat-right-quote" font-scale="4" variant="primary"></b-icon>
					<h4 class="font-courgette border-bottom py-2">I always begin a room with the rug; it is literally the foundation of the space. I then go on to the furniture.</h4>
					<p class="text-right">Lee Redziwill</p>
				</b-container>
			</div>
		</div>

		<b-container class="py-5 border-bottom">
			<h2 class="font-courgette text-center display-2" v-t="'blocks[3].title'"></h2>
			<p class="text-center" v-t="'blocks[3].subtitle'"></p>
			
			<b-card-group deck>
				<product-item v-for="product in products" :key="product.id" :product="product"></product-item>
			</b-card-group>
			<b-card-group deck>
				<product-item v-for="product in products_2" :key="product.id" :product="product"></product-item>
			</b-card-group>
		</b-container>

		<b-container class="my-5">
			<h2 class="font-courgette text-center display-2" v-t="'blocks[4].title'"></h2>
			<b-row class="my-3">
				<b-col cols="12" md="4" class="mb-3">
					<b-media class="p-3 border rounded">
						<template #aside>
							<b-iconstack font-scale="5">
								<b-icon stacked icon="flower3" variant="primary" scale="0.7"></b-icon>
								<b-icon stacked icon="flower1" variant="primary"></b-icon>
							</b-iconstack>
						</template>
						<p>Unique</p>
						<h3>Designs</h3>
					</b-media>
				</b-col>
				<b-col cols="12" md="4" class="mb-3">
					<b-media class="p-3 border rounded">
						<template #aside>
							<b-icon font-scale="5" icon="gem" variant="primary"></b-icon>
						</template>
						<p>Uncompromised</p>
						<h3>Quality</h3>
					</b-media>
				</b-col>
				<b-col cols="12" md="4" class="mb-3">
					<b-media class="p-3 border rounded">
						<template #aside>
							<b-iconstack font-scale="5">
								<b-icon stacked icon="stopwatch" variant="primary" scale="0.4" shift-v="3" shift-h="-3"></b-icon>
								<b-icon stacked icon="truck-flatbed" variant="primary"></b-icon>
							</b-iconstack>
						</template>
						<p>On Time</p>
						<h3>Delivery</h3>
					</b-media>
				</b-col>
			</b-row>
		</b-container>

		

		
	</div>
</template>

<style scoped>


.parallax {
        background-color: white;
        background-image: url("https://source.unsplash.com/p00r5JmTMpY");
        height: 100%; 
        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        /*following just for demo purposes to add height and top padding*/
        /* height:300vh;
        padding-top:100vh; */
    }
    .parallax-curtain{
      height:50vh;
      background:rgba(255,255,255,0.5);
    }
</style>

<script>
import Caraousel from "@/components/Caraousel.vue"
import Item from '@/components/product/Item'

export default {
	name: 'Home',
	created() {
		if(this.products.length == 0)
      this.$store.dispatch('allProducts')
	},
	data() {
		return {
			blocks: this.$t('blocks')
		}
	},
	computed: {
		products() {
			if(this.$store.getters.featuredProducts && this.$store.getters.featuredProducts.length > 0)
				return this.$store.getters.featuredProducts.slice(0,3);
			return []
		},
		products_2() {
			if(this.$store.getters.featuredProducts && this.$store.getters.featuredProducts.length > 0)
				return this.$store.getters.featuredProducts.slice(3,6);
			return []
		}
	},
	components: {
		Caraousel,
		'product-item' : Item
  }
}
</script>
<template>
	<div class="py-3 bg-dark">
		<b-container class="py-3 mt-3 text-white">
			<b-row class="mb-3 border-bottom border-secondary">
				<b-col cols="12" md="4" class="mb-3" >
					<p>{{ $t('menu.about') }}</p>
					<small>
						{{$t('footer.about')}}
						<!-- We have a very long presence in the carpet industry of Bhadohi and have been associated with multiple exporters. We manufacture pure ethnically designed Carpets par excellence since 1970. -->
						<br>
						<b-link to="about" class="text-secondary">Read More</b-link>
					</small>
				</b-col>
				<b-col cols="12" md="2" class="mb-3">
					<p>{{ $t('menu.home') }}</p>
					<small v-if="!this.$store.state.authorized" ><b-link to="/login" class="text-secondary">Login</b-link></small><br>
					<small v-if="this.$store.state.authorized" ><b-link to="/login" class="text-secondary">Logout</b-link></small><br>
					<small v-if="this.$store.state.authorized"><b-link to="/admin" class="text-secondary">App Configuration</b-link></small><br>
				</b-col>
				<b-col cols="12" md="2" class="mb-3">
					<p>{{$t('menu.products')}}</p>
					<small><b-link to="products" class="text-secondary">Carpets</b-link></small><br>
					<small><b-link to="products" class="text-secondary">Rugs</b-link></small><br>
					<small><b-link to="products" class="text-secondary">Hand Tufted</b-link></small>
				</b-col>
				<b-col cols="12" md="4" class="mb-3">
					<p>{{ $t('menu.contact_us') }}</p>
					<small>
						<address class="mb-3 pb-3 border-bottom">
							<p v-for="line in this.$store.state.address" :key="line" class="mb-0">{{ line }}</p>
						</address>
						<b-icon icon="envelope" variant="muted" class="mr-2"></b-icon> <a mailto="azamicarpets@gmail.com">{{ this.$store.state.email }}</a><br>
						<b-icon icon="phone" variant="muted" class="mr-2"></b-icon> {{ this.$store.state.mobile }}<br>
						<b-icon icon="facebook" variant="muted" class="mr-2"></b-icon> {{ this.$store.state.whatsapp }}
					</small>
				</b-col>
			</b-row>
			<b-row class="mb-3">
				<b-col class="text-center text-muted">
					<a href="https://www.facebook.com"  target="_blank" rel="noopener" class="mr-4"><b-icon icon="facebook" variant="muted"></b-icon></a>
					<a href="https://www.twitter.com"  target="_blank" rel="noopener" class="mr-4"><b-icon icon="twitter" variant="muted"></b-icon></a>
					<a href="https://www.instagram.com"  target="_blank" rel="noopener" class="mr-4"><b-icon icon="instagram" variant="muted"></b-icon></a>
					<a href="https://www.linkedin.com"  target="_blank" rel="noopener" class="mr-4"><b-icon icon="linkedin" variant="muted"></b-icon></a>
				</b-col>
			</b-row>
			<b-row>
				<b-col class="text-center text-muted"><small> &#169; Azami Carpets. All Rights Reserved.</small></b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
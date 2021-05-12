<template>
	<div class="py-5">
		<img 	srcset="https://source.unsplash.com/K9rzuo6DeiE/1024x768 480w,
									https://source.unsplash.com/K9rzuo6DeiE/1920x600 800w"
					sizes="(max-width: 600px) 480px,
									800px"
					src="https://source.unsplash.com/K9rzuo6DeiE"
					class="mb-3 w-100"
					alt="Contact Us Image">
		
		<b-container>
			<h4 class="font-gradient">GET IN TOUCH</h4>
			<h2 class="font-courgette display-1">Contact Us</h2>
			<b-row>
				<b-col cols="12" md="8" class="mb-5 pb-3 border-bottom">
					<b-form @submit="onSubmit" @reset="onReset" v-if="show">
						<b-form-group
							id="input-group-1"
							label="Email address"
							label-for="input-1"
							description="We'll never share your email with anyone else."
						>
							<b-form-input
								id="input-1"
								v-model="form.email"
								type="email"
								placeholder="Enter email"
								required
							></b-form-input>
						</b-form-group>

						<b-form-group id="input-group-2" label="Your Name" label-for="input-2">
							<b-form-input
								id="input-2"
								v-model="form.name"
								placeholder="Enter name"
								required
							></b-form-input>
						</b-form-group>

						<b-form-group id="input-group-3" label="Phone No" label-for="input-3">
							<b-form-input
								id="input-3"
								v-model="form.phone"
								placeholder="Enter Phone No"
							></b-form-input>
						</b-form-group>

						<b-form-group id="input-group-4" label="Subject" label-for="input-4">
							<b-form-input
								id="input-4"
								v-model="form.subject"
								placeholder="Subject"
							></b-form-input>
						</b-form-group>

						<b-form-group id="input-group-5" label="Message" label-for="input-5">
							<b-form-input
								id="input-5"
								v-model="form.message"
								placeholder="Message"
							></b-form-input>
						</b-form-group>

						<b-button type="submit" variant="primary" class="mr-3">Submit</b-button>
						<b-button type="reset" variant="danger">Reset</b-button>
					</b-form>
				</b-col>
				<b-col cols="12" md="4">
					<h4>Address</h4>
					<address class="text-muted mb-3 py-3 border-bottom">
						<p v-for="line in address" :key="line" class="mb-0">{{ line }}</p>
					</address>
					<p class="mb-1 d-flex justify-content-between"><span class="text-primary mr-3"><b-icon icon="telephone" class="mr-2"></b-icon> Telephone</span><span>{{ this.$store.state.telephone }}</span></p>
					<p class="mb-1 d-flex justify-content-between"><span class="text-primary mr-3"><b-icon icon="phone" class="mr-2"></b-icon> Mobile</span><span>{{ this.$store.state.mobile }}</span></p>
					<p class="mb-1 d-flex justify-content-between"><span class="text-primary mr-3"><b-icon icon="envelope" class="mr-2"></b-icon> Email</span><span>{{ this.$store.state.email }}</span></p>
					<div class="mb-1 d-flex justify-content-between"><div class="text-primary mr-3"><b-icon icon="clock" class="mr-2"></b-icon> Working Hours</div><div class="text-right">Mon - Sat<br>09:00 AM to 05:00 PM IST</div></div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
export default {
	name: 'Contact',
	data() {
		return {
			form: {
				email: '',
				name: '',
				phone: '',
				subject: '',
				message: ''
			},
			address: this.$store.state.address,
			show: true
		}
	},
	methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.phone = ''
				this.form.subject = ''
				this.form.message = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
			}
	}
}
</script>
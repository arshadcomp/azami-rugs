<template>
    <b-container id="app" class="p-0 m-0 bg-light" fluid>
      <Menu/>
      <router-view></router-view>
      <Footer/>
    </b-container>
</template>

<script>
import { Auth } from 'aws-amplify'
import { onAuthUIStateChange } from '@aws-amplify/ui-components'

import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue"

export default {
  name: 'App',
  components: {
    Menu,
    Footer,
  },
  created() {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        this.$store.commit('SET_AUTH_STATE', 'signedin')
        this.$store.commit('SET_AUTH_DATA', {attributes: user.attributes, signInUserSession: user.signInUserSession})
      }).catch(err => {
        console.log(err)
        this.$store.commit('SET_AUTH_STATE', 'signedout')
        this.$store.commit('SET_AUTH_DATA', null)
      })

    onAuthUIStateChange((authState, authData) => {
      console.log('AUTH STATE', authState)
      if(authState === 'signedin') {
        this.$store.commit('SET_AUTH_STATE', authState)
        this.$store.commit('SET_AUTH_DATA', authData)
      } else {
        this.$store.commit('SET_AUTH_STATE', 'signedout')
        this.$store.commit('SET_AUTH_DATA', null)
      }
    })
  },
  beforeDestroy() {
    return onAuthUIStateChange;
  }
}
</script>
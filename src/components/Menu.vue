<template>
  <b-navbar toggleable="lg" type="light" variant="white" fixed="top" class="border-bottom">
    <b-navbar-brand :to="'/'">
      <img class="mr-3" alt="Vue logo" width="30" src="@/assets/logo.png"><span class="font-anton text-primary">Azami</span> <span class="font-anton text-success">Rugs</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="'/'" :active='$route.name==="Home"'>{{ $t('menu.home') }}</b-nav-item>
        <b-nav-item :to="'/about'" :active='$route.name==="About"'>{{ $t('menu.about') }}</b-nav-item>
        <b-nav-item :to="'/product'" :active='$route.name==="Products"'>{{ $t('menu.products') }}</b-nav-item>
        <!-- <b-nav-item-dropdown :text="$t('menu.products')" right> -->
          <!-- <b-dropdown-item-button v-for="option in options" :key="option.value" @click="changeLanguage(language.code)">
            {{options.name}}
          </b-dropdown-item-button> -->
          <!-- <b-dropdown-item v-for="option in options" :key="option.value" :to="'/product'">{{option.text}}</b-dropdown-item> -->
          <!-- <b-dropdown-item :to="'/product/category/HAND_TUFTED'">Hand Tufted</b-dropdown-item>
          <b-dropdown-item :to="'/product'">Braided Rug</b-dropdown-item>
          <b-dropdown-item :to="'/product'">Table Tuft</b-dropdown-item>
          <b-dropdown-item :to="'/product'">New Arrivals</b-dropdown-item> -->
        <!-- </b-nav-item-dropdown> -->
        <b-nav-item :to="'/contact'" :active='$route.name==="Contact"'>{{ $t('menu.contact_us') }}</b-nav-item>
        <b-nav-item-dropdown :text="$t('menu.language')" right>
          <b-dropdown-item-button v-for="language in languages" :key="language.code" @click="changeLanguage(language.code)">
            <flag :iso="language.iso" class="mr-2" />
            {{language.title}}
          </b-dropdown-item-button>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name : 'app-menu',
  created() {
    if(this.$store.getters.productcategories.length === 0)
      this.$store.dispatch('listCategories')
  },
  data() {
    return {
      change: 'Language',
      languages: [
        { code: 'en', title: 'English', iso: "gb" },
        { code: 'fr', title: 'French', iso: "fr" },
        { code: 'pt', title: 'Potuguese', iso: "pt" },
        { code: 'ar', title: 'Arabic', iso: "sa" }
      ]
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
    changeLanguage(code) {
      console.log('Change Language', code)
      this.$store.dispatch('changeLocale', code)
      // this.$i18n.locale = code
    }
  }
}
</script>
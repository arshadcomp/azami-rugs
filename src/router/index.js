import Vue from 'vue';
import Router from 'vue-router';
// import store from '@/store'

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

// import ProductIndex from '@/pages/product/Index'
import ProductList from '@/pages/product/List';
import ProductView from '@/pages/product/View';

import AdminRoutes from './admin'

Vue.use(Router);

const router = new Router({
	routes: [
		{
      path: '/',
      name: 'Home',
      component: Home
		},
		{
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/product',
      name: 'Product',
      component: ProductList,
    },
    {
			path: '/product/:id',
			name: 'ProductView',
			component: ProductView
		},
    AdminRoutes
	]
})

export default router
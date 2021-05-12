import Index from '@/pages/admin/Index';

import CreateProduct from '@/pages/admin/product/Create';
import ViewProduct from '@/pages/admin/product/View';
import ListProduct from '@/pages/admin/product/List';
import UpdateProduct from '@/pages/admin/product/Update';

import ListImage from '@/pages/admin/image/List';

export default {
	path: '/admin',
	component: Index,
	meta: {
		requiresAuth: true,
		admin: true
	},
	children: [
		//Product Admin paths
		{
			path: 'product/create',
			name: 'CreateProduct',
			component: CreateProduct
		},
		{
			path: 'product/view/:id',
			name: 'ViewProduct',
			component: ViewProduct
		},
		{
			path: 'product/list',
			name: 'ListProduct',
			component: ListProduct
		},
		{
			path: 'product/update/:id',
			name: 'UpdateProduct',
			component: UpdateProduct
		},
		// Image Album path
		{
			path: 'image/list',
			name: 'ListImage',
			component: ListImage
		},
	]
}


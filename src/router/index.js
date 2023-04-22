import { createRouter, createWebHistory } from 'vue-router'
import Default from '../layout/Default.vue'

import Home from '../view/Home.vue'
import Posts from '../view/Posts.vue'
import Authorization from '../view/Authorization.vue'
import NotFound from '../view/NotFound.vue'
import Post from '../view/Post.vue'
const routes = [
	{
		path: '/',
		component: Default,
		children: [
			{
				path: '/',
				name: 'home',
				component: Home,
			},
			{
				path: '/:posts/',
				name: 'posts',
				component: Posts,
			},
			{
				path: '/:posts/:postId',
				name: 'postId',
				component: Post,
			},
			{
				path: '/authorization/:params',
				name: 'authorization',
				component: Authorization,
			},
			{
				path: '/:pathMatch(.*)*',
				name: 'NotFound',
				component: NotFound,
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router

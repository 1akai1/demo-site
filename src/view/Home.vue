<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import store from '../store'
import NewsFeed from '../components/UI/NewsFeed.vue'
import PostList from '../components/UI/PostList.vue'

const router = useRouter()
const postLimitRender = 6

onMounted(() => {
	try {
		// store.dispatch('getArticles', 'articles')
		store.dispatch('getData', {
			url: 'articles',
			mutationName: 'setData',
			stateName: 'articles',
		})
		store.dispatch('getData', {
			url: 'categories',
			mutationName: 'setData',
			stateName: 'categories',
		})
	} catch {
		router.push({ name: 'NotFound', params: { pathMatch: 404 } })
	}
})
</script>

<template>
	<section>
		<news-feed class="bg-milck-50"></news-feed>
		<post-list :postLimitRender="postLimitRender"></post-list>
	</section>
</template>

<style scoped></style>

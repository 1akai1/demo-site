<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import store from '../store'
import NewsFeed from '../components/UI/NewsFeed.vue'

const router = useRouter()
const data = computed(() => store.state.categories)

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
	<div>
		home
		<news-feed></news-feed>
	</div>
</template>

<style scoped></style>

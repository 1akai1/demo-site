<script setup>
import PostListRender from '../components/UI/Element/PostListRender.vue'
import { onMounted, computed, watch, ref } from 'vue'
import store from '../store'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const data = computed(() => store.state.categories)
const posts = computed(() => route.params.posts)
async function getDatawithURL(url) {
	try {
		store.dispatch('getData', {
			url: `categories?url=${url}`,
			mutationName: 'setData',
			stateName: 'categories',
		})
	} catch {
		router.push({ name: 'NotFound', params: { pathMatch: 404 } })
	}
}

watch(posts, () => getDatawithURL(posts.value))

onMounted(() => {
	getDatawithURL(posts.value)
})
</script>

<template>
	<post-list-render
		:data="data"
		:enabled="false"></post-list-render>
</template>

<style scoped></style>

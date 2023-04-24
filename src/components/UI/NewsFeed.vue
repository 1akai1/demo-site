<script setup>
import { computed, onMounted, onUnmounted, ref, nextTick, onBeforeMount } from 'vue'
import store from '../../store'
import NewsRender from './Element/NewsRender.vue'

const posts = ref()
const data = computed(() => store.getters.getNewsFeed(posts.value))

const changeList6or8 = (e) => {
	posts.value = e.matches ? 6 : 8
}
const changeList4or6 = (e) => {
	posts.value = e.matches ? 4 : 6
}
let media1600px
let media900px

onMounted(async () => {
	media1600px = window.matchMedia('(max-width: 1600px)')
	media1600px.addEventListener('change', changeList6or8)

	media900px = window.matchMedia('(max-width: 900px)')
	media900px.addEventListener('change', changeList4or6)

	await nextTick()
	if (media900px.matches) {
		posts.value = 4
	} else if (media1600px.matches) {
		posts.value = 6
	} else {
		posts.value = 8
	}
})
onUnmounted(() => {
	media1600px.removeEventListener('change', changeList6or8)
	media900px.removeEventListener('change', changeList4or6)
})
</script>

<template>
	<section
		class="grid media600:grid-cols-2 gap-[2px] m-5 px-5 mx-auto media900:grid-cols-3 media1600:grid-cols-4 max-w-[1600px]">
		<news-render :data="data"></news-render>
	</section>
</template>

<style scoped></style>

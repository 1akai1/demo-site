<script setup>
import {
	computed,
	onMounted,
	onUnmounted,
	ref,
	nextTick,
	onBeforeMount,
} from 'vue'
import store from '../../store'
import NewsRender from './Element/NewsRender.vue'

const test = ref()
const data = computed(() => store.getters.getNewsFeed(test.value))

const changeList6or8 = (e) => {
	test.value = e.matches ? 6 : 8
}
const changeList4or6 = (e) => {
	test.value = e.matches ? 4 : 6
}
let media1600px
let media900px

onMounted(async () => {
	media1600px = window.matchMedia('(max-width: 1600px)')
	media1600px.addEventListener('change', changeList6or8)

	media900px = window.matchMedia('(max-width: 900px)')
	media900px.addEventListener('change', changeList4or6)

	await nextTick()
	if (media1600px.matches) {
		test.value = 6
	} else if (media900px.matches) {
		test.value = 4
	} else {
		test.value = 8
	}
})
onUnmounted(() => {
	media1600px.removeEventListener('change', changeList6or8)
	media900px.removeEventListener('change', changeList4or6)
})
</script>

<template>
	<section
		class="grid media600:grid-cols-2 gap-1 m-5 px-5 mx-auto media900:grid-cols-3 media1600:grid-cols-4 max-w-[1600px]">
		<news-render :data="data"></news-render>
	</section>
</template>

<style scoped></style>

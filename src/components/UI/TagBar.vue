<script setup>
import store from '../../store'
import TagRender from './Element/TagRender.vue'
import { onMounted, onUnmounted, computed } from 'vue'

const tags = computed(() => store.state.tags)

onMounted(() => {
	const storedTags = localStorage.getItem('tags')
	if (storedTags) {
		store.commit('setData', {
			data: JSON.parse(storedTags || []),
			stateName: 'tags',
		})
	} else {
		// store.dispatch('getData', {
		// 	url: 'tag',
		// 	mutationName: 'setData',
		// 	stateName: 'tag',
		// })
		store.commit('setData', {
			data: [
				{ name: '#новость', id: 1 },
				{ name: '#патч', id: 2 },
				{ name: '#гайд', id: 3 },
				{ name: '#полезное', id: 4 },
				{ name: '#баг', id: 5 },
			],
			stateName: 'tags',
		})
	}
})
onUnmounted(() => {
	localStorage.removeItem('tags')
})
</script>

<template>
	<div class="text-white bg-black">
		<tag-render
			class="max-w-[1600px] mx-auto"
			:tags="tags"></tag-render>
	</div>
</template>

<style scoped></style>

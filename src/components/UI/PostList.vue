<script setup>
import { computed } from 'vue'
import PostListRender from './Element/PostListRender.vue'
import store from '../../store'

const props = defineProps({
	postLimitRender: Number,
})
const data = computed(() => store.getters.getPostList(props.postLimitRender))
</script>

<template>
	<section class="flex flex-col gap-5 max-w-[1600px] px-5 m-5 mx-auto">
		<post-list-render
			:data="data"
			:enabled="true"></post-list-render>
	</section>
</template>

<style scoped></style>

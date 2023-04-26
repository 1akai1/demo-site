<script setup>
import PostListRender from '../components/UI/Element/PostListRender.vue'
import { onMounted, computed, watch } from 'vue'
import store from '../store'
import { useRoute, useRouter } from 'vue-router'
import { getDataWithServer } from '../composition/getDataWithServer'

const route = useRoute()
const router = useRouter()
const data = computed(() => store.state.categories)
const posts = computed(() => route.params.posts)
const check = computed(() => store.getters.check)

watch(
	posts,
	async () =>
		await getDataWithServer(`categories?url=${posts.value}`, 'setData', 'categories', router)
)

onMounted(async () => {
	await getDataWithServer(`categories?url=${posts.value}`, 'setData', 'categories', router)
})
</script>

<template>
	<section
		v-if="check"
		class="flex flex-col gap-5 max-w-[1600px] px-5 m-5 mx-auto">
		<post-list-render
			:data="data"
			:enabled="false"></post-list-render>
	</section>
</template>

<style scoped></style>

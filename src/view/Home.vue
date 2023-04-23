<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getDataWithServer } from '../composition/getDataWithServer'
import NewsFeed from '../components/UI/NewsFeed.vue'
import PostList from '../components/UI/PostList.vue'

const router = useRouter()
const postLimitRender = 6

onMounted(() => {
	getDataWithServer('articles', 'setData', 'articles', router)
	getDataWithServer('categories', 'setData', 'categories', router)
})
</script>

<template>
	<section>
		<news-feed class="bg-milck-50"></news-feed>
		<post-list :postLimitRender="postLimitRender"></post-list>
	</section>
</template>

<style scoped></style>

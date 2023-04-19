<script setup>
import { computed, ref } from 'vue'
import store from '../../store'
import NewsRender from './Element/NewsRender.vue'

const data = computed(() => store.getters.getNewsFeed)
</script>

<template>
	<section>
		<news-render :data="data"></news-render>
	</section>
</template>

<style scoped></style>

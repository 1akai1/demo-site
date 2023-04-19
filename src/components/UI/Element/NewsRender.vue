<script setup>
import { watchEffect } from 'vue'

const props = defineProps({
	data: {
		type: Array,
	},
})

watchEffect(() => {
	console.log(props.data)
})
</script>

<template>
	<pre>{{ props.data[0] }}</pre>
	<article
		v-for="item in data"
		:key="item.id">
		{{ item.title }}
	</article>
</template>

<style scoped></style>

<script setup>
const props = defineProps({
	tags: {
		type: Array,
	},
})
</script>

<template>
	<ul class="flex gap-5 px-5 mx-auto my-1 JetBrainsMono max-w-[1600px]">
		<li
			v-for="tag in tags"
			:key="tag.id">
			{{ tag.name }}
		</li>
	</ul>
</template>

<style scoped></style>

<script setup>
const props = defineProps({
	tags: {
		type: Array,
	},
})
</script>

<template>
	<ul class="flex gap-5 px-5 py-[2px] JetBrainsMono">
		<li
			v-for="tag in tags"
			:key="tag.id">
			{{ tag.name }}
		</li>
	</ul>
</template>

<style scoped></style>

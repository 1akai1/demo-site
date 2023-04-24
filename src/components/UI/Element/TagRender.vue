<script setup>
const props = defineProps({
	tags: {
		type: Array,
	},
})
</script>

<template>
	<ul class="flex gap-5 leading-[normal] px-5 py-[5px] text-[0.9rem] JetBrainsMono">
		<li
			v-for="tag in tags"
			:key="tag.id">
			{{ tag.name }}
		</li>
	</ul>
</template>

<style scoped></style>

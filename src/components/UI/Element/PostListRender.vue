<script setup>
const props = defineProps({
	data: {
		type: Array,
	},
})
</script>

<template>
	<section
		v-for="categorie in data"
		:key="categorie.id"
		class="flex flex-col gap-1">
		<h1 class="text-2xl font-bold JetBrainsMono">{{ categorie.name }} -></h1>
		<article class="flex gap-2">
			<article
				class=""
				v-for="article in categorie.articles"
				:key="article.id">
				<img
					class="max-w-[250px] max-h-[145px]"
					:src="article.image.formats.small.url"
					:alt="article.image.formats.small.name" />
				<div
					class="line-clamp-1"
					v-html="article.content"></div>
			</article>
		</article>
	</section>
</template>

<style scoped></style>

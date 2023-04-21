<script setup>
import { ref } from 'vue'
import { Scrollbar, Thumbs, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/thumbs'
import 'swiper/css/mousewheel'
import 'swiper/css/grid'
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
		class="flex flex-col gap-2 posts">
		<h1 class="text-2xl font-bold JetBrainsMono">{{ categorie.name }} -></h1>
		<article class="">
			<swiper
				:modules="[Scrollbar, Mousewheel]"
				:slides-per-view="'auto'"
				:mousewheel="{ forceToAxis: true, releaseOnEdges: true }"
				:space-between="12"
				:scrollbar="{
					el: '.swiper-scrollbar',
					draggable: true,
				}">
				<swiper-slide
					v-for="article in categorie.articles"
					:key="article.id"
					class="mb-5">
					<div class="w-[250px]">
						<div
							class="h-[145px] bg-cover bg-center rounded"
							:alt="article.image.formats.small.name"
							:style="{ backgroundImage: `url(${article.image.formats.small.url})` }"></div>
						<div
							class="line-clamp-1"
							v-html="article.content"></div>
					</div>
				</swiper-slide>
				<div class="swiper-scrollbar"></div>
			</swiper>
		</article>
	</section>
</template>

<style>
.posts .swiper-slide {
	width: auto;
}
.posts .swiper-scrollbar {
	width: 100%;
	border-radius: 0;
	height: 10px;
	box-shadow: 0px 0px 7px 1px rgba(34, 60, 80, 0.2) inset;
	background-color: transparent;
	left: 0;
}
.posts .swiper-scrollbar-drag {
	border-radius: 0;
	background: black;
}
</style>

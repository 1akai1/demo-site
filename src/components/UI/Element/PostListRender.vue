<script setup>
import { computed, ref } from 'vue'
import { Scrollbar, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useRouter } from 'vue-router'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/thumbs'
import 'swiper/css/mousewheel'
import 'swiper/css/grid'
import store from '../../../store'

const check = computed(() => store.getters.check)
const router = useRouter()
const props = defineProps({
	data: {
		type: Array
	},
	enabled: {
		type: Boolean
	}
})
let wrap = ref()
let spaceBetween = ref(12)
let gap = ref('0')
if (!props.enabled) {
	wrap.value = 'wrap'
	spaceBetween.value = 0
	gap.value = '12px'
} else {
	wrap.value = 'nowrap'
	spaceBetween.value = 12
	gap.value = '0'
}
</script>

<template>
	<section
		v-if="check"
		v-for="categorie in data"
		:key="categorie.id"
		class="flex flex-col gap-2 posts">
		<h1
			@click="router.push(`/${categorie?.url}`)"
			class="text-[1.7rem] font-bold cursor-pointer JetBrainsMono">
			{{ categorie.name }} ->
		</h1>
		<article>
			<swiper
				v-if="categorie.articles?.length"
				:modules="[Scrollbar, Mousewheel]"
				:slides-per-view="'auto'"
				:mousewheel="{ forceToAxis: true, releaseOnEdges: true }"
				:space-between="spaceBetween"
				:enabled="enabled"
				:scrollbar="{
					el: '.swiper-scrollbar',
					draggable: true
				}"
				:style="{ '--swiper-wrapper-wrap': wrap, '--swiper-wrapper-gap': gap }">
				<swiper-slide
					v-for="article in categorie.articles"
					:key="article.id"
					class="overflow-hidden bg-white rounded shadow-md cursor-pointer mb-7 group"
					@click="router.push(`/${categorie?.url}/${article?.url}`)">
					<div class="w-[250px] h-[320px]">
						<div
							class="h-[145px] bg-cover bg-center rounded-t transition-[height] ease-in-out duration-300 group-hover:h-[110px]"
							:alt="article.image.formats.small.name"
							:style="{ backgroundImage: `url(${article.image.formats.small.url})` }"></div>
						<div class="px-2 py-1 OpenSans">
							<h2 class="mb-1 OpenSans">{{ article.title }}</h2>
							<div
								class="text-sm font-light h-[145px] overflow-hidden"
								v-html="article.content"></div>
						</div>
					</div>
					<div class="h-1 transition-colors duration-300 ease-in-out group-hover:bg-red-500"></div>
				</swiper-slide>
				<div class="swiper-scrollbar"></div>
			</swiper>
			<h2
				v-else
				class="text-sm OpenSans">
				Пока статей нет =/
			</h2>
		</article>
	</section>
</template>

<style>
.swiper-wrapper {
	flex-wrap: var(--swiper-wrapper-wrap);
	gap: var(--swiper-wrapper-gap);
}
/* .swiper-wrapper .swiper-slide {
	margin: var(--swiper-wrapper-m) !important;
} */
.posts p,
.posts strong {
	display: inline;
	font-weight: inherit;
}
.posts img {
	display: none;
}
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

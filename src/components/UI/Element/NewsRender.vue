<script setup>
import { useRouter } from 'vue-router'
import { timeForm } from '../../../composition/timeForm'
import store from '../../../store'
import { computed } from 'vue'
const check = computed(() => store.getters.check)
const router = useRouter()
const props = defineProps({
	data: {
		type: Array,
	},
})
function gradient(categoryId) {
	switch (categoryId) {
		case 1:
			return '#9a8866'
		case 2:
			return 'rgb(17, 203, 79)'
		case 3:
			return 'rgb(38, 13, 13)'
		case 4:
			return '#00a1de'
		case 5:
			return 'rgb(55, 6, 51)'
	}
	return 'blue'
}
</script>

<template>
	<article
		v-if="check"
		v-for="item in data"
		:key="item.id">
		<div
			@click="router.push(`/${item?.category?.url}/${item?.url}`)"
			class="rounded-sm bg-zoom p-[15px] flex flex-col justify-between h-[198px] media900:h-[223px] text-white OpenSans cursor-pointer"
			:style="{
				'--bg-image': `url(${item?.image?.formats?.small?.url})`,
				'--gradient-from': gradient(item?.category?.id),
			}">
			<div class="flex justify-between text-sm">
				<p>{{ item?.category?.name }}</p>
				<time>{{ timeForm(item?.updated_at) }}</time>
			</div>
			<h3
				class="md:text-[1.3rem] text-[1.1rem] leading-[normal] transition-[padding-bottom] duration-300 ease-in-out">
				{{ item?.title }}
			</h3>
		</div>
	</article>
</template>

<style scoped>
.bg-zoom {
	position: relative;
	overflow: hidden;
}

.bg-zoom::after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: linear-gradient(rgba(0, 0, 0, 0) 20%, var(--gradient-from)), var(--bg-image);
	background-size: cover;
	background-position: center;
	transition: transform 0.3s ease-in-out;
	z-index: -1;
}

.bg-zoom:hover::after {
	transform: scale(1.2);
	background-image: linear-gradient(rgba(255, 0, 0, 0), #ed3900), var(--bg-image);
}

.bg-zoom > * {
	position: relative;
	/* z-index: 1; */
}
.bg-zoom:hover h3 {
	padding-bottom: 20px;
}
</style>

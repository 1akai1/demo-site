<script setup>
import { useRouter } from 'vue-router'
const emit = defineEmits(['goto'])
const router = useRouter()
const { nav } = defineProps({
	nav: {
		required: true,
		type: Array,
	},
})
</script>

<template>
	<ul class="flex flex-col items-center mt-10 md:gap-10 md:flex-row md:mt-0">
		<li
			@click="
				() => {
					emit('goto', false)
					router.push(`/${item.url}`)
				}
			"
			v-for="item in nav"
			:key="item.id"
			class="py-5 text-lg cursor-pointer md:py-0 hover:text-orange-500 JetBrainsMono">
			{{ item.name }}
		</li>
	</ul>
</template>

<style scoped></style>

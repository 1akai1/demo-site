<script setup>
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import store from '../../store'
import NavRender from './Element/NavRender.vue'
import Logo from './Element/Logo.vue'
import Login from './Authorization/Login.vue'
import Hamburger from './Element/Hamburger.vue'
import { getDataWithServer } from '../../composition/getDataWithServer'

const router = useRouter()
const nav = computed(() => store.getters.getNav)
const active = ref(false)
let storedNav

store.watch(
	(state) => state.nav,
	() => {
		if (storedNav == (undefined || null)) {
			let temp = computed(() => store.getters.getNav)
			localStorage.setItem('nav', JSON.stringify(temp.value))
		}
	}
)
onMounted(async () => {
	storedNav = JSON.parse(localStorage.getItem('nav'))
	if (storedNav == (undefined || null)) {
		await getDataWithServer('categories', 'setData', 'nav', router)
	} else {
		store.commit('setNav', storedNav)
		// console.log(storedNav)
	}
})
onUnmounted(() => {
	localStorage.removeItem('nav')
})
</script>

<template>
	<nav class="bg-white">
		<div
			class="flex items-center justify-between gap-10 mx-auto px-5 py-1 max-w-[1600px] select-none">
			<hamburger
				v-model:active="active"
				class="order-1 md:order-2 md:mr-auto">
				<nav-render
					@goto="(e) => (active = e)"
					:nav="nav" />
			</hamburger>
			<logo
				@click="router.push('/')"
				class="order-2 cursor-pointer min-w-[120px] md:order-1" />
			<Login class="order-3 cursor-pointer md:order-3" />
		</div>
	</nav>
</template>

<style scoped></style>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import store from '../../store'
import NavRender from './Element/NavRender.vue'
import Logo from './Element/Logo.vue'
import Login from './Authorization/Login.vue'
import Hamburger from './Element/Hamburger.vue'

const router = useRouter()
const nav = computed(() => store.state.nav)
const active = ref(false)

store.watch(
	(state) => state.nav,
	() => {
		if (!nav.value.length) {
			store.commit('setNav', store.getters.getNav)
			localStorage.setItem('nav', JSON.stringify(nav.value))
		}
	}
)
onMounted(async () => {
	await store.dispatch('getData', {
		url: 'categories',
		mutationName: 'setData',
		stateName: 'nav',
	})
	const storedNav = localStorage.getItem('nav')
	if (storedNav) {
		store.commit('setNav', JSON.parse(storedNav || []))
	} else {
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

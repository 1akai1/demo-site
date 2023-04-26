<script setup>
import { computed, onMounted } from 'vue'
import Loading from '../components/UI/Element/Loading.vue'
import store from '../store'

const check = computed(() => store.getters.check)
</script>

<template>
	<main class="mt-[26px]">
		<loading :check="check"></loading>
		<router-view />
	</main>
</template>

<style scoped>
main {
	min-height: calc(100% - (180px + 27.6px + 50px + 26px));
}
</style>

<script setup>
import Loading from '../components/UI/Element/Loading.vue'
</script>

<template>
	<main class="mt-[26px]">
		<loading></loading>
		<router-view />
	</main>
</template>

<style scoped>
main {
	min-height: calc(100% - (180px + 27.6px + 50px + 26px));
}
</style>

<script setup>
import Loading from '../components/UI/Element/Loading.vue'
</script>

<template>
	<main>
		<loading></loading>
		<router-view />
	</main>
</template>

<style scoped>
main {
	min-height: calc(100% - (180px + 28px + 48px));
}
</style>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
const [route, router] = [useRoute(), useRouter()]
const url = computed(() => route.params.postId)
</script>

<template>
	<pre>{{ data }}</pre>
	<pre>{{ url }}</pre>
</template>

<style scoped></style>

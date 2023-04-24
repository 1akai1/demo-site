<script setup>
import Login from '../components/UI/Authorization/Login.vue'
import Forgot from '../components/UI/Authorization/Forgot.vue'
import Register from '../components/UI/Authorization/Register.vue'
import { useRoute, useRouter } from 'vue-router'
import { computed, watch } from 'vue'

const route = useRoute()
const URL = computed(() => route.params.params)
</script>

<template>
	<div class="p-16 mx-auto">
		<login v-if="URL == 'login'" />
		<forgot v-if="URL == 'forgot'" />
		<register v-if="URL == 'register'" />
	</div>
	<!-- <div>Authorization</div>
	<pre>{{ URL }}</pre> -->
</template>

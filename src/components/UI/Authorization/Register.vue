<script setup>
import { ref } from 'vue'

const email = ref([])
const password = ref([])
const lonig = ref([])
</script>

<template>
	<form
		class="mx-auto w-[700px] py-5 px-6 rounded-md OpenSans text-[#2c3e50] shadow-gray-400 drop-shadow-xl bg-white select-none">
		<h3 class="text-right">
			<router-link
				to="/authorization/login"
				class="inline-block px-1 mb-5 text-sm border-b-[1px] transition-border duration-300 ease-in-out hover:border-[#ff9339]"
				>Вход</router-link
			>
		</h3>

		<div class="flex flex-col items-center">
			<h1 class="mb-12 text-3xl">Регистрация</h1>
			<div class="relative group">
				<input
					v-model="lonig"
					class="p-2 mb-6 bg-gray-200 rounded-md outline-none w-72"
					type="text"
					id="text"
					name="text" />
				<label
					:class="{ 'opacity-0': lonig.length }"
					class="absolute opacity-1 top-0 left-0 p-2 transition-all duration-300 ease-in-out group-focus-within:p-0 group-focus-within:-top-6 group-focus-within:text-[#ff9339]"
					for="text"
					>Логин</label
				>
			</div>
			<div class="relative group">
				<input
					v-model="email"
					class="p-2 mb-6 bg-gray-200 rounded-md outline-none w-72"
					type="email"
					id="email"
					name="email" />
				<label
					:class="{ 'opacity-0': email.length }"
					class="absolute opacity-1 top-0 left-0 p-2 transition-all duration-300 ease-in-out group-focus-within:p-0 group-focus-within:-top-6 group-focus-within:text-[#ff9339]"
					for="email"
					>E-mail</label
				>
			</div>
			<div class="relative group">
				<input
					v-model="password"
					class="p-2 bg-gray-200 rounded-md outline-none w-72 mb-7"
					type="password"
					id="password"
					name="password" />
				<label
					:class="{ 'opacity-0': password.length }"
					for="password"
					class="absolute top-0 left-0 p-2 transition-all duration-300 ease-in-out group-focus-within:p-0 group-focus-within:-top-6 group-focus-within:text-[#ff9339]"
					>Пароль</label
				>
			</div>
			<h3>
				<router-link
					to="/authorization/forgot"
					class="inline-block px-1 mb-5 text-sm border-b-[1px] transition-border duration-300 ease-in-out hover:border-[#ff9339]"
					>Забыли пароль?</router-link
				>
			</h3>
			<input
				class="px-12 py-2 mb-12 bg-[#ff9339] text-white rounded-3xl myshadow active:scale-[.95]"
				type="button"
				value="ВОЙТИ" />
		</div>
	</form>
</template>

<style scoped>
.myshadow:active {
	box-shadow: 0px 0px 10px 4px rgba(255, 147, 57, 0.2);
}
</style>

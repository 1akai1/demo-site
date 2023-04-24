<script setup>
import Telegram from './Icon/Telegram.vue'
import Vk from './Icon/vk.vue'
import Discord from './Icon/Discord.vue'
import Boosty from './Icon/Boosty.vue'
</script>

<template>
	<div class="flex justify-between p-5 text-white">
		<div class="flex flex-col justify-around">
			<router-link to="/">
				<h1 class="text-3xl font-semibold JetBrainsMono">DeSync</h1>
			</router-link>
			<time class="text-xs OpenSans">© 2018 - {{ new Date().getFullYear() }} DeSync.ru</time>
		</div>
		<div>
			<div class="mb-1">
				<h2 class="mb-1 text-base font-thin Oswald">Ещё мы есть тут</h2>
				<div class="flex gap-2">
					<a href="https://vk.com/desyncru">
						<vk
							class="p-1 hover:bg-[#2771c6] transition-[background] duration-300 cursor-pointer ease-out rounded h-10" />
					</a>
					<a href="https://t.me/desync_ru">
						<telegram
							class="hover:bg-[#18cdff] transition-[background] duration-300 cursor-pointer ease-out rounded h-10" />
					</a>
					<a href="http://discord.gg/3BMeFpV">
						<discord
							class="hover:bg-[#5575cd] transition-[background] duration-300 cursor-pointer ease-out rounded h-10" />
					</a>
				</div>
			</div>
			<h2 class="mb-1 text-base font-thin Oswald">А тут можно помочь</h2>
			<a href="https://boosty.to/erl">
				<div class="flex items-center p-1 rounded cursor-pointer group">
					<boosty class="h-8 rounded" />
					<p
						class="text-xs OpenSans group-hover:text-red-600 transition-[color] duration-300 ease-out">
						boosty.to/erl
					</p>
				</div>
			</a>
		</div>
	</div>
</template>

<style scoped></style>

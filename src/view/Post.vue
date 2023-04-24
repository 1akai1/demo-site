<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed, onMounted, ref, nextTick, watch } from 'vue'
import { getDataWithServer } from '../composition/getDataWithServer'
import { timeForm } from '../composition/timeForm'
import store from '../store'
import myTime from '../components/UI/Element/Icon/Time.vue'

const check = computed(() => store.getters.check)
const [route, router] = [useRoute(), useRouter()]
const url = computed(() => route.params.postId)
const data = computed(() => store.state.post)
const comments = computed(() => store.state.comments)
const user = computed(() => store.state.user)
watch(data, async () => {
	console.log('d')
	await getDataWithServer(`comments/articles:${data.value[0].id}`, 'setData', 'comments', router)
})

onMounted(async () => {
	await getDataWithServer(`articles?url=${url.value}`, 'setData', 'post', router)
	nextTick()
})
</script>

<template>
	<!-- <pre>{{ data }}</pre> -->
	<!-- <pre>{{ url }}</pre> -->
	<section
		class="mx-auto max-w-[1600px] bg-white"
		v-if="check">
		<article
			v-for="item in data"
			class="p-5 mx-auto post">
			<div class="mb-5">
				<h1 class="mb-1">{{ item?.title }}</h1>
				<my-time class="inline mr-1" />
				<time class="text-sm OpenSans"> {{ timeForm(item?.updated_at) }}</time>
			</div>
			<img
				:src="item?.image?.formats?.large?.url"
				:alt="item?.image?.name" />
			<div>
				<div v-html="item?.content"></div>
				<section class="flex flex-col gap-2 pt-4 mt-8 border-t-2">
					<div v-for="comment in comments">
						<div class="flex gap-3 pb-1">
							<div>
								<img
									class="w-14 h-14 rounded-[50%] object-top object-cover"
									v-if="comment?.authorUser?.avatar?.formats?.small?.url"
									:src="comment?.authorUser?.avatar?.formats?.small?.url"
									alt="" />
								<img
									class="w-14 h-14 rounded-[50%] object-top object-cover"
									v-else
									src="../assets/user_avatar.png"
									alt="" />
							</div>
							<div class="pb-2 border-b-2">
								<div class="text-lg OpenSans text-[#2c3e50]">
									{{ comment?.authorUser?.username }}
								</div>
								<div class="text-lg OpenSans text-[#2c3e50]">{{ comment?.content }}</div>

								<div class="flex gap-2 OpenSans text-sm text-[#808080]">
									<div>{{ timeForm(comment?.created_at) }}</div>
									|
									<button class="text-black">Ответить</button>
								</div>
							</div>
						</div>

						<div
							v-for="child in comment?.children"
							class="relative left-10">
							<div class="flex gap-3 pb-1">
								<div>
									<img
										class="w-10 h-10 rounded-[50%] object-top object-cover"
										v-if="child?.authorUser?.avatar?.formats?.small?.url"
										:src="child?.authorUser?.avatar?.formats?.small?.url"
										alt="" />
									<img
										class="w-10 h-10 rounded-[50%] object-top object-cover"
										v-else
										src="../assets/user_avatar.png"
										alt="" />
								</div>
								<div class="pb-2 border-b-2">
									<div class="text-lg OpenSans text-[#2c3e50]">
										{{ child?.authorUser?.username }}
									</div>
									<div class="text-lg OpenSans text-[#2c3e50]">{{ child?.content }}</div>
									<div class="flex gap-2 OpenSans text-sm text-[#808080]">
										<div>{{ timeForm(child?.created_at) }}</div>
										|
										<button>Ответить</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="user"></div>
					<div
						v-else
						class="w-full bg-[#eee] py-[10px] px-[15px] OpenSans text-[#2c3e50] text-base rounded-lg">
						Что бы оставить свой комментарий необходимо
						<router-link
							to="/authorization/login"
							class="text-[#ed3900] underline"
							>Войти</router-link
						>
						или
						<router-link
							to="/authorization/register"
							class="text-[#ed3900] underline"
							>Зарегистрироваться</router-link
						>
					</div>
				</section>
			</div>
		</article>
	</section>
</template>

<style>
:root {
	--color-text: #2c3e50;
}
.post h1 {
	font-family: 'Oswald';
	font-weight: bold;
	font-size: 2rem;
	color: var(--color-text);
}
.post h2 {
	font-family: 'Oswald';
	font-weight: bold;
	font-size: 1.9rem;
	margin-bottom: 10px;
	margin-top: 20px;
	color: var(--color-text);
}
.post h3 {
	font-family: 'Oswald';
	font-weight: bold;
	font-size: 1.5rem;
	margin-bottom: 10px;
	margin-top: 20px;
	color: var(--color-text);
}
.post ol {
	list-style-type: decimal;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
		Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	color: var(--color-text);
	font-size: 1.2rem;
	padding-left: 0;
}
.post ol li {
	margin-left: 20px;
}
.post ul {
	list-style-type: disc;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
		Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	color: var(--color-text);
	font-size: 1.2rem;
	padding-left: 0;
}
.post ul li {
	margin-left: 20px;
}
.post a {
	color: #ed3900;
	text-decoration: underline;
}
.post a strong {
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
		Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	color: inherit;
	text-decoration: inherit;
	font-weight: 400;
	font-style: normal;
}
.post p {
	color: var(--color-text);
	font-size: 1.2rem;
}
.post strong {
	color: inherit;
	font-size: inherit;
	font-family: inherit;
	font-style: inherit;
	font-weight: inherit;
	text-decoration: inherit;
}
.post figure img {
	border-radius: 5px;
	margin-bottom: 10px;
}
.post .image {
	padding: 10px;
}
.post blockquote {
	padding: 10px 20px;
	background-color: #333;
	color: #fff;
}
.post p {
	color: inherit;
}
</style>

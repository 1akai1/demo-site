<script setup>
const props = defineProps({
	active: {
		type: Boolean,
		default: false,
	},
})

const emit = defineEmits(['update:active'])

function toggle() {
	emit('update:active', !props.active)
}
</script>

<template>
	<div>
		<div class="md:hidden">
			<button
				@click="toggle"
				:class="{ active: active }"
				class="fixed z-20 menu-icon">
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
		<div
			:class="{ active: active }"
			class="fixed left-0 top-0 w-screen h-screen z-10 bg-white translate-x-[100%] md:translate-x-0 transition duration-200 ease-in-out menu md:static md:w-auto md:h-auto md:top-auto">
			<slot></slot>
		</div>
	</div>
</template>

<style scoped>
.menu.active {
	transform: translateX(0);
}
.menu-icon {
	width: 35px;
	height: 22px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.menu-icon span {
	display: block;
	width: 100%;
	height: 3px;
	background-color: rgb(28, 28, 28);
	/* border-radius: 2px; */
	transition: all 0.3s ease-in-out;
	user-select: none;
}

.menu-icon.active span:nth-child(1) {
	/* transform: rotate(45deg); */
	transform: translateY(calc(-100%)) rotate(45deg);
	transform-origin: left;
}

.menu-icon.active span:nth-child(2) {
	opacity: 0;
	transform: translatex(-100%);
}

.menu-icon.active span:nth-child(3) {
	transform: translateY(calc(100%)) rotate(-45deg);
	transform-origin: left;
}
.menu-icon:hover span:nth-child(1) {
	/* transform: rotate(45deg); */
	transform: translateY(calc(-100%)) rotate(10deg);
	transform-origin: left;
}

.menu-icon:hover span:nth-child(2) {
	opacity: 0.8;
	transform: translatex(-10%);
}

.menu-icon:hover span:nth-child(3) {
	transform: translateY(calc(100%)) rotate(-10deg);
	transform-origin: left;
}
.menu-icon.active:hover span:nth-child(1) {
	/* transform: rotate(45deg); */
	transform: translateY(calc(-100%)) rotate(45deg);
	transform-origin: left;
}

.menu-icon.active:hover span:nth-child(2) {
	opacity: 0;
	transform: translatex(-100%);
}

.menu-icon.active:hover span:nth-child(3) {
	transform: translateY(calc(100%)) rotate(-45deg);
	transform-origin: left;
}
</style>

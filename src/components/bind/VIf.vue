<template>
	<div>
		<button @click="h1Display">点击显示右边文字</button>
		&emsp;
		<span v-if="h1IsDisplay">我是显示的文字</span>
		<p v-if="!h1IsDisplay">查看F12可以看到 在文字的部分被替换成了 < &ensp;!----&ensp;> ,也就是说该位置的DOM被移除掉了</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			h1IsDisplay: true
		};
	},
	methods: {
		h1Display() {
			this.h1IsDisplay = !this.h1IsDisplay;
		}
	}
};
</script>

<style></style>

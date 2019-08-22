<template>
	<div>
		<button @click="h2Display">点击显示右边文字</button>
		&emsp;
		<span v-show="h2IsDisplay">我是显示的文字</span>
		<p v-if="!h2IsDisplay">查看F12可以看到 在文字的部分的标签上新增加了 style="display:none;",也就是说该位置的DOM被隐藏掉了</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			h2IsDisplay: true
		};
	},
	methods: {
		h2Display() {
			this.h2IsDisplay = !this.h2IsDisplay;
		}
	}
};
</script>

<style></style>

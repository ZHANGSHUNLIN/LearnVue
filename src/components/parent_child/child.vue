<template>
	<div>
		<hr />
		<p>现在是子组件01：</p>
		<input type="text" v-model="val" />
		&emsp;{{ val }}
		<input type="button" @click="change01" value="修改父组件的值" />
	</div>
</template>

<script>
export default {
	props: ['val'],
	methods: {
		change01() {
			this.$emit('pmethd', this.val);
		}
	}
};
</script>

<style scoped></style>

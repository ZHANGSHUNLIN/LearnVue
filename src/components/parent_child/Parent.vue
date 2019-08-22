<template>
	<div>
		<hr/>
		<p>子组件</p>
		<child01 :val="pval" @pmethd="updateVal"></child01>
		<br><hr>
		<input type="text" v-model="pval">
		&emsp;
		{{pval}}
	</div>
</template>

<script>

		import child01 from './child.vue';
		
	export default{
		data() {
			return {
				pval : '父组件的值'
			}
		},methods: {
			updateVal(val) {
				this.pval = val;
				console.log("启动了 updataVal方法")
			}
		},
		components: {
			child01
		}
	}
</script>

<style scoped>
</style>

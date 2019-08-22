<template>
  <div class="hello">
		{{hello}}
		<p>在看完一些视频之后打算自己总结一下VUE的一些知识点和一些常用功能,以下为教程：</p>
		<p>如果首次接触vue并且没有用过node.js同学：请看本项目带的node.js的教程。</p>
		<p>学习vue基本内容请看本项目的README.md</p>
		<div class="mainBody">
			<!-- <router-link to="/bind" >bind(指令)</router-link> -->
			<ToLink toLink="/bind" linkName="bind(指令)"></ToLink>
		</div>
		<input type="button" value="跳转" @click="toHome"/>
  </div>
</template>

<script>
	import ToLink from '@/components/common/RouterLink.vue'
	
export default {
	
	data(){
		return {
				hello:'hello world'
		};
	},components: {
		ToLink
	},
	methods:{
		toHome(){
			this.$router.push("/bind")
		}
	}
}
</script>

<style scoped>
	
	*{
		margin: 0;
		padding: 0;
		border: 0;
	}
	
	.mainBody{
		position: absolute;
		left: 30%;
		top: 25%;
		width: 200px;
	}
	
</style>

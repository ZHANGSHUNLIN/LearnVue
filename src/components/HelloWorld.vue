<template>
  <div class="hello">
		{{hello}}
		<p>在看完一些视频之后打算自己总结一下VUE的一些知识点和一些常用功能,以下为教程：</p>
		<p>如果首次接触vue并且没有用过node.js同学：请看下面的安装node.js的教程。</p>
		<a href="#">点击这里查看安装node.js的教程</a>
		<p></p>
  </div>
</template>

<script>
export default {
	data(){
		return {
				hello:'hello world'
		};
	}
}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		border: 0;
	}
</style>

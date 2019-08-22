<template>
	<div>
		<p>在之前的案例中我们只实现了，一些简单的显示赋值操作，如果我们想给class赋值该怎么写呢？</p>
		<p>这就用到了，v-bind:class="",指令在指令中v-bind:【要绑定的指令】(可以简写为:class)即可</p>
		<hr />
		<h3>绑定Class</h3>
		<p>
			<span style="color: #008000;font-size: 21px;font-family: 仿宋;font-weight: 100px;">假如</span>
			我们有两个class，第一份class会吧字体变成红色大小是30px，第二个会把字体变成绿色大小是8px
		</p>
		<ul>
			<li>class="reds" 变红</li>
			<li>class="greens" 变绿</li>
			<li><span v-bind:class="cheoseClass">我是实验对象</span></li>
		</ul>
		<input type="text" v-model="cheoseClass" placeholder="请选择" />
		<hr />
		<h3>绑定Style</h3>
		<p>我们可以通过上面的input来设置下面字体的style</p>
		<input type="text" v-model="setStyle" placeholder="设置style的属性">
		<p :style="setStyle">我是试验对象</p>
		<p>大家可以试一下改改实验对象的字体大小，如果使用font-size会发现没有效果，<span style="color: red;font-size: 35px;">注意：</span>在这里我们不能使用带-的属性我们需要把-去掉，把-后面的字母大写即可,例如：fontSize:25px;color:red;</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			cheoseClass: '',
			setStyle : ''
		};
	}
};
</script>

<style scoped>
.reds {
	color: red;
	font-size: 1.875rem;
}
.greens {
	color: green;
	font-size: 0.5rem;
}
</style>

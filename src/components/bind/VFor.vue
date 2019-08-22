<template>
	<div>
		<p class="twosTitle">
			1、渲染列表简单的
			<span style="color: #0000FF;">数组</span>
		</p>
		<ul>
			<!--:key="" 也可以是v-bind:key="" 用处是给以VUE提示，在值修改时简单分辨 -->
			<li>name,age,sex</li>
			<li v-for="item in h3ForArray" :key="item.name">{{ item.name }}=={{ item.age }}=={{ item.sex }}</li>
		</ul>
		<p class="twosTitle">
			2、渲染列表附带下标的
			<span style="color: #0000FF;">数组</span>
		</p>
		<ul>
			<!--:key="" 也可以是v-bind:key="" 用处是给以VUE提示，在值修改时简单分辨 -->
			<li>name,age,sex==数组的下标</li>
			<li v-for="(item, index) in h3ForArray" :key="item.name">{{ item.name }}=={{ item.age }}=={{ item.sex }}=={{ index }}</li>
		</ul>
		<p class="twosTitle">
			3、渲染列表简单的
			<span style="color: #0000FF;">JSON</span>
		</p>
		<ul>
			<li>value</li>
			<!--:key="" 也可以是v-bind:key="" 用处是给以VUE提示，在值修改时简单分辨 -->
			<li v-for="item in h3ForJson" :key="item">{{ item }}</li>
		</ul>
		<p class="twosTitle">
			4、渲染列表附带key的
			<span style="color: #0000FF;">JSON</span>
		</p>
		<ul>
			<li>value==key</li>
			<!--:key="" 也可以是v-bind:key="" 用处是给以VUE提示，在值修改时简单分辨 -->
			<li v-for="(item, key) in h3ForJson" :key="item">{{ item }}=={{ key }}</li>
		</ul>
		<p class="twosTitle">
			5、渲染列表附带key,和下标的
			<span style="color: #0000FF;">JSON</span>
		</p>
		<ul>
			<li>value==key==index</li>
			<!--:key="" 也可以是v-bind:key="" 用处是给以VUE提示，在值修改时简单分辨 -->
			<li v-for="(item, key, index) in h3ForJson" :key="item">{{ item }}=={{ key }}=={{ index }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			h3ForArray: [
				{
					name: '熊大',
					age: 3,
					sex: '男'
				},
				{
					name: '熊二',
					age: 2,
					sex: '男'
				},
				{
					name: '张三',
					age: 20,
					sex: '男'
				},
				{
					name: '李四',
					age: 22,
					sex: '女'
				}
			],
			h3ForJson: {
				name: '张三',
				age: 20,
				sex: '女'
			}
		};
	}
};
</script>

<style></style>

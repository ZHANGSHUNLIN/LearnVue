<template>
	<div>
		<p>v-model的出现是为了解决form表单标签绑定属性用的</p>
		<p>例如input标签select标签等等，和form表单有关的标签</p>
		<ul>
			<li>
				<p>
					按钮的value
					<span style="color: #0000FF;">简单绑定</span>
					了上面文本框的value，点击按钮弹出文本框的值
				</p>
				<input type="text" v-model="msg" value="" />
				<input type="button" v-model="msg" @click="valert" />
				<hr />
			</li>
			<li>
				<p>
					该文本框的值
					<span style="color: #0000FF;">简单绑定</span>
					了下拉框的值
				</p>
				<select name="" id="" v-model="selVal">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
				</select>
				<input type="text" v-model="selVal" title="该文本框的值绑定了下拉框的值" />
				<button @click="alertSelVal">弹出下拉框选中的值</button>
				<hr />
			</li>
			<li>
				<p>
					<span style="color: #0000FF;">联合绑定</span>
					，当文本框里的值改变了，但是按钮的值不会立刻变，只有在按下回车(enter)或者失去焦点(blur)时才会改变
				</p>
				<input type="text" v-model.lazy="lazyVal" value="" />
				<input type="button" v-model="lazyVal" />
				<hr />
			</li>
			<li>
				<p>
					<span style="color: #0000FF;">过滤绑定</span>，
					<span style="color: #0000FF;">第一个文本框</span>
					会显示所有类型的值，第
					<span style="color: #0000FF;">二个文本框</span>
					只会显示数字类型的值
				</p>
				<input type="text" v-model="numberVal">
				<input type="text" v-model.number="numberVal">
			</li>
			<li>
				<p>
					<span style="color: #0000FF;">过滤绑定</span>，
					会过滤掉空格
				</p>
				<input type="text" v-model="trimVal">
				<input type="text" v-model.trim ="trimVal">
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: '你好',
			selVal: 2,
			lazyVal: '你好',
			numberVal : '2',
			trimVal : 's d'
		};
	},
	methods: {
		valert() {
			alert(this.msg);
		},
		alertSelVal() {
			alert(this.selVal);
		}
	}
};
</script>

<style scoped></style>

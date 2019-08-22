<template>
	<div>
		<div @click="enter($event)">
			<button>按钮1</button>
			<button>按钮2</button>
		</div>
		<img :src="url" style="width:100px;height: 200px;" alt="123" />

		<p>自定义value事件</p>
		<button @click="add()">+</button>
		<button @click="del()">-</button>
		{{bindValue}}
		<span v-zs="bindValue">显示就不对</span>
		<br/>
		{{str01.split('').reverse().join("")}}
		
		{{name}}
		
		
	</div>
</template>

<script>
import url from '@/assets/logo.png'; //	@/等于 ../

export default  {
	 data(){
		return {
			url,
			bindValue:100,
			str01:'qwe'
		}
	},methods:{
		enter(e){
			console.log(e,e.target)
		},
		add(){
			this.bindValue++;
		},del(){
			this.bindValue--;
		}
	},directives:{
		zs : {
			bind:function(el,bindings){
				if(bindings.value > 0){
					//el.setAttribute('style','dispaly:block;');
					el.style.display = 'block';
				}else{
					//el.style.display = 'none';
					console.log("隐藏")
					el.setAttribute('style','dispaly:none;');
				}
				console.log(el,bindings)
			},update:function(el,bindings){
				if(bindings.value > 0){
					el.style.display = 'block';
				}else{
					el.style.display = 'none';
				}
				
				
				console.log(el,bindings);
			},unbind:function(el,bindings){

			}
		}
	},
	computed: {
		name() {
			return this.str01.split('').reverse().join("");
		}
	},
}
</script>

<style></style>

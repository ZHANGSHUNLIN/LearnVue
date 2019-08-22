<template>
	<div>
		{{ msg }}
		<ToHome toLink="/index" linkName="首页"></ToHome>
		<div class="mainBody">
			<ul>
				<li>
					<h2>v-if 条件渲染指令</h2>
					<button @click="showVIf">{{ vIfText }}</button>
					<div v-show="isShowVIf" class="codeMain"><VIf></VIf></div>
				</li>

				<li>
					<h2>v-show 条件渲染指令</h2>
					<button @click="showVShow">{{ vShowText }}</button>
					<div v-show="isShowVShow" class="codeMain"><VShow></VShow></div>
				</li>
				<li>
					<h2>v-for 列表渲染指令</h2>
					<button @click="showVFor">{{ vForText }}</button>
					<div v-show="isShowVFor" class="codeMain"><VFor></VFor></div>
				</li>
				<li>
					<h2>v-model 表单指令</h2>
					<button @click="showVModel">{{ vModelText }}</button>
					<div v-show="isShowVModel" class="codeMain"><VModel></VModel></div>
				</li>
				<li>
					<h2>v-bind 属性绑定</h2>
					<button @click="showVBind">{{ vBindText }}</button>
					<div v-show="isShowVBind" class="codeMain"><VBind></VBind></div>
				</li>
				<li>
					<h2>v-[随便起] 自定义指令</h2>
					<button @click="showVAnother">{{ vAnotherText }}</button>
					<div v-show="isShowVAnthder" class="codeMain"><VAnother></VAnother></div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import ToHome from '@/components/common/RouterLink.vue';
import VFor from './VFor.vue';
import VModel from './VModel.vue';
import VIf from './VIf.vue';
import VShow from './VShow.vue';
import VBind from './VBind.vue';
import VAnother from './VAnother.vue';
export default {
	data() {
		return {
			msg: 'helloWorld',
			isShowVFor: false,
			vForText: '点击查看详情',
			isShowVModel: false,
			vModelText: '点击查看详情',
			isShowVIf: false,
			vIfText: '点击查看详情',
			isShowVShow: false,
			vShowText: '点击查看详情',
			isShowVBind: false,
			vBindText: '点击查看详情',
			isShowVAnthder: false,
			vAnotherText: '点击查看详情'
		};
	},
	components: {
		ToHome,
		VFor,
		VModel,
		VIf,
		VShow,
		VBind,
		VAnother
	},
	methods: {
		showVFor() {
			this.isShowVFor = !this.isShowVFor;
			if (this.isShowVFor) {
				this.vForText = '点击关闭详情';
			} else {
				this.vForText = '点击查看详情';
			}
		},
		showVModel() {
			this.isShowVModel = !this.isShowVModel;
			if (this.isShowVModel) {
				this.vModelText = '点击关闭详情';
			} else {
				this.vModelText = '点击查看详情';
			}
		},
		showVIf() {
			this.isShowVIf = !this.isShowVIf;
			if (this.isShowVIf) {
				this.vIfText = '点击关闭详情';
			} else {
				this.vIfText = '点击查看详情';
			}
		},
		showVShow() {
			this.isShowVShow = !this.isShowVShow;
			if (this.isShowVShow) {
				this.vShowText = '点击关闭详情';
			} else {
				this.vShowText = '点击查看详情';
			}
		},showVBind() {
		this.isShowVBind = !this.isShowVBind;
		if (this.isShowVBind) {
			this.vBindText = '点击关闭详情';
		} else {
			this.vBindText = '点击查看详情';
		}
	},
	showVAnother() {
		this.isShowVAnthder = !this.isShowVAnthder;
		if (this.isShowVAnthder) {
			this.vAthderText = '点击关闭详情';
		} else {
			this.vAthderText = '点击查看详情';
		}
	}
	}
	
};
</script>

<style scoped>
.mainBody {
	margin-left: 10%;
	margin-top: 5%;
}
.codeMain {
	margin-left: 20%;
	padding: 10px;
	width: 25rem;
	height: auto;
	border: 2px solid #0000ee;
}
.twosTitle {
	color: red;
	font-size: 20px;
}
</style>

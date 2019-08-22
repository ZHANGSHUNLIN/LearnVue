import Vue from 'vue'
import App from './App.vue'

/* 路由引入 */
import VueRouter from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import Bind from '@/components/bind/Bind.vue';
Vue.use(VueRouter);

/* 配置路由(路由字典) */
const routes = [{
		path: '/index',
		component: HelloWorld
	}, {
		path: '/bind',
		component: Bind
	},
	{
		path: '*',
		redirect: '/index'
	} /*默认跳转路由*/
]

const router = new VueRouter({
	routes // （缩写）相当于 routes: routes
})


Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueTouch from 'vue-touch-next';
import login from './view/login.vue';
import register from './view/register.vue';
import retrieve from './view/retrieve.vue';
import dao from '../../dao/login/dao_test.js';
//import style from './style.css';

Vue.use(VueRouter)
Vue.use(VueTouch)

//临时存储模块共享dao
window.dao = dao;

const Bar = { template: '<div>bar</div>' }

const router = new VueRouter({
	routes: [
		{ path: '/', component: login }, 
		{ path: '/reg', component: register },
		{ path: '/back', component: retrieve }
	]
})

const app = new Vue({
	router
}).$mount('#login');


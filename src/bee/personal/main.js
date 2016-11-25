import Vue from 'vue';
import VueRouter from 'vue-router';
import VueTouch from 'vue-touch-next';
import personal from './view/personal.vue';
import template from './view/template.vue';
import usercase from './view/usercase.vue';
import dao from '../../dao/personal/dao_test.js';
import style from './style.css';

Vue.use(VueRouter)
Vue.use(VueTouch)

//临时存储模块共享dao
window.dao = dao;

const router = new VueRouter({
	routes: [
		{ path: '/', component: personal },
		{ path: '/temp', component: template },
		{ path: '/case', component: usercase }
	]
})

const app = new Vue({
	router
}).$mount('#personal');


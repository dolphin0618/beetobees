import Vue from 'vue';
import VueRouter from 'vue-router';
import VueTouch from 'vue-touch-next';
import personal from './view/personal.vue';
import dao from '../../dao/personal/dao_test.js';
import style from './style.css';

Vue.use(VueRouter)
Vue.use(VueTouch)

//临时存储模块共享dao
window.dao = dao;

const router = new VueRouter({
	routes: [
		{ path: '/', component: personal }
	]
})

const app = new Vue({
	router
}).$mount('#personal');


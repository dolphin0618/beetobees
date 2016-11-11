import vue from 'vue';
import VueRouter from 'vue-router';
import login from '../../view/login/login.vue';
import register from '../../view/login/register.vue';
import retrieve from '../../view/login/retrieve.vue';
//import style from './style.css';

Vue.use(VueRouter)

console.log(vue);

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
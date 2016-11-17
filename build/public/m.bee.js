/*******************************
	平台移动端公用
	@author:shanghang
	@date:2016-11-1
*******************************/
'use strict'
/***********响应式计算计算**************/
!function(e,t){
	var mresize=function(){
		var view_width = document.getElementsByTagName('html')[0].getBoundingClientRect().width;
		var n = Math.min(1200,view_width);
		return n?void (t.documentElement.style.fontSize=n/15+"px"):!1;
	};
	mresize();
	e.addEventListener("resize",mresize,!1);
	e.addEventListener("DOMContentLoaded",mresize,!1);
	e.addEventListener("load",mresize,!1);
}(window,document);
var hastouch = "ontouchstart" in window?true:false;
var touchstart = hastouch?"touchstart":"mousedown";
var touchmove = hastouch?"touchmove":"mousemove";
var touchend = hastouch?"touchend":"mouseup";
//vue修改文本插值的定界符
//Vue.config.delimiters = ['[[', ']]'];
//开启错误提示
//Vue.config.debug = true;
window.Bee = {};
;(function(bee){
	var credentials = 'include';
	
	bee.getjson = function(url, fn){
		fetch(url, {credentials: credentials}).then(function(response) {
	    	return response.json()
		}).then(function(json) {
		    fn && fn();
		}).catch(function(ex) {
		    console.log('parsing failed', ex)
		    alert('err');
		})
	};
	
	bee.subform = function(url, form, fn){
		fetch(url, {
			method: 'POST',
			body: new FormData(form)
		}).then(function(response) {
	    	return response.json()
		}).then(function(json) {
		    fn && fn();
		})
	};
	
	bee.post = function(url, param, fn){
		fetch(url, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(param)
		}).then(function(response) {
	    	return response.json()
		}).then(function(json) {
		    fn && fn();
		})
	}
})(Bee);


//html
//fetch('/users.html')
//.then(function(response) {
//  return response.text()
//}).then(function(body) {
//  document.body.innerHTML = body
//})
				
//form
//var form = document.querySelector('form')
//



//post
//fetch('/users', {
//method: 'POST',
//headers: {
//  'Content-Type': 'application/json'
//},
//body: JSON.stringify({
//  name: 'Hubot',
//  login: 'hubot',
//})
//})

//上传
//var input = document.querySelector('input[type="file"]')
//
//var data = new FormData()
//data.append('file', input.files[0])
//data.append('user', 'hubot')
//
//fetch('/avatars', {
//method: 'POST',
//body: data
//})

//function checkStatus(response) {
//if (response.status >= 200 && response.status < 300) {
//  return response
//} else {
//  var error = new Error(response.statusText)
//  error.response = response
//  throw error
//}
//}
//
//function parseJSON(response) {
//return response.json()
//}

//		console.log(response.headers.get('Content-Type'))
//console.log(response.headers.get('Date'))
//console.log(response.status)
//console.log(response.statusText)
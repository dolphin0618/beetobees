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
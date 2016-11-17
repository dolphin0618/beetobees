//
//登录
var dao = {};
dao.login = function(form, fn){
	fn && fn(false);
}

//获取验证码(找回密码)
dao.getCode = function(param, fn){
	console.log(param);
	fn(123);
}

//(找回密码)
dao.savepwd = function(form, fn){
	fn && fn(true);
}

//注册
dao.register = function(form, fn){
	fn && fn(true);
}

module.exports = dao;
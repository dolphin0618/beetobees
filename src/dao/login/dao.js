//
//登录
var dao = {};
dao.login = function(form, fn){
	Bee.subform('../test.json', form, fn);
}
//获取验证码(找回密码)
dao.getCode = function(param, fn){
	bee.post('../test.json', param, fn);
}

//注册(找回密码)

//找回密码
dao.savepwd = function(form, fn){
	Bee.subform('../test.json', form, fn);
}

//注册
dao.register = function(form, fn){
	Bee.subform('../test.json', form, fn);
}


module.exports = dao;
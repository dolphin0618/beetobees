<template>
	<section class="loginbox" >
		<div class="logo"></div>
		<form action="" method="post" id="loginform">
			<div class="f-item" v-for="item in formList">
				<input class="ipt" v-model="item.val" type="email" name="username" :placeholder="item.placeholder" v-if="item.type == 'email'" />
				<input class="ipt" v-model="item.val" type="password" name="pwdword" :placeholder="item.placeholder" v-if="item.type == 'password'"/>
			</div>
			<p class="msg">{{errmsg}}</p>
			<div class="cter">
				<a href="javascript:;" class="btn" v-touch:tap="login">登 录</a>
			</div>
		</form>
		<div class="tools">
			<router-link :to="{ path: 'back', query: {username:formList[0].val}}" class="get-pwd">忘记密码</router-link>
			<router-link to="/reg" class="reg-btn">立即注册</router-link>
		</div>
		<div class="other" style="display: none;">
			<a href="javascript:;" class="wx"></a>
			<a href="javascript:;" class="qq"></a>
			<a href="javascript:;" class="wb"></a>
		</div>
	</section>
</template>

<script type="text/javascript">
	module.exports = {
		data : function(){
			return {
				formList : [
					{val:'', type:'email', placeholder:'手机号/邮箱'},
					{val:'', type:'password', placeholder:'密码'}
				],
				errmsg : ''
			}
		},
		
		methods: {
			login(event) {
				var len = this.formList.length;
				for(var i=0; i<len; i++){
					var item = this.formList[i];
					if(item.val.trim() == ''){
						this.errmsg = item.placeholder+'不能为空';
						return false;
					}else if(item.type === 'email' && !/(\w+@[a-z0-9\-]+(\.[a-z]{2,6}){1,2})|(^1[34578]{1}[0-9]{9}$)/.test(item.val)){
 						this.errmsg = '请输入正确的手机号/登录邮箱';
 						return false;
					}else if(item.type === 'password'){
						var length = item.val.length;
						if(length<6 || length>20){
							this.errmsg = '建议密码使用6-20个字母或者数字组合';
							return false;
						};
					}
				};
				this.errmsg = '';
				var _this = this;
				var form = document.getElementById('loginform');
				dao.login(form, function(bln){
					if(bln){
						_this.errmsg = '登录成功';
						_this.$router.push('reg');
					}else{
						_this.errmsg = '登录失败';
					}
				});
			}
		}
	}
</script>

<style scoped>
.ipt::-webkit-input-placeholder {color: #fff; } 
.loginbox{position: absolute; top: 0; left: 0; bottom: 0; right: 0;background:url(../images/lg-bg.jpg) no-repeat;background-size:100%;}
.loginbox .logo{width:6.6rem;height:2.16rem;background:url(../icon/logo.png) no-repeat;background-size:100%;margin:5.2rem auto;margin-bottom:3.2rem;}
.loginbox .f-item{text-align: center;padding-top:0.8rem;}
.loginbox .ipt{border-color: #fff;color:#fff;}
.msg{text-align: center;color:#FF6600;padding: 0.25rem 0;height:0.8rem;}
.cter{text-align: center;}
.tools{padding: 0.4rem 0.8rem;}
.tools .get-pwd{color:#fff;float:left;}
.tools .reg-btn{color:#fff;background:rgba(0,0,0,0.2);border-radius:4px;float:right;padding: 2px 5px;}
.other{position: absolute; bottom: 1rem; width: 6.6rem; display: -webkit-box; left: 50%; transform: translateX(-50%);}
.other a{background:url(../icon/wx.png) no-repeat;background-size:100%;width:1.44rem;height:1.44rem;-webkit-box-flex: 1; display: block; margin: 0 0.4rem;}
.other a.wx{}
.other a.qq{background-image:url(../icon/qq.png);}
.other a.wb{background-image:url(../icon/wb.png);}
</style>
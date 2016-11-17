<template>
	<section class="re-box">
		<div class="step1" v-show="step === 1">
			<div class="head">
				<a class="back" v-touch:tap="back"><i></i></a>
				<span class="title">注册</span>
			</div>
			<div class="f-box">
				<div class="f-item">
					<input type="number" class="ipt tel" v-model="username" @input="vilidata" placeholder="请输入手机号"/>
					<div class="su-tel">+86</div>
				</div>
				<div class="f-item">
					<a href="javascript:;" class="btn" :class="{disable:disable}" v-touch:tap="next">注 册</a>
				</div>
			</div>
		</div>
		
		<div class="step2" v-show="step === 2">
			<div class="head">
				<a class="back" v-touch:tap="back"><i></i></a>
				<span class="title">注册</span>
			</div>
			<div class="f-box">
				<p class="desc">已向您的手机 {{username.toString().replace(/(\d{3})\d{4}(\d{4})/, "$1****$2")}} 发送一条验证码短信</p>
				<form action="" method="post" id="backform">
					<div class="f-item">
						<input type="number" class="ipt" v-model="code" name="code" placeholder="请输入手机验证码"/>
					</div>
					<div class="f-item">
						<input type="password" class="ipt" v-model="pwd" name="pwdword" placeholder="请输入密码（6-20位英文或数字）"/>
					</div>
					<div class="f-item">
						<a href="javascript:;" class="btn" v-show="!sending" v-touch:tap="sendcode">重新发送验证码</a>
						<a href="javascript:;" class="btn black disable" v-show="sending">{{time}}s</a>
					</div>
					<div class="f-item">
						<a href="javascript:;" class="btn" v-touch:tap="savepwd">确定</a>
					</div>
				</form>
			</div>
			<p class="msg" v-show="!!errmsg">{{errmsg}}</p>
		</div>
	</section>
</template>

<script type="text/javascript">
	module.exports = {
		data : function(){
			return {
				username : '',
				step : 1,
				disable : true,
				sending : false,
				time : 60,
				timer : null,
				code : '',
				pwd : '',
				errmsg : ''
			}
		},
		methods : {
			back : function(){
				this.$router.go(-1);
			},
			vilidata : function(){
				this.disable = !/^1[34578]{1}[0-9]{9}$/.test(this.username);
			},
			next : function(){
				if(this.disable)return false;
				if(this.username.toString().indexOf('@') != -1){
					this.step = 3;
					return false;
				}
				this.step = 2;
				//发送验证码
				this.sendcode();
			},
			sendcode : function(){
				this.sending = true;
				this.time = 59;
				var _this = this;
				clearInterval(this.timer);
				this.timer = setInterval(function(){
					_this.time--;
					if(_this.time <= 0){
						clearInterval(_this.timer);
						_this.sending = false;
					}
				}, 1000);
				//发送验证码请求
				dao.getCode({username:this.username}, function(res){
					console.log(res);
				});
			},
			savepwd : function(){
				var len = this.pwd.length;
				if(this.code.toString().trim() == ''){
					this.$alert('验证码没有填哦！');
					return false;
				}else if(this.code.toString().length != 5){
					this.$alert('验证码有误！');
					return false;
				}else if(len<6 || len>20){
					this.$alert('建议密码使用6-20个字母或者数字组合');
					return false;
				};
				
				var form = document.getElementById('backform');
				console.log(form);
				
				var _this = this;
				dao.register(form, function(bln){
					if(bln){
						_this.$router.push('/');
					}
				});
			},
			$alert : function(msg){
				this.errmsg = msg;
				var _this = this;
				setTimeout(function(){
					_this.errmsg = '';
				}, 2000);
			}
		}
	}
</script>

<style scoped>
.re-box{}
.head{line-height: 1.88rem; color: #333; font-size: 0.68rem; text-align: center;box-shadow: 0 0 6px 0px #ccc;position: relative;}
.head .back{height: 100%; position: absolute; left: 0; top: 0; line-height: 1.88rem; width: 2rem; padding-right: 1rem;}
.head .back i{background:url(../icon/back.png);background-size:100%;width:0.4rem;height:0.6rem;display:inline-block;}
.head .title{}
.f-box{padding-top:0.5rem;}
.f-box .desc{color:#333;font-size: 0.52rem;text-indent: 1em;}
.f-item{text-align: center;padding-top:0.8rem;position:relative;}
.ipt.tel{padding-left:3rem;width:10.12rem;}
.su-tel{width:2rem;position:absolute;bottom:0;text-align: center;color:#12a5f8;left: 0.8rem; line-height: 1.4rem; border-right: 1px solid #ccc;}
.msg{position: absolute;background:#FF6600;line-height:1.2rem;top: 0;width:100%;text-align: center;color: #fff;}
</style>
<template>
	<section class="loginbox" >
		<div class="logo"></div>
		<form action="" method="post">
			<div class="f-item">
				<input type="email" class="ipt" placeholder="手机号/邮箱"/>
			</div>
			<div class="f-item">
				<input type="password" class="ipt" placeholder="密码"/>
			</div>
			<p class="msg">错误提示</p>
			<div class="cter">
				<a href="javascript:;" class="btn">登 录</a>
			</div>
		</form>
		<div class="tools">
			<a href="/bar" class="get-pwd">忘记密码?</a>
			<a href="" class="reg-btn">立即注册</a>
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
				greeting : 'holle'
			}
		}
	}
</script>

<style scoped>
.ipt::-webkit-input-placeholder {color: #fff; } 
.loginbox{position: absolute; top: 0; left: 0; bottom: 0; right: 0;background:url(./images/lg-bg.jpg) no-repeat;background-size:100%;}
.loginbox .logo{width:6.6rem;height:2.16rem;background:url(./icon/logo.png) no-repeat;background-size:100%;margin:5.2rem auto;margin-bottom:3.2rem;}
.loginbox .f-item{text-align: center;padding-top:0.8rem;}
.loginbox .ipt{border-color: #fff;color:#fff;}
.msg{text-align: center;color:#FF6600;padding: 0.25rem 0;}
.cter{text-align: center;}
.tools{padding: 0.4rem 0.8rem;}
.tools .get-pwd{color:#fff;float:left;}
.tools .reg-btn{color:#fff;background:rgba(0,0,0,0.2);border-radius:4px;float:right;padding: 2px 5px;}
.other{position: absolute; bottom: 1rem; width: 6.6rem; display: -webkit-box; left: 50%; transform: translateX(-50%);}
.other a{background:url(./icon/wx.png) no-repeat;background-size:100%;width:1.44rem;height:1.44rem;-webkit-box-flex: 1; display: block; margin: 0 0.4rem;}
.other a.wx{}
.other a.qq{background-image:url(./icon/qq.png);}
.other a.wb{background-image:url(./icon/wb.png);}
</style>
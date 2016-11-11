<template>
	<section class="re-box">
		<div class="step1">
			<div class="head">
				<a class="back"><i></i></a>
				<span class="title">注册</span>
			</div>
			<div class="f-box">
				<div class="f-item">
					<input type="number" class="ipt tel" placeholder="请输入手机号"/>
					<div class="su-tel">+86</div>
				</div>
				<div class="f-item">
					<a href="javascript:;" class="btn disable">注 册</a>
				</div>
			</div>
			<p class="msg" style="display: none;">错误提示</p>
		</div>
		
		<div class="step2">
			<div class="head">
				<a class="back"><i></i></a>
				<span class="title">注册</span>
			</div>
			<div class="f-box">
				<p class="desc">已向您的手机 185****2134发送一条验证码短信</p>
				<div class="f-item">
					<input type="number" class="ipt" placeholder="请输入手机验证码"/>
				</div>
				<div class="f-item">
					<input type="password" class="ipt" placeholder="请输入密码（6-20位英文或数字）"/>
				</div>
				<div class="f-item">
					<a href="javascript:;" class="btn">重新发送验证码</a>
					<a href="javascript:;" class="btn black disable">59s</a>
				</div>
				<div class="f-item">
					<a href="javascript:;" class="btn">确定</a>
				</div>
			</div>
			<p class="msg" style="display: none;">错误提示</p>
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
.re-box{}
.head{line-height: 1.88rem; color: #333; font-size: 0.68rem; text-align: center;box-shadow: 0 0 6px 0px #ccc;position: relative;}
.head .back{height: 100%; position: absolute; left: 0; top: 0; line-height: 1.88rem; width: 2rem; padding-right: 1rem;}
.head .back i{background:url(../../icon/back.png);background-size:100%;width:0.4rem;height:0.6rem;display:inline-block;}
.head .title{}
.f-box{padding-top:0.5rem;}
.f-box .desc{color:#333;font-size: 0.52rem;text-indent: 1em;}
.f-item{text-align: center;padding-top:0.8rem;position:relative;}
.ipt.tel{padding-left:3rem;width:10.12rem;}
.su-tel{width:2rem;position:absolute;bottom:0;text-align: center;color:#12a5f8;left: 0.8rem; line-height: 1.4rem; border-right: 1px solid #ccc;}
.msg{position: absolute;background:#FF6600;line-height:1.2rem;top: 0;width:100%;text-align: center;color: #fff;}
</style>
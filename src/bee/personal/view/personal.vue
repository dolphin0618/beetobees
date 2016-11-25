<template>
	<section class="mainbox">
		<div class="scroll-box">
			<div class="ulogin" style="display: none;">
				<div class="head">
					<a class="avatorbox" href="./login.html">
						<div class="avator-bg"></div>
						<h6 class="username">请点击登录</h6>
					</a>
				</div>
				
				<div class="itembox">
					<div class="item">
						<i class="icon share"></i>
						<div class="conbox">
							<div class="linebox">
								<span>分享</span>
								<i class="rt"></i>
							</div>
						</div>
					</div>
					<div class="item">
						<i class="icon help"></i>
						<div class="conbox">
							<div class="linebox">
								<span>帮助中心</span>
								<i class="rt"></i>
							</div>
						</div>
					</div>
					<div class="item">
						<i class="icon email"></i>
						<div class="conbox">
							<div class="linebox">
								<span>产品反馈</span>
								<i class="rt"></i>
							</div>
						</div>
					</div>
				</div>
				
				<div class="itembox">
					<div class="item">
						<i class="icon heart"></i>
						<div class="conbox">
							<div class="linebox">
								<span>关注我们</span>
								<i class="rt"></i>
							</div>
						</div>
					</div>
					<div class="item">
						<i class="icon team"></i>
						<div class="conbox">
							<div class="linebox">
								<span>商务合作</span>
								<i class="rt"></i>
							</div>
						</div>
					</div>
				</div>
				
				<div class="aboutbox">
					<a href="tel:010-61920589" class="linkme">
						<img src="../icon/call.png" alt="" />
						<p class="name">客服热线</p>
					</a>
					<a href="http://qm.qq.com/cgi-bin/qm/qr?k=-G9n5DMvgQl7vh0omkRCI2aR7h6yvNgs" target="_blank" class="linkme">
						<img src="../icon/qq.png" alt="" />
						<p class="name">加入QQ群</p>
					</a>
					<a class="linkme" v-touch:tap="showQrcode">
						<img src="../icon/wx.png" alt="" />
						<p class="name">微信公众号</p>
					</a>
				</div>
				<beemodal :show="sync">
					<div class="dialog-body" slot="body">
						<img src="http://static.beetobees.com/bee/common/photo/beeQrcode.jpg" class="qrcodeimg"/>
						<p class="ctr">长按识别二维码</p>
					</div>
				</beemodal>
			</div>
			
			<div class="login">
				<div class="head">
					<a class="avatorbox">
						<div class="avator">
							<img src="../../login/icon/close.png"/>
						</div>
						<i class="vip v2"></i>
					</a>
					<h6 class="username">13838384388</h6>
					<a class="set"></a>
				</div>
				
				<div class="list-box">
					<div class="title">
						<span>我的项目</span>
						<span class="count">15/200</span>
					</div>
					
					<ul class="item-box clearfix">
						<li class="item">
							<div class="img-box">
								<img src="http://static.123rf.com.cn/public/images/corp/vector/20160310/corp-portrait-image.jpg" alt="" />
							</div>
							<h6 class="name">天天消消乐</h6>
							<div class="ctr-box">
								<a href="" class="ctr-btn">
									<i class="ctrset"></i>
									<span>项目设置</span>
								</a>
								<a href="" class="ctr-btn">
									<i class="count"></i>
									<span>查看数据</span>
								</a>
							</div>
						</li>
						<li class="item">
							<div class="img-box">
								<img src="http://static.123rf.com.cn/public/images/corp/vector/20160310/corp-portrait-image.jpg" alt="" />
							</div>
							<h6 class="name">天天消消乐</h6>
							<div class="ctr-box">
								<a href="" class="ctr-btn">
									<i class="ctrset"></i>
									<span>项目设置</span>
								</a>
								<a href="" class="ctr-btn">
									<i class="count"></i>
									<span>查看数据</span>
								</a>
							</div>
						</li>
						<li class="item">
							<div class="img-box">
								<img src="http://static.123rf.com.cn/public/images/corp/vector/20160310/corp-portrait-image.jpg" alt="" />
							</div>
							<h6 class="name">天天消消乐</h6>
							<div class="ctr-box">
								<a href="" class="ctr-btn">
									<i class="ctrset"></i>
									<span>项目设置</span>
								</a>
								<a href="" class="ctr-btn">
									<i class="count"></i>
									<span>查看数据</span>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		<div class="layerfn" style="display: none;">
			<div class="windowfn">
				<div class="btns-box">
					<div class="item">
						<i href="" class="edit"></i>
						<span class="name">编辑</span>
					</div>
					<div class="item">
						<i href="" class="copy"></i>
						<span class="name">复制</span>
					</div>
					<div class="item">
						<i href="" class="clear"></i>
						<span class="name">清空数据</span>
					</div>
					<div class="item">
						<i href="" class="quit"></i>
						<span class="name">删除</span>
					</div>
					<div class="item">
						<i href="" class="view"></i>
						<span class="name">预览</span>
					</div>
				</div>
				<a href="" class="close"><i></i></a>
			</div>
		</div>
	</section>
</template>

<script type="text/javascript">
	import beemodal from '../../../components/modal.vue';
	module.exports = {
		data : function(){
			return {
				errmsg : '',
				sync : {showCode : false}
			}
		},
		methods: {
			showQrcode : function(){
				this.sync.showCode = true;
			}
		},
		components : {
			beemodal
		}
	}
</script>

<style scoped>
.mainbox{}
.head{background:url(../images/head-bg.png) no-repeat;background-size:100%;height:4.8rem;padding-top:2rem;position:relative;}
.head .set{width: 0.96rem;height: 0.96rem;background:url(../icon/setbtn.png);background-size:100%;position: absolute;top: 0.6rem;right:0.6rem;}
.avatorbox{width:3.1rem;margin:0rem auto;display: block;}
.avatorbox .vip{}
.avatorbox .vip.v1{}
.avator-bg,.avator{width:100%;height:3.1rem;border-radius:50%;overflow: hidden;background:url(../icon/logo.png) no-repeat;background-size:100%;}
.avator{}
.avator img{width:100%;height: 100%;}
.username{text-align: center;color: #fff;line-height:1.56rem;font-size:0.6rem;font-weight:normal;}
.itembox{margin-top:0.6rem;background:#fff;box-shadow:0 0 4px 0 #eee;}
.item{line-height:1.8rem;position:relative;font-size: 0.56rem;color:#333;}
.item:last-child .conbox .linebox{border:none;}
.icon{width:0.72rem;height:0.72rem;background:#ff0000;position: absolute;left:0.52rem;top: 0.52rem;}
.icon.share{background:url(../icon/share.png) no-repeat;background-size:100%;}
.icon.help{background:url(../icon/help.png) no-repeat;background-size:100%;}
.icon.email{background:url(../icon/email.png) no-repeat;background-size:100%;}
.icon.heart{background:url(../icon/heart.png) no-repeat;background-size:100%;}
.icon.team{background:url(../icon/team.png) no-repeat;background-size:100%;}
.conbox{padding-left:2rem;}
.conbox .linebox{border-bottom: 1px solid #eee;}
.conbox span{}
.conbox .rt{position:absolute;width:0.32rem;height:0.56rem;right:0.6rem;top:0.6rem;background:url(../icon/rt.png) no-repeat;background-size:100%;}
.aboutbox{width:10.36rem;height:3.4rem;margin:0 auto;margin-top:2.3rem;border-radius:68px;background:#fff;padding-top:0.8rem;padding-left:1.4rem;}
.aboutbox .linkme{float:left;width:2.2rem;margin-right:1.2rem;text-align: center;}
.aboutbox .linkme img{width:1.76rem;height:1.76rem;}
.aboutbox .linkme .name{text-align: center;line-height:1.24rem;color:#333;font-size:0.44rem;}
.list-box{margin-top: 0.32rem;background:#fff;border-top:1px solid #eee;}
.list-box .title{padding:0 0.6rem;padding-top:0.44rem;line-height:0.6rem;}
.list-box .title span{color:#3e4247;font-size: 0.6rem;}
.list-box .title .count{float: right;font-size: .44rem;color:#44b2ff;}
.item-box{}
.item-box .item{margin-top:0.6rem;margin-left:0.6rem;float: left;width: 6.56rem;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px 0 #ccc;}
.item-box .img-box{height:6.56rem;overflow: hidden;}
.item-box .img-box img{width:100%;}
.item-box .name{font-size: 0.52rem;color:#5b616a;line-height: 1.16rem;border-bottom:1px solid #d6dde1;font-weight:normal;padding-left:0.4rem;}
.item-box .ctr-box{line-height: 1.3rem;font-size: 0.44rem;text-align: center;display:-webkit-box;}
.item-box .ctr-btn{-webkit-box-flex:1;display: block;color:#666;}
.item-box .ctr-btn:last-child{border-left:1px solid #d6dde1;}
.item-box .ctr-btn i{background:url(../icon/e-set.png) no-repeat;background-size:100%;display:inline-block;width: 0.8rem;height: 0.8rem;vertical-align:middle;}
.item-box .ctr-btn i.ctrset{background-image:url(../icon/e-set.png);}
.item-box .ctr-btn i.count{background-image:url(../icon/e-count.png);}
.item-box .ctr-btn span{vertical-align:middle;}
</style>
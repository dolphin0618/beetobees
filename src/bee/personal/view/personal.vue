<template>
	<section class="mainbox">
		<div class="head">
			<div class="avatorbox">
				<div class="avator">
					<img src="" alt="" />
				</div>
				<h6 class="username">请点击登录</h6>
			</div>
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
				<i class="icon share"></i>
				<div class="conbox">
					<div class="linebox">
						<span>分享</span>
						<i class="rt"></i>
					</div>
				</div>
			</div>
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
		</div>
		
		<div class="aboutbox">
			<a href="" class="linkme">
				<img src="" alt="" />
				<p class="name">客服热线</p>
			</a>
			<a href="" class="linkme">
				<img src="" alt="" />
				<p class="name">客服热线</p>
			</a>
			<a href="" class="linkme">
				<img src="" alt="" />
				<p class="name">客服热线</p>
			</a>
		</div>
	</section>
</template>

<script type="text/javascript">
	module.exports = {
		data : function(){
			return {
				errmsg : ''
			}
		},
		methods: {
			login(event) {
				var len = 66;
			}
		}
	}
</script>

<style scoped>
.mainbox{position: absolute; top: 0; left: 0; bottom: 0; right: 0;background:#eee;}
.head{background:#00A6FF;height:4rem;padding-top:2rem;}
.avatorbox{width:2rem;margin:0rem auto;}
.avator{width: 2rem;height:2rem;border-radius:50%;overflow: hidden;}
.avator img{width:100%;height: 100%;}
.username{text-align: center;color: #fff;line-height:1rem;}
.itembox{margin-top:0.5rem;background:#fff;box-shadow:0 0 4px 0 #eee;}
.item{line-height:1rem;position:relative;}
.item:last-child .conbox .linebox{border:none;}
.icon{width:0.5rem;height:0.5rem;background:#ff0000;position: absolute;}
.conbox{padding-left:2rem;}
.conbox .linebox{border-bottom: 1px solid #eee;}
.conbox span{}
.conbox .rt{position:absolute;width:0.2rem;height:0.2rem;right:0;background:#000;}
.aboutbox{width:12rem;height:4rem;margin:0 auto;margin-top:3rem;border-radius:68px;background:#fff;padding-top:1rem;}
.aboutbox .linkme{float:left;width:2rem;margin:0 1rem;}
.aboutbox .linkme img{width:2rem;height: 2rem;}
.aboutbox .linkme .name{text-align: center;}
</style>
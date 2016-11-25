<template>
	<section class="mainbox">		
		<div class="temp-box">
			<div class="head-box">
				<div class="head">
					<span class="title">用户案例</span>
				</div>
				
				<div class="filter-box">
					<div class="item" @click="tab(1)" :class="{active : tabId === 1}">编辑推荐</div>
					<div class="item" @click="tab(2)" :class="{active : tabId === 2}">每周排行</div>
					<div class="item" @click="tab(3)" :class="{active : tabId === 3}">每月排行</div>
				</div>
			</div>
		</div>
			
			<div class="scroll-box list-box">
				<div class="type-box clearfix">
					<div class="type-name">
						<i class="type type1"></i>
						<span>{{typeName}}</span>
					</div>
					<a @click="fiterShow(true)" class="type-btn">
						<i class="fter"></i>
						<span>选择分类</span>
					</a>
				</div>
				
				<ul class="list clearfix">
					<li class="item">
						<div class="img-box">
							<img src="http://static.123rf.com.cn/public/images/corp/vector/20160310/corp-portrait-image.jpg"/>
							<i class="new"></i>
						</div>
						<p class="name">助力助力助</p>
					</li>
					<li class="item">
						<div class="img-box">
							<img src="http://static.123rf.com.cn/public/images/corp/vector/20160310/corp-portrait-image.jpg"/>
							<i class="new"></i>
						</div>
						<p class="name">助力助力助</p>
					</li>
					<li class="item">
						<div class="img-box">
							<img src="http://static.123rf.com.cn/public/images/corp/vector/20160310/corp-portrait-image.jpg"/>
							<i class="new"></i>
						</div>
						<p class="name">助力助力助</p>
					</li>
					<li class="item">
						<div class="img-box">
							<img src="http://static.123rf.com.cn/public/images/corp/vector/20160310/corp-portrait-image.jpg"/>
							<i class="new"></i>
						</div>
						<p class="name">助力助力助</p>
					</li>
				</ul>
			</div>
		</div>
		
		<div class="temp-box index" v-show="fiterOpen">
			<div class="head-box">
				<div class="head">
					<span class="title">案例筛选</span>
					<a class="back" @click="fiterShow(false)"><i></i></a>
				</div>
			</div>
			
			<div class="type-con">
				<ul class="type-item1 clearfix">
					<li class="type-item2 one type1" @click="typeTab(1)">
						<i class="type"></i>
						<p class="name">节日</p>
					</li>
					<li class="type-item2">节日</li>
					<li class="type-item2">节日</li>
					<li class="type-item2">节日</li>
					<li class="type-item2">节日</li>
					<li class="type-item2">节日</li>
					<li class="type-item2">节日</li>
					<li class="type-item2">节日</li>
					<li class="type-item2">节日</li>
					<li class="type-item2">节日</li>
					<li class="type-item2">节日</li>
					<li class="type-item2">节日</li>
					<li class="type-item2">节日</li>
				</ul>
				<ul class="type-item1 clearfix">
					<li class="type-item2 one type2">
						<i class="type"></i>
						<p class="name">节日</p>
					</li>
					<li class="type-item2">节日</li>
				</ul>
				<ul class="type-item1 clearfix">
					<li class="type-item2 one type3">
						<i class="type"></i>
						<p class="name">节日</p>
					</li>
					<li class="type-item2">节日</li>
				</ul>
			</div>
	</section>
</template>

<script type="text/javascript">
	import beemodal from '../../../components/modal.vue';
	module.exports = {
		data : function(){
			return {
				fiterOpen : false,
				tabId : 1,
				typeName : '节日'
			}
		},
		methods: {
			fiterShow : function(bln){
				this.fiterOpen = bln;
			},
			tab : function(id){
				this.tabId = id;
			},
			typeTab : function(id){
				this.typeName = '全部';
				this.fiterOpen = false;
			}
		},
		components : {
			beemodal
		}
	}
</script>

<style scoped>
	.mainbox{position: absolute; top: 0; left: 0; bottom: 0; right: 0;background:#f5f5f5;overflow-y: auto;-webkit-overflow-scrolling : touch;}
	.temp-box{position: relative;height: 100%; background: #fff;}
	.temp-box.index{z-index: 1;position: absolute;top: 0;}
	.head{height: 1.64rem; background: #31363e;line-height: 1.64rem;position: relative;}
	.head-box{text-align: center;position: absolute; width: 100%;z-index: 1;}
	.head-box .title{font-size: 0.68rem;color: #fff;}
	.head-box .back{width: 1.64rem;position:absolute;left:0;top: 0;height:100%;}
	.head-box .back i{position: absolute;width: 0.32rem;height:0.56rem;background: url(../icon/back.png) no-repeat;background-size: 100%;top: 0.5rem;right: 0.8rem;}
	.filter-box{width: 100%;height: 1.56rem;background:#ecf1f4;display:-webkit-box;}
	.filter-box .item{color:#31363e;border-bottom:4px solid transparent;padding:0 0.6rem;-webkit-box-flex:1;line-height: 1.56rem;}
	.filter-box .item.active{color:#44b2ff;border-color:#44b2ff;}
	.list-box{padding-top:3.2rem;background:#fff;}
	.list-box .list{}
	.list-box .item{float:left;width:4.2rem;margin:0.6rem 0 0 0.6rem;}
	.list-box .item .name{line-height:1rem;text-indent:1em;box-shadow:0 1px 1px 0 #d6dde1;overflow:hidden;color:#5b616a;}
	.list-box .img-box{height:4.2rem;overflow:hidden;}
	.list-box .img-box img{width:100%;}
	.list-box .img-box .new{}
	.list-box .img-box .hot{}
	.type-box{width: 13.8rem;line-height: 0.8rem;margin:0 auto;margin-top:0.4rem;}
	.type-name{width:4rem;float:left;}
	.type-name .type{width: 0.8rem;height: 0.8rem;background:url(../icon/type1.png) no-repeat;background-size: 100%;display:inline-block;vertical-align:middle;}
	.type-name .type.type2{}
	.type-name .type.type3{}
	.type-name span{font-size: 0.52rem;color: #31363e;vertical-align: middle;}
	.type-btn{float: right;width:2rem;padding-left:0.72rem;line-height:0.76rem;border:1px solid #44b2ff;color:#44b2ff;font-size:0.4rem;border-radius:4px;position: relative;}
	.type-btn .fter{position: absolute;width: 0.52rem;height: 0.52rem;background:url(../icon/fter.png) no-repeat;background-size:100%;top: 0.14rem;left: 0.14rem;}
	.type-con{padding-top: 1.64rem;}
	.type-con .type-item1{margin-top: 0.32rem;margin-left: 0.6rem;}
	.type-con .type-item2{float: left;width: 3.48rem;line-height:1.76rem;text-align: center;background:#f3f7fa;border-radius:6px;margin-right:0.08rem;margin-top: 0.08rem;color:#31363e;font-size:0.48rem;}
	.type-con .type-item2.one{width: 3.48rem;height: 3.59rem;}
	.type-con .type-item2.one .type{background:url(../icon/type1.png) no-repeat;background-size: 100%;width: 1.4rem;height: 1.4rem;display:block;margin:0 auto;margin-top:0.64rem;}
	.type-con .type-item2.one.type1{background:#ffb700;}
	.type-con .type-item2.one.type1 .type{background-image:url(../icon/type1.png);}
	.type-con .type-item2.one.type2{background:#ff3366;}
	.type-con .type-item2.one.type2 .type{background-image:url(../icon/type2.png);}
	.type-con .type-item2.one.type3{background:#29d4ff;}
	.type-con .type-item2.one.type3 .type{background-image:url(../icon/type3.png);}
	.type-con .type-item2.one .name{color:#fff;font-size:0.56rem;line-height: 1.08rem;}
</style>
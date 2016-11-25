<template>
	<section class="mainbox">
		<div class="search-box" v-show="searchOpen">
			<div class="head">
				<input type="text" name="" id="" value="" placeholder="请输入模版名称/关键字"/>
				<a class="cencel" v-touch:tap="swichSearch.bind(this, false)">取消</a>
			</div>
		</div>
		
		<div class="temp-box">
			<div class="head-box">
				<div class="head">
					<span class="title">模版制作</span>
					<i class="search" v-touch:tap="swichSearch.bind(this, true)"></i>
				</div>
				
				<div class="filter-box">
					<ul>
						<li class="item" :class="{active:typeid === el.id}" v-for="el in types" @click="typetab(el.id)">{{el.name}}</li>
					</ul>
				</div>
			</div>
			
			<div class="scroll-box list-box">
				<ul class="list clearfix">
					<li class="item" @click="selectItem(true)">
						<div class="img-box">
							<img src="http://static.123rf.com.cn/public/images/corp/vector/20160310/corp-portrait-image.jpg"/>
							<i class="new"></i>
						</div>
						<p class="name">助力助力助</p>
					</li>
				</ul>
			</div>
		</div>
		
		<div class="layerfn" v-show="toolsOpen">
			<div class="windowfn">
				<div class="btns-box">
					<div class="item">
						<i href="" class="edit"></i>
						<span class="name">制作</span>
					</div>
					<div class="item">
						<i href="" class="view"></i>
						<span class="name">预览</span>
					</div>
				</div>
				<a @click="selectItem(false)" class="close"><i></i></a>
			</div>
		</div>

	</section>
</template>

<script type="text/javascript">
	import beemodal from '../../../components/modal.vue';
	module.exports = {
		data : function(){
			return {
				types : [],
				typeid : '0',
				searchOpen : false,
				toolsOpen : false
			}
		},
		created : function(){
			var _this = this;
			//初始化数据
			dao.getTypes(function(datas){
				_this.types = datas;
				_this.typeid = datas[0].id;
				_this.getList();
			});
		},
		methods: {
			getList : function(){
				
			},
			typetab : function(id){
				this.typeid = id;
			},
			swichSearch : function(bln){
				this.searchOpen = bln;
			},
			selectItem : function(bln){
				this.toolsOpen = bln;
			}
		},
		components : {
			beemodal
		}
	}
</script>

<style scoped>
	.mainbox{position: absolute;top: 0;bottom: 0;right: 0;left: 0;}
	.search-box{background: #f4f4f4; height: 100%;position: relative; z-index: 1;}
	.head{height: 1.64rem; background: #31363e;}
	.head input{height: 1rem; width: 11.4rem; margin-top: 0.3rem; border-radius: 22px; padding: 0 0.5rem; font-size: 0.44rem;margin-left: 0.6rem;}
	.head .cencel{font-size: 0.56rem; color: #fff;padding-left: 0.2rem;padding-top: 0.2rem;}
	
	.temp-box{position: relative;height: 100%; background: #fff;}
	.head-box{text-align: center;line-height:1.64rem;position: absolute; width: 100%;z-index: 1;}
	.head-box .title{font-size: 0.68rem;color: #fff;}
	.head-box .search{position: absolute;width: 0.64rem;height:0.64rem;background: url(../icon/search.png) no-repeat;background-size: 100%;top: 0.5rem;right: 0.8rem;}
	.filter-box{width: 100%;height: 1.56rem;background:#ecf1f4;line-height: 1.56rem;padding-bottom:4px;overflow:hidden;overflow-x:auto;-webkit-overflow-scrolling: touch;}
	.filter-box ul{width: 99999px;}
	.filter-box .item{color:#31363e;float: left;border-bottom:4px solid transparent;padding:0 0.6rem;}
	.filter-box .item.active{color:#44b2ff;border-color:#44b2ff;}
	.scroll-box{padding-top:3.2rem;background:#fff;}
	.list-box .list{padding-bottom:1rem;position:relative;min-height: 100%;}
	.list-box .list:before{content: '...'; position: absolute; bottom: -1rem; width: 100%; text-align: center; font-size: 1rem;}
	.list-box .item{float:left;width:4.2rem;margin:0.6rem 0 0 0.6rem;}
	.list-box .item .name{line-height:1rem;text-indent:1em;box-shadow:0 1px 1px 0 #d6dde1;overflow:hidden;}
	.list-box .img-box{height:5.8rem;overflow:hidden;}
	.list-box .img-box img{width:100%;}
	.list-box .img-box .new{}
	.list-box .img-box .hot{}
</style>
var webpack = require('webpack');
var path = require('path');

var debugOn = true;
//本地环境
var dirname = __dirname;

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpackConfig = {
	entry: {
//		'bee': './src/bee/common/m.bee.js'
//		'login': './src/bee/login/main',
//		'personal': './src/bee/personal/main'
	},
	output: {
		path: path.join(dirname, './build/'),
		filename: 'js/[name][hash].js'
	},
	module: {
		loaders: [
			{ test: /\.vue$/, loader: 'vue' },
			{ test: /\.js$/, loader: 'babel', exclude: /node_modules/ }, 
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8000&name=images/[hash].[ext]' }, 
			{ test: /\.(html|tpl)$/, loader: 'html-loader' },
			{ test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
			{ test: /\.ejs$/, loader: 'ejs' }
		]
	},
	resolve: {
		extensions: ['', '.js', '.vue']
	},
	plugins: [
		new ExtractTextPlugin("css/[name][hash].css")
//		new webpack.optimize.UglifyJsPlugin({
//    		compress: {
//      		warnings: false
//    		}
//  	}),
    ],
    externals: {//直接使用页面引入的全局变量，require时不打包到一起
    	"vue": "Vue",
    	"vue-router":"VueRouter",
    	"vue-touch-next":"VueTouch"
	},
	devServer:{
        contentBase:'./build/'
   },
	devtool: debugOn ? '#cheap-module-eval-source-map' : '#cheap-module-source-map'
};

var glob = require('glob');
// 获取指定路径下的入口文件
var getEntries = function(globPath) {
    var files = glob.sync(globPath),
    entries = {};

    files.forEach(function(filepath) {
        var split = filepath.split('/');
        var name = split[split.length - 2];

        entries[name] = filepath;
    });
    return entries;
}

var entries = getEntries('src/bee/**/**.html');

Object.keys(entries).forEach(function(name) {
    // 每个页面生成一个entry，如果需要HotUpdate，在这里修改entry
    webpackConfig.entry[name] = './'+ entries[name].substring(0, entries[name].lastIndexOf('/')) + '/main';
	//console.log(entries[name])
    // 每个页面生成一个html
    var plugin = new HtmlWebpackPlugin({
        // 生成出来的html文件名
        filename: name + '.html',
        // 每个html的模版，这里多个页面使用同一个模版
        template: entries[name],
        // 自动将引用插入html
        inject: true,
        // 每个html引用的js模块，也可以在这里加上vendor等公用模块
        chunks: [name]
    });
    webpackConfig.plugins.push(plugin);
});
module.exports = webpackConfig;
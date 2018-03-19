const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
	entry: __dirname +'/app/index.js',//__dirname node.js全局变量 脚本所在目录
	output: {
		filename: 'bundle.js',
		path: __dirname + "/public"
	},
	devtool: 'eval-source-map',//方便调试 cheap-module-eval-source-map大型项目中打包速度快不方便调试
	devServer: {//安装npm install -g webpack-dev-server 搭建本地服务器
		contentBase: './public',//服务器加载页面得目录
		historyApiFallback: true,//不跳转
		hot:true,
		inline: true//实时刷新
	},
	module: {
		rules: [
			{
				test:/(\.jsx|\.js)$/,//正则表达式删选文件
				use:{
					loader:'babel-loader',//loader
					// options:{ 放于 .babelrc文件中
					// 	presets:[//预处理loader
					// 		"env","react"
					// 	]
					// }
				},
				exclude: /node_modules/ //排除不需要处理文件
			},{
				test:/\.css$/,
				use: [{
						loader: "style-loader"//将所有的计算后的样式加入页面中
					},{
						loader: 'css-loader',//能够使用类似@import 和 url(...)的方法
						options: {
							modules: true,
							localIdentName: '[name]_[local]--[hash:base64:5]'//制定css类名格式 可防止局部css污染全局样式
						}
					}
				]

			},{
				test: /\.less$/,
				use:[{
						loader: "style-loader"//将所有的计算后的样式加入页面中
					},{
						loader: 'css-loader',//能够使用类似@import 和 url(...)的方法
						options: {
							modules: true,
							localIdentName: '[name]_[local]--[hash:base64:5]'//制定css类名格式 可防止局部css污染全局样式
						}
					},{
						loader:'less-loader'
					},{
						loader:'postcss-loader'//import得css也要用postcss-loader处理？？？
					}
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({template:__dirname + "/app/index.tmpl.html"})
	]
};
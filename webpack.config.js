const webpack = require('webpack')
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
					options:{
						presets:[//预处理loader
							"env","react"
						]
					}
				},
				exclude: /node_modules/ //排除不需要处理文件
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
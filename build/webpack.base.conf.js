const path = require('path')

const webpackBaseConf = {
	output: {
		filename: 'js/[name].[hash:8].js',
		path: path.resolve('dist')
	},
	resolve: {
		alias: {
			'@': path.resolve('src')
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'eslint-loader',
				enforce: 'pre',
				include: [path.resolve('src'), path.resolve('test')]
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [path.resolve('src')]
			},
			{
				test: /\.(png|jpe?g|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name][hash:8].[ext]'
						}
					}
				]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'fonts/[name][hash:8].[ext]'
						}
					}
				]
			}
		]
	}
}

module.exports = webpackBaseConf

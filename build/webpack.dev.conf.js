const webpackMerge = require('webpack-merge')
const path = require('path')
const webpackBaseConf = require('./webpack.base.conf.js')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { generateStyleRules } = require('./util.js')

const webpackDevConfig = webpackMerge(webpackBaseConf, {
	module: {
		rules: [generateStyleRules({ sourceMap: false, extract: false })]
	},
	devtool: '#cheap-module-eval-source-map',
	devServer: {
		contentBase: false,
		quiet: true,
		inline: true,
		port: 8080,
		hot: true
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html',
			inject: true
		})
	]
})

module.exports = webpackDevConfig

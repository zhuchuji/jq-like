const webpackMerge = require('webpack-merge')
const path = require('path')
const webpackBaseConf = require('./webpack.base.conf.js')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const notifier = require('node-notifier')
const package = require('../package.json')
const { generateStyleRules } = require('./util.js')

const webpackDevConf = webpackMerge(webpackBaseConf, {
	entry: {
		app: './docs-src/main.js',
	},
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
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'docs-src/index.html',
			inject: true
		})
	]
})

module.exports = new Promise((resolve, reject) => {
	webpackDevConf.plugins.push(new FriendlyErrorsPlugin({
		compilationSuccessInfo: {
			messages: [`You application is running here http://localhost:${webpackDevConf.devServer.port}`]
		},
		onErrors: (severity, errors) => {
      if (severity !== 'error') {
        return;
      }
      const error = errors[0];
      notifier.notify({
        title: package.name,
        message: severity + ': ' + error.name,
        subtitle: error.file || '',
        // icon: ICON
      });
    }
	}))
	resolve(webpackDevConf)
})

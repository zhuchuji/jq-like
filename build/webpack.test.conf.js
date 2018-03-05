const webpackBaseConf = require('./webpack.base.conf.js')
const merge = require('webpack-merge')
const webpack = require('webpack')
const { generateStyleRules } = require('./util.js')

const webpackTestConf = merge(webpackBaseConf, {
  module: {
    rules: [generateStyleRules({ sourceMap: false, extract: false })]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('testing')
    })
  ]
})

delete webpackTestConf.entry

module.exports = webpackTestConf

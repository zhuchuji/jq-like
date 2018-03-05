const extractTextPlugin = require('extract-text-webpack-plugin')

function generateStyleRules (options) {
  options = options || {}
  var styleLoaders = [
    {
      loader: 'style-loader',
      options: {
        sourceMap: options.sourceMap
      }
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: options.sourceMap
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: options.sourceMap
      }
    }
  ]
  var styleRules = {
    test: /\.s?css$/,
  }
  if (options.extract) {
    styleRules.use = extractTextPlugin.extract({
      use: styleLoaders
    })
  } else {
    styleRules.use = styleLoaders
  }

  return styleRules
}

module.exports = {
  generateStyleRules
}

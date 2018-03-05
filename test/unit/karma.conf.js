const webpackTestConf = require('../../build/webpack.test.conf.js')

let isWatch = process.env.npm_config_watch || false
let reporters = isWatch ? ['spec'] : ['spec', 'coverage']
let coverageReporter = isWatch ? { type: '' } : {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }

module.exports = function (config) {
  config.set({
    files: [
      './index.js'
    ],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    browsers: ['ChromeHeadless'],
    browserDisconnectTolerance: 10,
    browserNoActivityTimeout: 100000,
    frameworks: ['mocha', 'chai'],
    reporters: reporters,
    webpack: webpackTestConf,
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: !isWatch,
    coverageReporter: coverageReporter
  })
}

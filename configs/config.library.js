// Vendors
var nodeExternals = require('webpack-node-externals')

const mini_css_extract_plugin = require('../options/plugins/mini-css-extract-plugin')
// Manifest
const webpackManifest = require(`${process.cwd()}/.webpack.manifest.js`)
// Entry
const getEntry = require('../options/entry/entry.index')
const entry = getEntry(webpackManifest)
// Output
const getOutput = require('../options/output/output.index')
const output = getOutput(webpackManifest)
// Performance
const getPerformance = require('../options/performance/performance.index')
const performance = getPerformance(webpackManifest)
// Optimization
const getOptimization = require('../options/optimization/optimization.index')
const optimization = getOptimization(webpackManifest)
// Module
const modules = require('../options/module/module.index')

// Export
module.exports = {
  entry,
  output,
  performance,
  optimization,
  module: modules,
  externals: [nodeExternals()],
  plugins: [mini_css_extract_plugin({ plugins: {} })],
}

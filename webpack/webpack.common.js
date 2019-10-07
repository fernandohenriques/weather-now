const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rules = require('./rules.common');
const { entryPath, srcPath, templatePath, cssFolder } = require('./paths');

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((envObject, key) => {
  envObject[`process.env.${key}`] = JSON.stringify(env[key]);
  return envObject;
}, {});

module.exports = {
  entry: entryPath,
  module: {
    rules
  },
  resolve: {
    extensions: ['*', '.js'],
    modules: [srcPath, 'node_modules'],
    mainFields: ['browser', 'main', 'module']
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: templatePath,
      chunks: ['main', 'vendor']
    }),
    new MiniCssExtractPlugin({
      filename: `${cssFolder}/[name].[hash].css`,
      chunkFilename: `${cssFolder}/[name].[chunkhash].css`
    }),
    new webpack.DefinePlugin(Object.assign({ 'process.browser': 'true' }, envKeys))
  ],
  node: {
    fs: 'empty'
  }
};

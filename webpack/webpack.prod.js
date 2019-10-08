const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const { outputPath, jsFolder, cssFolder } = require('./paths');

module.exports = {
  mode: 'production',
  output: {
    path: outputPath,
    filename: `${jsFolder}/[name].[chunkhash].js`,
    chunkFilename: `${jsFolder}/[name].[chunkhash].js`
  },
  stats: {
    entrypoints: false,
    children: false
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      cleanStaleWebpackAssets: true
    }),
    new MiniCssExtractPlugin({
      filename: `${cssFolder}/[name].[chunkhash].css`,
      chunkFilename: `${cssFolder}/[name].[chunkhash].css`
    }),
    new CompressionPlugin({ cache: true })
  ],
  devtool: 'source-map',
  optimization: {
    minimize: true,
    noEmitOnErrors: true,
    concatenateModules: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true
      })
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 1,
          chunks: 'all',
          name: 'vendor'
        },
      }
    }
  }
};

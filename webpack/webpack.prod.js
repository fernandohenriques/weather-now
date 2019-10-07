const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const { outputPath, jsFolder } = require('./paths');

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
          chunks: 'all',
          priority: 1,
          name: 'vendor'
        }
      }
    }
  }
};

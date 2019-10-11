const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const { outputPath, publicPath, jsFolder, cssFolder } = require('./paths');

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
      chunkFilename: `${cssFolder}/[name].[chunkhash].css`,
      ignoreOrder: true
    }),
    new CopyPlugin([
      {
        from: publicPath,
        to: outputPath,
        ignore: ['*.html'],
      }
    ]),
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
        parallel: true,
        terserOptions: {
          output: {
            comments: false
          }
        },
        extractComments: false,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true
              }
            }
          ],
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/].*\.js$/,
          priority: 1,
          chunks: 'all',
          name: 'vendor'
        },
      }
    }
  }
};

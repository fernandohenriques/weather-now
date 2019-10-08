const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonPaths = require('./paths');
const devMode = process.env.NODE_ENV !== 'production';

const sassLoaders = [
  'sass-loader',
  {
    loader: 'sass-resources-loader',
    options: {
      resources: [
        path.resolve(commonPaths.root, 'src/styles/helpers/_var.scss')
      ]
    }
  }
];

module.exports = [
  /*{
    enforce: 'pre',
    test: /\.(js|jsx)$/,
    loader: 'eslint-loader',
    exclude: /(node_modules)/,
    options: {
      emitWarning: devMode
    }
  },*/
  {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    exclude: /(node_modules)/
  },
  {
    test: /\.(sass|scss)$/,
    exclude: /\.module\.(sass|scss)$/,
    use: [
      devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      }
    ].concat(sassLoaders)
  },
  {
    test: /\.module\.(sass|scss)$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          importLoaders: 4,
          localsConvention: 'camelCase',
          modules: {
            localIdentName: '[local]--[hash:base64:5]'
          }
        }
      }
    ].concat(sassLoaders)
  },
  {
    test: /\.(png|jpg|gif|svg)$/,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  },
];

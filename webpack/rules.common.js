const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonPaths = require('./paths');
const devMode = process.env.NODE_ENV !== 'production';

const { root, fontsFolder, imagesFolder } = commonPaths;

const sassLoaders = [
  'sass-loader',
  {
    loader: 'sass-resources-loader',
    options: {
      resources: [
        path.resolve(root, 'src/styles/helpers/_var.scss')
      ]
    }
  }
];

const MiniCssExtractPluginLoader = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: '../'
  }
};

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
      devMode ? 'style-loader' : MiniCssExtractPluginLoader,
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
      devMode ? 'style-loader' : MiniCssExtractPluginLoader,
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
        loader: 'file-loader',
        options: {
          outputPath: imagesFolder
        }
      }
    ]
  },
  {
    test: /\.(woff2|ttf|otf|woff|eot)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: fontsFolder
        }
      }
    ]
  },
];

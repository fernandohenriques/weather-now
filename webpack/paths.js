const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  srcPath: path.resolve(__dirname, '../', 'src'),
  publicPath: path.resolve(__dirname, '../', 'public'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: path.resolve(__dirname, '../', 'src/index.js'),
  templatePath: path.resolve(__dirname, '../', 'public/index.html'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};

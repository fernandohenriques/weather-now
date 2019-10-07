const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js'
  },
  stats: {
    colors: true
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    host: '0.0.0.0',
    port: process.env.WEBPACK_PORT,
    disableHostCheck: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    compress: true,
    clientLogLevel: 'warning',
    watchOptions: { ignored: /node_modules/ },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
};

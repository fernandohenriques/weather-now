const plugins = [
  require('autoprefixer'),
  require('postcss-preset-env')
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(require('cssnano'));
}

module.exports = {
  plugins
};

const path = require('path');
const rules = require('../webpack/rules.common');

module.exports = async ({ config, mode }) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    },
    module: {
      ...config.module,
      rules
    },
    node: {
      fs: 'empty'
    }
  };
};

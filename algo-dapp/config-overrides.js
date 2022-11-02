const webpack = require('webpack');

module.exports = function override(config) {
  // ...

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ]);
  config.resolve.fallback = fallback;
  config.resolve.alias = {
    stream: require.resolve('stream-browserify'),
    crypto: require.resolve('crypto-browserify'),
    buffer: require.resolve("buffer")
  };
  return config;
}


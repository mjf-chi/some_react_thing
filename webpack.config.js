const path = require('path');
const webpack = require('webpack');
const BabiliPlugin = require('babili-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/src/client.js'),
  output: {
    path: path.join(__dirname, '/src/static/js'),
    filename: 'main.js',
  },
  resolveLoader: {
    moduleDirectories: ['node_modules']
  },
  progress: true,
  resolve: {
    modulesDirectories: ['src', 'node_modules'],
    extensions: ['', '.json', '.js', '.jsx']
  },
  node: {
    fs: "empty",
    net: "empty"
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'src'),
        loader: ['babel-loader'],
        query: {
          cacheDirectory: 'babel_cache',
          "presets": ["react", "es2015", "stage-0"]
        }
      }, {
        test: /\.json?$/,
        loader: 'json'
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true,
      }
    }),
    new BabiliPlugin(),
  ]
};

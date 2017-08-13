/* global __dirname, require, module */
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const DefinePlugin = webpack.DefinePlugin;
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2

let outputFile;
const libraryName = 'redux-modal';
const plugins = [];

if (env === 'build') {
  plugins.push(new DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }));
  plugins.push(new UglifyJsPlugin({
    minimize: true
  }));
  outputFile = libraryName + '.js';
} else {
  outputFile = libraryName + '.js';
}

const config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: plugins,
  externals: [
    'prop-types',
    'react',
    'react-dom',
    'react-redux',
    'redux',
    'warning'
  ]
};

module.exports = config;

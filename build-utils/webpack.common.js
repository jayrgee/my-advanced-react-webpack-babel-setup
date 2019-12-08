const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const packageJson = require('../package.json');

const appVersion = packageJson.version;

const BUILD_DIRECTORY = 'dist';
const BUILD_DROP_PATH = path.resolve(__dirname, '../', BUILD_DIRECTORY);

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new AssetsPlugin({
      filename: 'webpack.assets.json',
      path: BUILD_DROP_PATH,
      includeAllFileTypes: false,
      fileTypes: [ 'js' ],
      metadata: { version: appVersion },
      prettyPrint: true
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Advanced React with Webpack Setup',
      template: './src/index.html',
    }),
  ],
  output: {
    path: BUILD_DROP_PATH,
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
};

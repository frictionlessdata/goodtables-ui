const path = require('path')
const webpack = require('webpack')
const CompressionPlugin = require("compression-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ENV = process.env.NODE_ENV;

// Base

const webpackConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'goodtables-ui.js',
    library: 'goodtablesUI',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.USER_ENV': JSON.stringify('browser')
    }),
    new ExtractTextPlugin(
      'goodtables-ui.css'
    ),
  ],
  resolve: {
    alias: {
      'react': 'react-lite',
      'react-dom': 'react-lite',
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
}

// Production

if (ENV === 'production') {
  webpackConfig.output.filename = 'goodtables-ui.min.js',
  webpackConfig.devtool = '#source-map'
  webpackConfig.plugins = [
    new webpack.DefinePlugin({
      'process.env.USER_ENV': JSON.stringify('browser'),
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new ExtractTextPlugin(
      'goodtables-ui.min.css'
    ),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
  ]
}

// Module API

module.exports = webpackConfig

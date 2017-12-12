// Require Dotenv
const Dotenv = require('dotenv-webpack');
// Require Webpack for HMR
const webpack = require('webpack');
// Required for working with paths and directories
const path = require('path');
// Require autoprefixer
const autoprefixer = require('autoprefixer');
// HTML Template Plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Config for HTML Template Plugin
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src/index.html'),
  filename: 'index.html',
  inject: 'body',
});
// Vendor Libs to be bundled separately
const vendorLibs = ['react', 'react-dom', 'jquery'];
// Copy Webpack Plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Webpack Configs
module.exports = {
  // Dev Server Setup
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: true,
    hot: true,
    disableHostCheck: true,
  },
  // Entry point for Webpack to bundle
  entry: {
    bundle: ['react-hot-loader/patch', 'babel-polyfill', './src/js/main.jsx'],
    vendor: vendorLibs,
  },
  // Where to bundle to
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        // Convert ES6
        test: /\.js?x$/,
        exclude: '/(node_modules)/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'flow'],
          },
        },
      },
      {
        // Bundles font files
        test: /\.(woff|woff2|eot|ttf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'url-loader',
          options: {
            name: './fonts/[name].[ext]',
            limit: 30000,
            mimetype: 'application/font-woff',
          },
        },
      },
      {
        // Load images and optimize automatically
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./src/js'), path.resolve('./src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    // Dotenv setup
    new Dotenv(),
    // Config for HTML Template
    HtmlWebpackPluginConfig,
    // Copy config file
    new CopyWebpackPlugin([{ from: './src/config.json', to: './' }]),
    // Shows relative path when HMR is enabled
    new webpack.NamedModulesPlugin(),
    // Enabled HMR
    new webpack.HotModuleReplacementPlugin(),
    // Common Modules in separate chunk
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
};

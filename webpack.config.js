const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = (env, argv) => {
  return {
    context: path.resolve(__dirname, './src'),
    entry: {
      main: './index.jsx'
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.[contenthash].js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: argv.mode === 'development' ? 'source-map' : false,
    devServer: {
      hot: true,
      port: 3000
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].bundle.[contenthash].css'
      }),
      new CopyPlugin({
        patterns: [
          { from: "codemirror-5.60.0/", to: "codemirror-5.60.0/" },
          { from: "favicon.png", to: "favicon.png" }
        ],
      })
    ],
    module: {
      rules: [{
          test: /\.(?:m|c)?jsx?$/,
          exclude: /node_modules/,
          use: [
            'babel-loader'
          ]
        }, {
          test: /\.(?:c|sc|sa)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    }
  }
}

const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.base.js')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: false
            }
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9'
                  ],
                  flexbox: 'no-2009',
                  grid: true
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              url: false,
              sourceMap: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new StyleLintPlugin({
      syntax: 'scss',
      fix: true
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new BrowserSyncPlugin(
      {
        notify: false,
        host: 'localhost',
        port: 3000,
        server: './dist',
        baseDir: './dist',
        files: [
          path.join(__dirname, '../dist/css/*.css'),
          path.join(__dirname, '../dist/*.html'),
          path.join(__dirname, '../dist/js/*.js')
        ]
      },
      {
        reload: true,
        injectCss: true
      }
    )
  ]
})

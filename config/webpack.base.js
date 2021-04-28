const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    vendor: ['babel-polyfill'],
    style: './src/scss/style.scss',
    global: './src/js/global.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      minChunks: 3
    }
  },
  plugins: [
    // Clean the dist folder
    new CleanWebpackPlugin(['../dist'], {
      allowExternal: true
    }),
    // Copy template files and images to dist
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src',
          to: '../dist',
          globOptions: {
            gitignore: true,
            ignore: ['**/*.js', '**/*.scss']
          }
        }
      ]
    })
  ]
}

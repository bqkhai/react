const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.jsx', '.js', '.tsx', '.ts']
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    clean: true
  },
  // devServer: {
  //   static: {
  //     directory: path.resolve(__dirname, "./dist"),
  //   },
  // },
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'public', 'index.html'),
      serveIndex: true,
      watch: true
    }
  },
  plugins: [
    // Copy files in folder public ignore index.html
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: '.',
          filter: (name) => {
            return !name.endsWith('index.html')
          }
        }
      ]
    }),
    // add style and script to index.html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html'
    })
  ]
}

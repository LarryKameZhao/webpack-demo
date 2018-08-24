const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use:[{
            loader:"css-loader"
          },{
            loader:"sass-loader"
          }],
          fallback:"style-loader"

        })
      }
    ]
  },
  plugins:[
    new ExtractTextPlugin("/css/[name].css"),
  ]
};
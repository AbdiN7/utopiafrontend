const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {loader:'babel-loader'}
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // creates `style` nodes from JS strings
            'style-loader',
            //translate css -> CommonJS
            'css-loader',
            //compiles Sass to CSS
            'sass-loader',
          ],
        },
        {
            test: /\.html$/,
            use: [{loader: "html-loader"}]
        },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
  devServer: {
    port: 3000,
    hot: true,
    contentBase: './dist'
  }
};

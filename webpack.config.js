const HtmlWebPackPlugin = require("html-webpack-plugin");
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
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name:'[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        }
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
        })
    ],
  devServer: {
    contentBase: './dist'
  }
};

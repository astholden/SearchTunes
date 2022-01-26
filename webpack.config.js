const path = require('path');
const { mainModule } = require('process');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),  
      publicPath: '/',
      filename: 'bundle.js',
    },

    // plugins: [new HtmlWebpackPlugin({
    //   template: "./index.html"
    // })],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
        rules: [
          {
            test: /\.jsx?/,
            exclude: /(node_modules)/,
            use:  {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
          }
        ]
    },
};
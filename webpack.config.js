const path = require('path');
const { mainModule } = require('process');

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),  
      publicPath: '/',
      filename: 'bundle.js',
    },

    module: {
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
          },
          {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
          }
        ]
    },
};
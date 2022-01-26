const path = require('path');
// const { mainModule } = require('process');

module.exports = {

    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
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
const path = require('path');
// const { mainModule } = require('process');

module.exports = {
    mode:"production",
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'dist'),  
      filename: 'bundle.js',
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
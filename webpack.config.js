const path = require('path');

module.exports = {
 entry: {
   index: './src/index.js',
   home: './src/load.js',
   header: './src/header.js',
   menu: './src/menu.js',
   conntact: './src/contact.js',
 },
  output: {
   filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
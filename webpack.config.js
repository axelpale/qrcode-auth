var path = require('path');

module.exports = {

  entry: './client/index.js',

  output: {
    path: path.resolve(__dirname, 'client'),
    filename: 'app.bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
      },
    ],
  },

  devtool: 'cheap-module-eval-source-map',

};

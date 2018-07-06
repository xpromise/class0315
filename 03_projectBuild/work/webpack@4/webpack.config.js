const {resolve} = require('path');
module.exports = {
  entry: './src/js/app.js',
  output: {
    path: resolve(__dirname, 'build'),
    filename: './js/built.js'
  },
  mode: 'production'
}
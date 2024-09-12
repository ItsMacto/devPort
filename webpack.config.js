const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'telemetry.js',
    path: path.resolve(__dirname, 'public'),
  },
};

const path = require('path');

module.exports = {
  entry: './src/index.ts',
  externals: {
    '@tensorflow/tfjs': 'window.tf',
    '@tensorflow/tfjs-vis': 'window.tfvis',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

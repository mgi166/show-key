import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  entry: {
    path: path.join(__dirname, 'src'),
  },
  output: {
    path: path.join(__dirname, "scripts"),
    filename: 'scripts/[name].bundle.js',
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin(
      [
        {
          from: path.join(__dirname, 'src', 'manifest.json'),
          to: path.join(__dirname, 'scripts'),
        }
      ]
    )
  ]
};

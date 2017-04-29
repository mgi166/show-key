import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  entry: {
    contentScripts: path.join(__dirname, 'src', 'scripts', 'contentScripts.js'),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: 'dist/[name].bundle.js',
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

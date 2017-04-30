import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  entry: {
    contentScripts: path.join(__dirname, 'src', 'scripts', 'contentScripts.js'),
    notification: path.join(__dirname, 'src', 'views', 'notification.js'),
    options: path.join(__dirname, 'src', 'views', 'options.js'),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: 'scripts/[name].bundle.js',
  },
  target: 'web',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.jsx$/,
        use: { loader: 'babel-loader' }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin(
      [
        {
          from: path.join(__dirname, 'src', 'manifest.json'),
          to: path.join(__dirname, 'dist'),
        },
        {
          from: path.join(__dirname, 'src', 'views', 'options.html'),
          to: path.join(__dirname, 'dist', 'views'),
        }
      ]
    )
  ]
};

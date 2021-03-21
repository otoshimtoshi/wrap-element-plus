import path from 'path'
import webpack from 'webpack'
import { VueLoaderPlugin } from 'vue-loader'
const Components = require('../components.json')

const config: webpack.Configuration = {
  mode: 'production',
  entry: Components,
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '.',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryExport: 'default',
    library: 'WrapElementPlus',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['node_modules'],
  },
  externals: [
    {
      vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
      },
    },
  ],
  optimization: {
    minimize: false,
  },
}

export default config

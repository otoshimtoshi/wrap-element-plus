import path from 'path'
import webpack from 'webpack'
import { VueLoaderPlugin } from 'vue-loader'
// just in case you run into any typescript error when configuring `devServer`

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '.',
    filename: 'foo.bundle.js',
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
}

export default config

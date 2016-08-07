var path = require('path')
var webpack = require('webpack')

module.exports = {
  watch: true,
  devtool: 'cheap-module-eval-source-map',
  debug: true,
  entry: {
    bundle: './src/index',
    vendor: [
      'path'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   minimize: true
    // }),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ],
  module: {
    loaders: [{
      test: /\.(jsx?)$/,
      loaders: [ 'babel' ],
      exclude: /node_modules/,
      include: __dirname
    },
    {
      test: /\.less$/,
      loader: 'style!css!less?sourceMap'
    },
    {
      test: /\.css$/,
      loader: 'style!css'
    },
    {
      test: /\.json$/,
      loader: 'json'
    },
    {
      test: /\.ttf/,
      loader : 'file?prefix=font/&limit=1024000'
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'url?limit=1024000'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.less']
  },
  alias: {
    assets: './src/asset'
  }
}

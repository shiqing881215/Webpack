const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // we have two entries here, one for app and one for print
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  // this allows to map compiled code (bundle.js) back to source code (index.js / print.js .etc)
  // don't use it in production 
  devtool: 'inline-source-map',
  // tell webpack-dev-server where to look for the files
  // this also tells webpack-dev-server to serve the files from the dist directory on localhost:8080
  // you also need to add a script in package.json to run webpack-dev-server
  devServer: {
    contentBase: './dist'
  },
  // Use HtmlWehpackPlugin so you don't need to worry about change entries result in something wrong in index.html
  // HtmlWebpackPlugin by default will generate its own index.html
  // Use CleanWebpackPlugin will clean anything in the dist that are not used actually 
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    // output file name is based on the entry key (app / print)
    filename: '[name].bundle.js',
    // this is the output files directory : dist is distribution usually the minimized and optimized output of our build process that will eventually be loaded in the browser
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    // this use regular expression to define use what loader to load which file
    // you need to install those loader packages first
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};

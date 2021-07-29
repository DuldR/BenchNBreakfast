const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/bench_bnb.jsx",
  output: {
    path: '/home/garrett/Documents/TestBed/AppAcaReact/ReactAuth/Projects/BenchBnB/bnb/app/assets/javascripts',
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
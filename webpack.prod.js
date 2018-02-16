const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common.js");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            { loader: "postcss-loader", options: { plugins: [ require("autoprefixer"), require("cssnano") ] } },
            "sass-loader"
          ]
        })
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin(),
    new ExtractTextPlugin("bundle.[contenthash].css"),
    new WebpackPwaManifest({
      name: "Decrypter",
      short_name: "Decrypter",
      description: "A PWA for cracking simple ciphers",
      background_color: "#232323",
      theme_color: "#444",
      "theme-color": "#444",
      start_url: "./",
      display: "standalone",
      icons: [{
        src: path.resolve("src/assets/icon.png"),
        sizes: [96, 128, 192, 256, 484, 512]
      }]
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: "decrypter",
      filename: "service-worker.js",
      minify: true,
      dontCacheBustUrlsMatching: /\.\w{8,}\./,
      navigateFallback: "https://srkomodo.github.io/decrypter/index.html"
    })
  ],
  output: {
    publicPath: "https://srkomodo.github.io/decrypter/"
  }
});
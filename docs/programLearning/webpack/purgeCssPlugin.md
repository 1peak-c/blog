# webpack css Tree Shaking plugin

目的：对无用的css代码进行Tree Shaking

## 安装

```sh
npm i purgecss-webpack-plugin -D
```

## 使用

### With mini-css-extract-plugin

```js
const path = require("path")
const glob = require("glob")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin")
const PATHS = {
  src: path.join(__dirname, "src"),
}
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new PurgeCSSPlugin({
      // 同步的匹配文件的绝对路径  第一个参数是匹配src下的所有文件  { nodir: true }表示匹配的不是文件夹
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
      // 白名单 tree shaking时不会删除这些css样式
      safelist: function() {
        return {
          standard: ["html", "body"]
        }
      }
    })
  ]
}
```

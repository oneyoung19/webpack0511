# webpack

#### 1.安装并简单运行

webpack4.0版本或以上，安装时需要带上`webpack-cli`。
```
yarn add webpack webpack-cli -D
```

#### 2.base
- html-webpack-plugin

安装`html-webpack-plugin`。不再手动在`index.html`中引入`dist`中打包的js文件。

- style-loader css-loader

`style-loader`将打包的`css`以`style`标签的形式，加载在头部

`css-loader`解析`css`的`import`语法

`mini-css-extract-plugin`将js文件的css抽离出来，形成一个单独的文件。另外该插件自带loader, 用于取代`style-loader`，而且该loader在开发环境能够进行css的热更新。要注意的是，使用该插件时，必须使用该插件的loader，不使用的话，分离css不会生效。

- url-loader file-loader

`file-loader`会将图片转为base64的格式，无论图片大小。而`url-loader`有个`limit`属性，可以控制图片的大小，以此来决定是否转为base64图片。开发中优先使用`url-loader`。因为不转base64，图片加载过程会产生额外的网络请求。统统转为base64,较大的图片会产生较高的性能消耗。

- copy-webpack-plugin

`copy-webpack-plugin`插件会将资源拷贝到指定目录。要注意的是，这里的拷贝，**内部不会再进行webpack的递归依赖处理**。而只是把文件拷贝。
譬如js文件中，不能再用`import`、`require`等等这种模块化引入的代码。

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

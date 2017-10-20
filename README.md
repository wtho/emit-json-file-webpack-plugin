[![npm](https://img.shields.io/npm/v/emit-json-file-webpack-plugin.svg?style=flat-square)](https://npmjs.com/package/emit-json-file-webpack-plugin)

<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>Emit Json-File Webpack Plugin</h1>
  <p>Creates a json file from a JavaScript object during the Webpack Building Process.</p>
</div>

### Install

```
npm i -D emit-json-file-webpack-plugin
```

### Usage

`new EmitJsonFileWebpackPlugin([files])`

A file looks like:
`{ path: 'filePath', content: 'object' }`

| Name | Details                                                 |
|------|---------------------------------------------------------|
| `path` | This file path will created inside the Output Directory <br>_example:_ 'folder/file.txt'|
| `content`   | The JavaScript object to be formatted as JSON. The Plugin uses [json-format](https://github.com/luizstacio/json-format) internally to format the object. |

### Examples

```javascript
const EmitJsonFileWebpackPlugin = require('emit-json-file-webpack-plugin')

const fileContent = {
    importantValueA: 'A',
    valueB: 'B'
}

module.exports = {
    ...
    plugins: [
        new EmitJsonFileWebpackPlugin([
            // {output}/folder/file.txt
            { path: 'folder/file.txt', content: fileContent },
        ])
    ]
}
```

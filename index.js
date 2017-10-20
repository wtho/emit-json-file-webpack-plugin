const path = require('path')
const jsonFormat = require('json-format')

class EmitJsonFileWebpackPlugin {
	constructor(options) {
    if (!Array.isArray(options)) {
      throw new Error('[emit-json-file-webpack-plugin] arguments must be an array')
    }
		this.options = options || []
	}

	apply(compiler) {
    const options = this.options
    compiler.plugin('emit', function(compilation, cb) {
      options.forEach(file => {
        if (!file.content || !file.path) {
          compilation.errors.push(new Error(`[emit-json-file-webpack-plugin] file arguments must contain 'path' and 'content'`))
          return
        }
        const formatted = jsonFormat(file.content)
        compilation.assets[file.path] = {
          size: () => formatted.length,
          source: () => formatted
        }
      })
      cb()
    })
  }
}

module.exports = EmitJsonFileWebpackPlugin

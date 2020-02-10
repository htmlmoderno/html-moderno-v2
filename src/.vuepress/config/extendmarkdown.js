const pluginContainer = require('markdown-it-container')

module.exports = (md) => {
  md.use(pluginContainer, 'figurecode', {
    render: (tokens, idx) => {
      var m = tokens[idx].info.trim().match(/^figurecode\s+(.*)$/)
      if (tokens[idx].nesting === 1) {
        return `
          <figure class="figurecode">\n
            <figcaption class="figurecode__caption">
              ${md.utils.escapeHtml(m[1])}
            </figcaption>
        `
      } else {
        return '</figure>\n'
      }
    }
  })
}

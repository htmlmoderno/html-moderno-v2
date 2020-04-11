export default function Views (pages) {
  const data = pages
  let result = []

  return {
    select (type) {
      result = data.filter(page => page.frontmatter.view === type)
      return this
    },

    status (status = true) {
      result = result.filter(page => page.frontmatter.active === status)
      return this
    },

    orderBy () {
      result = result.sort((a, b) => a.frontmatter.order - b.frontmatter.order)
      return this
    },

    orderByDesc () {
      result = result.sort((a, b) => b.frontmatter.order - a.frontmatter.order)
      return this
    },

    get () {
      return result
    }
  }
}

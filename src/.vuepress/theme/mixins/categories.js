export default {
  setup (_, { root }) {
    const getAllCategories = root.$site.pages
      .filter(page => page.frontmatter.view === 'Category')
      .sort((a, b) => {
        return a.frontmatter.order - b.frontmatter.order
      })

    return {
      getAllCategories
    }
  }
}

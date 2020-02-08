export function filterPosts (pages) {
  return pages.filter(page => page.id === 'post')
}

export function sortPostsByDate (posts, orderByDesc = true) {
  if (orderByDesc) {
    return posts.sort((a, b) => {
      return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    })
  }

  return posts.sort((a, b) => {
    return new Date(a.frontmatter.date) - new Date(b.frontmatter.date)
  })
}

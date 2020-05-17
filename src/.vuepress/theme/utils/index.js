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

export function getSlugPost (path) {
  return path.match(/(?<=\/posts\/)(.*?)(?=\/)/g)
}

export function focusTargetElement (id) {
  if (!id) return
  const element = document.getElementById(id)
  if (element) {
    if (!/^(a|select|input|button|textarea)/i.test(element.tagName.toLowerCase())) {
      element.setAttribute('tabindex', -1)
    }
    element.focus()
  }
  return element
}

import { getSlugPost } from './index'

export default function prepareCardPost (posts) {
  return posts.map(post => {
    const slug = getSlugPost(post.path)
    const data = {
      title: post.title,
      excerpt: post.frontmatter.excerpt,
      author: post.frontmatter.author,
      category: '',
      image: {},
      date: new Intl.DateTimeFormat('default', { month: 'short', day: 'numeric' }).format(new Date(post.frontmatter.date)),
      to: post.path
    }

    if (post.frontmatter.categories.length) {
      data.category = post.frontmatter.categories[0]
    }

    if (post.frontmatter.cover) {
      data.image = {
        src: `${post.frontmatter.cover[0].path}${slug},w_400.${post.frontmatter.cover[0].extension}`,
        alt: post.frontmatter.cover[0].alternativeText
      }
    }

    return data
  })
}

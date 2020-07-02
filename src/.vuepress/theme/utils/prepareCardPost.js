import { getSlugPost } from './index'

export default function prepareCardPost (posts) {
  return posts.map(post => {
    const slug = getSlugPost(post.path)
    const data = {
      id: post.key,
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

    const image = post.frontmatter.thumb || post.frontmatter.cover
    if (image) {
      data.image = {
        src: `${image[0].path}${slug},w_480.${image[0].extension}`,
        alt: image[0].alternativeText
      }
    }

    return data
  })
}

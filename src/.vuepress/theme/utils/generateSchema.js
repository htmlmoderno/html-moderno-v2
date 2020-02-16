const publisher = `{
      "@type": "Organization",
      "@id": "${process.env.URL_BASE}/#organization",
      "url": "${process.env.URL_BASE}",
      "name": "HTML Moderno",
      "logo": [
          {
              "@type": "ImageObject",
              "@id": "${process.env.URL_BASE}/#logo",
              "url": "${process.env.URL_BASE}/images/html-moderno-logo.svg",
              "width": 60,
              "height": 60
          }
      ],
      "foundingDate": "2018",
      "sameAs": [
          "https://twitter.com/htmlmoderno",
          "https://www.facebook.com/htmlmoderno",
          "https://www.facebook.com/groups/htmlmoderno",
          "https://www.instagram.com/htmlmoderno",
          "https://www.youtube.com/channel/UCByMpqccsCqL42LMzKIMnBg"
      ]
    }`

export function generateSchemaNavigation (menuItens) {
  console.log(menuItens)
}

export function generateSchemaAuthor (author) {
  console.log(author)
}

export function generateSchemaCategory (category) {
  console.log(category)
}

export function generateSchemaPost (post) {
  return `{
    "@context": "http://schema.org",
    "@type": "Article",
    "@id": "${process.env.URL_BASE}${post.fullPath}#article",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${process.env.URL_BASE}${post.fullPath}#webpage",
        "url": "${process.env.URL_BASE}${post.fullPath}",
        "isPartOf": {
            "@type": "WebSite",
            "@id": "${process.env.URL_BASE}/#website",
            "url": "${process.env.URL_BASE}",
            "name": "HTML Moderno"
        }
    },
    "headline": "${post.title}",
    "description": "${post.description}",
    "dateModified": "${post.updated_at.replace(' ', 'T')}-03:00",
    "author": {
        "@type": "Person",
        "@id": "${process.env.URL_BASE}${post.author.path}#schema-author",
        "url": "${process.env.URL_BASE}${post.author.path}",
        "name": "${post.author.title}",
        "image": {
            "@type": "ImageObject",
            "@id": "${process.env.URL_BASE}${post.author.path}#author-image",
            "url": "${process.env.URL_BASE}${post.author.frontmatter.avatar}",
            "caption": "${post.author.title}"
        },
        "jobTitle": "${post.author.frontmatter.jobTitle}",
        "description": "${post.author.frontmatter.description}",
        "sameAs": [${post.author.frontmatter.social.map(social => {
          return `
          "${social.url}"`
        })}
        ]
    },
    "datePublished": "${post.date.datetime}",
    "url": "${process.env.URL_BASE}${post.fullPath}",
    "image": [
        {
            "@type": "ImageObject",
            "@id": "${process.env.URL_BASE}${post.fullPath}#post-image",
            "url": "${process.env.URL_BASE}${post.cover.path}.${post.cover.extension}",
            "width": 1280,
            "height": 454
        }
    ],
    "publisher": ${publisher}    
  }`
}

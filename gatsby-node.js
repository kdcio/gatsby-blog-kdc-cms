const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions

  return graphql(`
    {
      allKdccmsContentsBlog(limit: 1000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allKdccmsContentsBlog.edges

    posts.forEach(edge => {
      const slug = edge.node.slug
      createPage({
        path: `/blog/${edge.node.slug}`,
        component: path.resolve(`src/templates/blogPost.js`),
        // additional data can be passed via context
        context: {
          slug,
        },
      })
    })
  })
}

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"

const BlogsList = ({ data }) => {
  const { edges: posts } = data.allKdccmsContentsBlog

  return (
    <div>
      {posts &&
        posts.map(({ node: post }) => (
          <Fragment key={post.slug}>
            <div className="post-preview">
              <Link to={`/blog/${post.slug}`}>
                <h2 className="post-title">{post.title}</h2>
                {post.subtitle && (
                  <h3 className="post-subtitle">{post.subtitle}</h3>
                )}
              </Link>
              <p className="post-meta">
                Posted by <a href="#top">{post.author}</a> on {post.publishDate}
              </p>
            </div>
            <hr />
          </Fragment>
        ))}
    </div>
  )
}

BlogsList.propTypes = {
  data: PropTypes.shape({
    allKDCCMSBlogs: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogsListQuery {
        allKdccmsContentsBlog(sort: { fields: publishDate, order: DESC }) {
          edges {
            node {
              title
              subtitle
              author
              publishDate
              slug
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogsList data={data} count={count} />}
  />
)

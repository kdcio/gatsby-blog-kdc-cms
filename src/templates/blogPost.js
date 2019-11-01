import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ data: { kdccmsBlog } }) => {
  const {
    title,
    subtitle,
    author,
    publishDate,
    body,
    backgroundImage,
  } = kdccmsBlog
  const meta = (
    <span>
      Posted by <a href="#top">{author}</a> on {publishDate}
    </span>
  )

  return (
    <Layout
      title={title}
      subtitle={subtitle}
      meta={meta}
      background={backgroundImage.childImageSharp.fluid}
    >
      <SEO title={`${title} || Gatsby Blog`} />
      <div className="row">
        <div
          className="col-lg-8 col-md-10 mx-auto"
          content={body}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    kdccmsBlog: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($slug: String!) {
    kdccmsBlog(slug: { eq: $slug }) {
      title
      subtitle
      author
      publishDate
      slug
      body
      backgroundImage {
        childImageSharp {
          fluid(maxWidth: 1900, quality: 90) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`

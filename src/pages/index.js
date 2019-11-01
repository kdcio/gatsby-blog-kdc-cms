import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import BlogsList from "../components/blogList"
import SEO from "../components/seo"

const IndexPage = ({ data: { kdccmsPages } }) => {
  const { title, subtitle, backgroundImage } = kdccmsPages
  return (
    <Layout
      title={title}
      subtitle={subtitle}
      background={backgroundImage.childImageSharp.fluid}
    >
      <SEO title={`${title} || Gatsby Blog`} />
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <BlogsList />
          <div className="clearfix">
            <a className="btn btn-primary float-right" href="#top">
              Older Posts &rarr;
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    kdccmsPages(kDCCMSId: { eq: "home-page" }) {
      title
      subtitle
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

export default IndexPage

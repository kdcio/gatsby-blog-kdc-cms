import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = ({ data: { kdccmsPages } }) => {
  const { title, subtitle, body, backgroundImage } = kdccmsPages

  return (
    <Layout
      title={title}
      subtitle={subtitle}
      background={backgroundImage.childImageSharp.fluid}
    >
      <div className="row">
        <div
          className="col-lg-8 col-md-10 mx-auto"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    kdccmsPages(kDCCMSId: { eq: "about-page" }) {
      title
      subtitle
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

export default IndexPage

import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = ({ data: { background } }) => (
  <Layout background={background.childImageSharp.fluid}>
    <div className="row">
      <div className="col-lg-8 col-md-10 mx-auto">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
          nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis
          sit soluta odio, adipisci quas excepturi maxime quae totam ducimus
          consectetur?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
          praesentium recusandae illo eaque architecto error, repellendus iusto
          reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in
          officia voluptas voluptatibus, minus!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          consequuntur magnam, excepturi aliquid ex itaque esse est vero natus
          quae optio aperiam soluta voluptatibus corporis atque iste neque sit
          tempora!
        </p>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    background: file(relativePath: { eq: "about-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage

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
          Want to get in touch? Fill out the form below to send me a message and
          I will get back to you as soon as possible!
        </p>
        <form name="sentMessage" id="contactForm" noValidate>
          <div className="control-group">
            <div className="form-group floating-label-form-group controls">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                id="name"
                required
              />
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <div className="control-group">
            <div className="form-group floating-label-form-group controls">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                id="email"
                required
              />
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <div className="control-group">
            <div className="form-group col-xs-12 floating-label-form-group controls">
              <label>Phone Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Phone Number"
                id="phone"
                required
              />
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <div className="control-group">
            <div className="form-group floating-label-form-group controls">
              <label>Message</label>
              <textarea
                rows="5"
                className="form-control"
                placeholder="Message"
                id="message"
                required
              ></textarea>
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <br />
          <div id="success"></div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              id="sendMessageButton"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    background: file(relativePath: { eq: "contact-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage

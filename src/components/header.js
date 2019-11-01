import PropTypes from "prop-types"
import React from "react"
import BackgroundImage from "gatsby-background-image"

const Header = ({ background, siteTitle }) => (
  <BackgroundImage Tag="header" className="masthead" fluid={background}>
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="site-heading">
            <h1>{siteTitle}</h1>
            <span className="subheading">A Blog Theme by Start Bootstrap</span>
          </div>
        </div>
      </div>
    </div>
  </BackgroundImage>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  background: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

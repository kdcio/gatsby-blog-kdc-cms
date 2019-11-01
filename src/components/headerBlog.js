import PropTypes from "prop-types"
import React from "react"
import BackgroundImage from "gatsby-background-image"

const Header = ({ background, title, meta, subtitle }) => (
  <BackgroundImage Tag="header" className="masthead" fluid={background}>
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="post-heading">
            <h1>{title}</h1>
            <h2 className="subheading">{subtitle}</h2>
            <span className="meta">{meta}</span>
          </div>
        </div>
      </div>
    </div>
  </BackgroundImage>
)

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta: PropTypes.node,
  background: PropTypes.object,
}

Header.defaultProps = {
  title: ``,
  subtitle: ``,
  meta: ``,
}

export default Header

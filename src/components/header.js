import PropTypes from "prop-types"
import React from "react"
import BackgroundImage from "gatsby-background-image"

const Header = ({ background, title, subtitle }) => (
  <BackgroundImage Tag="header" className="masthead" fluid={background}>
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="site-heading">
            <h1>{title}</h1>
            <span className="subheading">{subtitle}</span>
          </div>
        </div>
      </div>
    </div>
  </BackgroundImage>
)

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  background: PropTypes.object,
}

Header.defaultProps = {
  title: ``,
  subtitle: ``,
}

export default Header

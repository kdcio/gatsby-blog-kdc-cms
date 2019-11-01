/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"
import "../scss/clean-blog.scss"

const Layout = ({ title, subtitle, background, children }) => {
  return (
    <>
      <Header title={title} subtitle={subtitle} background={background} />
      <Navigation />
      <div className="container">{children}</div>
      <hr />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  background: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout

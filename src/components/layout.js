/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCircle } from "@fortawesome/free-solid-svg-icons"

import Header from "./header"
import HeaderBlog from "./headerBlog"
import Navigation from "./navigation"
import Footer from "./footer"
import "../scss/clean-blog.scss"

library.add(fab, faCircle)

const Layout = ({ title, subtitle, meta, background, children }) => {
  return (
    <>
      {meta ? (
        <HeaderBlog
          title={title}
          subtitle={subtitle}
          meta={meta}
          background={background}
        />
      ) : (
        <Header title={title} subtitle={subtitle} background={background} />
      )}
      <Navigation />
      {meta ? (
        <article>
          <div className="container">{children}</div>
        </article>
      ) : (
        <div className="container">{children}</div>
      )}
      <hr />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  meta: PropTypes.node,
  background: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout

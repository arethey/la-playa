/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Aos from "aos"
import "aos/dist/aos.css"

const Layout = ({ children }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer className="mt-5 p-3 text-center bg-main-color">
          © {new Date().getFullYear()}, {` `}
          <a href="/">LA PLAYA ESTRELLA BEACH RESORT</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

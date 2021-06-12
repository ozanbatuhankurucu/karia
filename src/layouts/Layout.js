import React, { useState } from "react"
import "normalize.css"
import * as styles from "../assets/styles/layout.module.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SideDrawer from "../components/SideDrawer/SideDrawer"
import Backdrop from "../components/Backdrop/Backdrop"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(prev => !prev)
  }
  const backdropClickHandler = () => {
    setSideDrawerOpen(false)
  }
  return (
    <>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <div className={styles.layout}>
        <Navbar drawerClickHandler={drawerToggleClickHandler} />

        <SideDrawer show={sideDrawerOpen} />

        {sideDrawerOpen && <Backdrop click={backdropClickHandler} />}
        <main className={styles.mainContainer}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

//TODO gatsby-offline plugin araştır ve implemente et

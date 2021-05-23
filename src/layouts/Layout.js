import React, { useState } from "react"
import "normalize.css"
import * as styles from "../assets/styles/layout.module.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SideDrawer from "../components/SideDrawer/SideDrawer"
import Backdrop from "../components/Backdrop/Backdrop"
import "bootstrap/dist/css/bootstrap.min.css"
export default function Layout({ children }) {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(prev => !prev)
  }
  const backdropClickHandler = () => {
    setSideDrawerOpen(false)
  }
  return (
    <div className={styles.layout}>
      <Navbar drawerClickHandler={drawerToggleClickHandler} />

      <SideDrawer show={sideDrawerOpen} />

      {sideDrawerOpen && <Backdrop click={backdropClickHandler} />}
      <main className={styles.mainContainer}>{children}</main>
      <Footer />
    </div>
  )
}

//TODO gatsby-offline plugin araştır ve implemente et

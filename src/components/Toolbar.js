import React from "react"
import DrawerToggleButton from "../components/SideDrawer/DrawerToggleButton"
import { Link } from "gatsby"
import "../assets/styles/toolbar.css"

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <Link to="/">LOGO</Link>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Toolbar

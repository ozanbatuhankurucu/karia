import React from "react"
import Toolbar from "../components/Toolbar"
import "../assets/styles/navbar.css"

export default function Navbar({ drawerClickHandler }) {
  return <Toolbar drawerClickHandler={drawerClickHandler} />
}

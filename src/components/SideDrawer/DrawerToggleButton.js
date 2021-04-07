import React from "react"
import "./DrawerToggleButton.css"
import { FiMenu } from "@react-icons/all-files/fi/FiMenu"
const DrawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <FiMenu color="black" size={24} />
  </button>
)

export default DrawerToggleButton

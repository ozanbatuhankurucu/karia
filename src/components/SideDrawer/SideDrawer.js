import React from "react"
import { Link } from "gatsby"
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome"
import { GiScrew } from "@react-icons/all-files/gi/GiScrew"
import { BiPhoneCall } from "@react-icons/all-files/bi/BiPhoneCall"
import "./SideDrawer.css"

const SideDrawer = props => {
  let drawerClasses = "side-drawer"
  if (props.show) {
    drawerClasses = "side-drawer open"
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <AiOutlineHome className="sidedrawer-icon" color="#7086A4" />
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <GiScrew className="giscrew-phone" color="#7086A4" />
          <Link to="/urunler">Urunler</Link>
        </li>
        <li>
          <BiPhoneCall className="giscrew-phone" color="#7086A4" />
          <Link to="/iletisim">Iletişim</Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer

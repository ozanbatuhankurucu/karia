import React from "react"
import DrawerToggleButton from "../components/SideDrawer/DrawerToggleButton"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown"
import { FaAngleUp } from "@react-icons/all-files/fa/FaAngleUp"
import { GiScrew } from "@react-icons/all-files/gi/GiScrew"
import { GiHexagonalNut } from "@react-icons/all-files/gi/GiHexagonalNut"
import { GiNails } from "@react-icons/all-files/gi/GiNails"
import { FaHardHat } from "@react-icons/all-files/fa/FaHardHat"

import "../assets/styles/toolbar.css"
const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 90, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
const Toolbar = props => {
  //fixed alanını bu şekilde logo olarak isimlendirme yapabiliriz.
  const {
    file: {
      childImageSharp: { fixed: logo },
    },
  } = useStaticQuery(query)
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>

        <Link className="logo-link" to="/">
          <div className="toolbar__logo">
            <Img fixed={logo} objectFit="contain" objectPosition="50% 50%" />
          </div>
        </Link>

        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <Link to="/">Anasayfa</Link>
            </li>
            <li>
              <Link to="/urunler">Ürünler</Link>
              {/* <div className="dropdown">
                <span>
                  Ürünler <FaAngleUp className="angle-up" color="#7086A4" />{" "}
                  <FaAngleDown className="angle-down" color="#7086A4" />
                </span>
                <div className="dropdown-content">
                  <Link to="/">
                    <div className="dropdown-link">
                      <GiScrew className="link-icon" color="#7086A4" />
                      <div className="link-text"> Vida</div>
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="dropdown-link">
                      <GiHexagonalNut className="link-icon" color="#7086A4" />
                      <div className="link-text">Somun</div>
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="dropdown-link">
                      <GiNails className="link-icon" color="#7086A4" />
                      <div className="link-text">Perçin</div>
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="dropdown-link">
                      <div>
                        <FaHardHat className="link-icon" color="#7086A4" />
                      </div>
                      <div className="link-text">İş Güvenliği Malzemeleri</div>
                    </div>
                  </Link>
                </div>
              </div> */}
            </li>
            <li>
              <Link to="/iletisim">İletişim</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

//TODO Product kısmı için menudropdown implement edilecek.

export default Toolbar

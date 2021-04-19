import React from "react"
import DrawerToggleButton from "../components/SideDrawer/DrawerToggleButton"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "../assets/styles/toolbar.css"
const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 70, height: 50) {
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
  console.log(logo)
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <Link to="/">
            <Img fixed={logo} />
          </Link>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

//TODO Product kısmı için menudropdown implement edilecek.

export default Toolbar

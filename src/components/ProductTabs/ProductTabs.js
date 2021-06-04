import React, { useState } from "react"
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap"
import { products } from "../../dummydata/dummydata"
import { GiScrew } from "@react-icons/all-files/gi/GiScrew"
import { GiHexagonalNut } from "@react-icons/all-files/gi/GiHexagonalNut"
import { GiNails } from "@react-icons/all-files/gi/GiNails"
import { FaHardHat } from "@react-icons/all-files/fa/FaHardHat"
import Products from "../Products/Products"
import { useStaticQuery, graphql } from "gatsby"
import "./producttabs.css"
export default function ProductTabs() {
  console.log(products)
  const [activeTab, setActiveTab] = useState("1")

  const data = useStaticQuery(graphql`
    {
      allContentfulCategory(sort: { order: ASC, fields: order }) {
        nodes {
          categoryName
          order
          id
          products {
            id
            name
            picture {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
          subcategories {
            categoryName
            id
            products {
              id
              name
              picture {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)
  const {
    allContentfulCategory: { nodes: categories },
  } = data
  console.log(categories)

  // console.log(data)
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab)
  }
  function iconGenerator(index) {
    if (index === 1 || index === 3) {
      return <GiScrew className="link-icon" color="#7086A4" />
    } else if (index === 2) {
      return <FaHardHat className="link-icon" color="#7086A4" />
    } else if (index === 4) {
      return <GiHexagonalNut className="link-icon" color="#7086A4" />
    } else if (index === 5) {
      return <GiNails className="link-icon" color="#7086A4" />
    }
  }
  return (
    <Container>
      <Row>
        <Col className="tabs-col" xs="12" md="3">
          <Nav className="vertical-nav" tabs vertical pills>
            {categories.map((category, index) => {
              const { categoryName, id } = category
              return (
                <NavItem key={id}>
                  <NavLink
                    className={` ${
                      activeTab === (index + 1).toString() ? "active-tab" : ""
                    }`}
                    onClick={() => {
                      toggle((index + 1).toString())
                    }}
                  >
                    <div className="dropdown-link">
                      {/* <GiScrew className="link-icon" color="#7086A4" /> */}
                      {iconGenerator(index + 1)}
                      <div className="link-text"> {categoryName}</div>
                    </div>
                  </NavLink>
                </NavItem>
              )
            })}
          </Nav>
        </Col>
        <Col xs="12" md="9">
          <TabContent activeTab={activeTab}>
            {categories.map((category, index) => {
              return (
                <TabPane tabId={(index + 1).toString()} key={category.id}>
                  <Products products={category} />
                </TabPane>
              )
            })}
          </TabContent>
        </Col>
      </Row>
    </Container>
  )
}

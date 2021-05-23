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
import classnames from "classnames"
import { products } from "../../dummydata/dummydata"
import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown"
import { FaAngleUp } from "@react-icons/all-files/fa/FaAngleUp"
import { GiScrew } from "@react-icons/all-files/gi/GiScrew"
import { GiHexagonalNut } from "@react-icons/all-files/gi/GiHexagonalNut"
import { GiNails } from "@react-icons/all-files/gi/GiNails"
import { FaHardHat } from "@react-icons/all-files/fa/FaHardHat"
import "./products.css"
export default function Products() {
  console.log(products)
  const [activeTab, setActiveTab] = useState("1")

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab)
  }
  return (
    <Container fluid>
      <Row>
        <Col xs="6" sm="4" md="3">
          <Nav tabs vertical pills>
            <NavItem>
              <NavLink
                className={` ${activeTab === "1" ? "active-tab" : ""}`}
                onClick={() => {
                  toggle("1")
                }}
              >
                <div className="dropdown-link">
                  <GiScrew className="link-icon" color="#7086A4" />
                  <div className="link-text"> Vida</div>
                </div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={` ${activeTab === "2" ? "active-tab" : ""}`}
                onClick={() => {
                  toggle("2")
                }}
              >
                Civata
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={` ${activeTab === "3" ? "active-tab" : ""}`}
                onClick={() => {
                  toggle("3")
                }}
              >
                <div className="dropdown-link">
                  <GiHexagonalNut className="link-icon" color="#7086A4" />
                  <div className="link-text">Somun</div>
                </div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={` ${activeTab === "4" ? "active-tab" : ""}`}
                onClick={() => {
                  toggle("4")
                }}
              >
                <div className="dropdown-link">
                  <GiNails className="link-icon" color="#7086A4" />
                  <div className="link-text">Perçin</div>
                </div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={` ${activeTab === "5" ? "active-tab" : ""}`}
                onClick={() => {
                  toggle("5")
                }}
              >
                <div className="dropdown-link">
                  <div>
                    <FaHardHat className="link-icon" color="#7086A4" />
                  </div>
                  <div className="link-text">İş Güvenliği Malzemeleri</div>
                </div>
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col xs="6" sm="6" md="9">
          {" "}
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <h4>Tab 1 Contents</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </Container>
  )
}

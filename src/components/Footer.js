import React from "react"
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { Container, Row, Col } from "reactstrap"
import "../assets/styles/footer.css"

export default function Footer({ children }) {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs="6">asfşaşfa</Col>
          <Col xs="6">asfafsa</Col>
        </Row>
      </Container>
      <div className="footer-container">
        <div className="footer-info">
          <div className="footer-col">
            Ahmet Uslu <br />
            Muhammet Uslu
          </div>
          <div className="footer-col">info@kariaendustri.com</div>
          <div className="footer-col">
            <a href="https://www.facebook.com/kariastore/" target="_blank">
              <FaFacebook className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/kariaendustri/?hl=tr"
              target="_blank"
            >
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>
        <div className="copyright">
          Proudly made by Ozan Batuhan Kurucu & Murathan Akın
        </div>
      </div>
    </footer>
  )
}

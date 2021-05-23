import React from "react"
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
import { BsPerson } from "@react-icons/all-files/bs/BsPerson"
import { BiPhoneCall } from "@react-icons/all-files/bi/BiPhoneCall"

import { Container, Row, Col } from "reactstrap"
import "../assets/styles/footer.css"

export default function Footer({ children }) {
  return (
    <footer>
      <Container className="footer-cont">
        <Row>
          <Col className="p-0 right-col" md="6" xs="12">
            <div className="list-cont">
              <figure>
                <figcaption>Iletişim</figcaption>
                <ul className="footer-list">
                  <li className="info-li mt-1">
                    <AiOutlineMail
                      className="social-icon mr-2"
                      color="#EFF2F6"
                    />
                    info@kariaendustri.com
                  </li>

                  <li className="info-li mt-1">
                    {" "}
                    <BiPhoneCall
                      className="social-icon mr-2"
                      color="#EFF2F6"
                    />{" "}
                    <a href="tel:555-688-9163">+90 555 688 91 63</a>
                  </li>
                  <li className="info-li mt-1">
                    <BsPerson className="social-icon mr-2" color="#EFF2F6" />
                    Ahmet Uslu
                  </li>
                  <li className="mt-1">
                    <div className="footer-info-large">
                      <ul className="social-icons-list">
                        <li>
                          <a
                            href="https://www.facebook.com/kariastore/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaFacebook
                              className="social-icon"
                              color="#EFF2F6"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/kariaendustri/?hl=tr"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaInstagram
                              className="social-icon"
                              color="#EFF2F6"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </figure>
            </div>
          </Col>
          <Col className="p-0 left-col" md="6" xs="12">
            <div className="footer-info">
              <ul className="social-icons-list">
                <li>
                  <a
                    href="https://www.facebook.com/kariastore/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook className="social-icon" color="#EFF2F6" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/kariaendustri/?hl=tr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="social-icon" color="#EFF2F6" />
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          <div className="copyright">
            Proudly made by Ozan Batuhan Kurucu & Murathan Akın
          </div>
        </Row>
      </Container>
    </footer>
  )
}

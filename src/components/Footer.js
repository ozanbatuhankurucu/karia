import React from "react"
import { Grid, GridItem, Box, Container } from "@chakra-ui/react"
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import "../assets/styles/footer.css"

export default function Footer({ children }) {
  return (
    <footer>
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

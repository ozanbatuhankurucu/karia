import React from "react"
import Layout from "../layouts/Layout"
import { Container, Row, Col } from "reactstrap"

export default function Contact() {
  return (
    <Layout>
      <Container>
        <Row>
          <Col xs="12" md="8" lg="8" xl="8">
            <h2>Bize Ulaşın</h2>
            <h3>Formu doldurarak bize ulaşabilirsiniz.</h3>
          </Col>
          <Col xs="12" md="4" lg="4" xl="4">
            <h2>Bize Ulaşın</h2>
            <h3>Formu doldurarak bize ulaşabilirsiniz.</h3>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

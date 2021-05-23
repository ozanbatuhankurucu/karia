import React from "react"
import Layout from "../layouts/Layout"
import { Container, Row, Col } from "reactstrap"
import Products from "../components/Products/Products"
export default function ProductsPage() {
  return (
    <Layout>
      <Container className="mt-4">
        <Row>
          <Col>
            <Products />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

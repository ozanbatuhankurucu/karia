import React from "react"
import Layout from "../layouts/Layout"
import { Container, Row, Col } from "reactstrap"
import ProductTabs from "../components/ProductTabs/ProductTabs"
export default function ProductsPage() {
  return (
    <Layout>
      <Container className="mt-4">
        <Row>
          <Col>
            <ProductTabs />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

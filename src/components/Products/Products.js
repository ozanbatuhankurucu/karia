import React from "react"
import { Container, Row, Col } from "reactstrap"
import Product from "../Product/Product"
import "./products.css"
export default function Products({ products }) {
  console.log(products)

  return (
    <>
      {products.products !== null ? (
        <>
          {" "}
          <Row>
            <Col sm="12">
              <h3 className="text-center">
                {products.categoryName.toUpperCase()}
              </h3>
            </Col>
          </Row>
          <Row>
            {products.products.map((product, index) => {
              return (
                <Col
                  className="product-col"
                  key={product.id}
                  lg="3"
                  md="4"
                  sm="4"
                  xs="6"
                >
                  <Product product={product} />
                </Col>
              )
            })}
          </Row>
        </>
      ) : (
        <Container fluid>
          <Row>
            <Col sm="12">
              <h3 className="text-center">
                {products.categoryName.toUpperCase()}
              </h3>
            </Col>
          </Row>
          {products.subcategories.map(subcategory => {
            const { categoryName, id, products } = subcategory

            return (
              <React.Fragment key={id}>
                <Row>
                  <Col sm="12">
                    <h6>{categoryName.toUpperCase()}</h6>
                  </Col>
                </Row>
                {products !== null && (
                  <Row>
                    {products.map((product, index) => {
                      return (
                        <Col
                          className="product-col"
                          key={product.id}
                          lg="3"
                          md="4"
                          sm="4"
                          xs="6"
                        >
                          <Product product={product} />
                        </Col>
                      )
                    })}
                  </Row>
                )}
              </React.Fragment>
            )
          })}
        </Container>
      )}
    </>
  )
}

import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { graphql, useStaticQuery } from "gatsby"
import "./product.css"
const query = graphql`
  query {
    file(relativePath: { eq: "vida.webp" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default function Product({ product }) {
  const { name, picture } = product

  const productPic = picture?.fluid

  return (
    <div className="product">
      {productPic && (
        <Img fluid={productPic} objectFit="contain" objectPosition="50% 50%" />
      )}
      <div className="name-cont">
        <span className="product-name">{name}</span>
      </div>
    </div>
  )
}

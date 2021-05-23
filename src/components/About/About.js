import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Img from "gatsby-image/withIEPolyfill"
import "./about.css"

const query = graphql`
  query {
    file(relativePath: { eq: "mag2.png" }) {
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
export default function About() {
  const {
    file: {
      childImageSharp: { fluid: aboutLeft },
    },
  } = useStaticQuery(query)
  console.log(aboutLeft)
  //TODO responsive kismina bakilacak
  return (
    <div className="about-parent">
      <Container className="about-cont">
        <Row>
          <Col className="img-col" lg="4" xs="12">
            <Img
              className="about-pic"
              fluid={aboutLeft}
              objectFit="contain"
              objectPosition="50% 50%"
            />
          </Col>
          <Col lg="8" xs="12">
            <h1 className="about-title">HAKKIMIZDA</h1>
            <p>
              Karia Endüstriyel Ürünler 2020 yılında, ortak özellikleri
              konusunda tecrübeli, güvenilir, çözüm üreten ve müşteri odaklı
              olan iki kardeş tarafından İzmir’de kurulmuş ve faaliyetlerini ege
              bölgesinde sürdürmektedir.{" "}
              <span>Şirketin ana faaliyet konusu;</span> çeşitli sektörlerde
              üretim alanında faaliyet gösteren tüm firmalara bağlantı
              elemanları ve iş güvenliği malzemeleri tedariğidir.
            </p>
            <p>
              {" "}
              <span>Misyonumuz;</span> Kalite ve fiyat dengesini koruyarak,
              firmaların beklentisine en uygun, doğru çözümler üreterek,
              karşılıklı faydayı sağlamaktır.
            </p>

            <p>
              <span>Vizyonumuz;</span> Karşılıklı çıkarlar gözetilerek, gelişen
              ve büyüme hedefi olan şirketlerle birlikte, güvene dayalı uzun
              süreli iş ilişkileri kurarak büyümek ve istihdama katkı
              sağlamaktır.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

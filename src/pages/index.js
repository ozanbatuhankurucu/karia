import React from "react"
import Layout from "../layouts/Layout"
import BackgroundSlider from "gatsby-image-background-slider"
import { useStaticQuery, graphql } from "gatsby"
import About from "../components/About/About"
import "../assets/styles/index.css"

export default function Home() {
  return (
    <Layout>
      <div className="background-slider-cont">
        <BackgroundSlider
          query={useStaticQuery(graphql`
            query {
              backgrounds: allFile(
                filter: { sourceInstanceName: { eq: "backgrounds" } }
              ) {
                nodes {
                  relativePath
                  childImageSharp {
                    fluid(maxWidth: 4000, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          `)}
          initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
          transition={4} // transition duration between images
          duration={5}
        />
      </div>
      <About />
    </Layout>
  )
}

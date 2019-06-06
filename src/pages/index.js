import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'

import SEO from '../components/seo'
import Name from '../components/name'
import Portfolio from '../components/portfolio'
import favicon16 from '../images/favicon-16x16.png'
import favicon32 from '../images/favicon-32x32.png'

import '../styles/main.scss'

const IndexPage = props => (
  <Layout>
    <Helmet
    
    link={[
      { rel: "icon", type: "image/png", sizes: "16x16", href: `${favicon16}` },
      { rel: "icon", type: "image/png", sizes: "32x32", href: `${favicon32}` },
      
    ]}
    >
      
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:600|Pacifico"
        rel="stylesheet"
      />
      
      <link
        href="https://fonts.googleapis.com/css?family=Cantata+One|Open+Sans:300&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <SEO title="Todd Fichman" keywords={[`Todd Fichman`, 'Javascript', 'React', 'React.js', 'front-end', 'CSS']} />
    <Name />
    <Portfolio
      brewSkiImage={props.data.brewSki.childImageSharp.fluid}
      FECImage={props.data.fec.childImageSharp.fluid}
      lyricsImage={props.data.lyrics.childImageSharp.fluid}
      blogImage={props.data.blog.childImageSharp.fluid}
    />
  </Layout>
)

export const pageQuery = graphql`
  query {
    brewSki: file(relativePath: { eq: "brewSkiImage.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fec: file(relativePath: { eq: "FECImage.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lyrics: file(relativePath: { eq: "lyricsImage.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    blog: file(relativePath: { eq: "gatsbyBlogImage.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage

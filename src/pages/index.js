import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Name from '../components/name'
import Portfolio from '../components/portfolio'

import '../styles/main.scss'

const IndexPage = props => (
  <Layout>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Cantata+One|Open+Sans:300&display=swap"
        rel="stylesheet"
      />
      <meta
        name="google-site-verification"
        content="WfQTT9ixJsZBiIHEVnPw--VdlIOVdHQE0QMunOGEl-Y"
      />
    </Helmet>
    <SEO
      title="Todd Fichman"
      keywords={[
        `Todd Fichman`,
        'Javascript',
        'React',
        'React.js',
        'front-end',
        'CSS',
      ]}
    />
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

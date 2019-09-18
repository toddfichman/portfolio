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
    <Portfolio />
  </Layout>
)

export default IndexPage

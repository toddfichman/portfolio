import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>This Page Cannot Be Found</h1>
    <br />
    <p>Head back to the <Link to="/">main page</Link></p>
  </Layout>
)

export default NotFoundPage

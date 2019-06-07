import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h2 style={{marginTop: '7rem'}}>This Page Cannot Be Found</h2>
    <br />
    <p>Head back to the <Link to="/">main page</Link></p>
  </Layout>
)

export default NotFoundPage

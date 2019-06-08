import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import '../styles/main.scss'

export default function Success() {
  return (
    <React.Fragment>
      <SEO title="Success" />

      <div className="success-container text-focus-in" >
        <h2 className="success-header">Form Successfully Submitted</h2>
        <p className="success-sub-text">
          Return to the{' '}
          <Link className="success-link" to="/">
            Home Page
          </Link>
        </p>
      </div>
    </React.Fragment>
  )
}

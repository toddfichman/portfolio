import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import '../styles/main.scss'

export default function Success() {
  return (
    <div className="success-container">
      <SEO title="Success" />
      <h2 className="success-header">Form Successfuly Submitted</h2>
      <p className="success-sub-text">
        Return to the{' '}
        <Link className="success-link" to="/">
          Home Page
        </Link>
      </p>
    </div>
  )
}

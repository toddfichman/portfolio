import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default function Success() {
  return (
    <div className="success-container">
      <h2 className="success-header">Form Successfuly Submitted</h2>
      <p className="success-sub-text">
        Return to the <Link className="success-link" to="/">Home Page</Link>
      </p>
    </div>
  )
}

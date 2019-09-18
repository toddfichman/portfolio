import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'
// import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import brewSkiMP4 from '../images/brewski.mp4'
import lyricSearchMP4 from '../images/lyrics.mp4'
import FECMP4 from '../images/FEC.mp4'
import soundOffMP4 from '../images/soundOff.mp4'

export default class Bio extends Component {
  state = {
    hasScrolled: false,
    transform: null,
  }

  render() {
    return (
      <React.Fragment>
        <div className="portfolio">
          <div className="portfolio-arrow text-focus-in">
            <FontAwesomeIcon size="5x" icon={faChevronDown} />
          </div>

          {/* <FontAwesomeIcon icon={faAngleDoubleDown} className="arrow-down"/> */}
          <Fade>
            <h3 className="portfolio-header">Hey, thanks for stopping by.</h3>
            <h3 className="portfolio-header">
              I'm Todd Fichman and I'm a Front-End Developer with
              Full-Stack experience using Node.js.
            </h3>
            <h3 className="portfolio-header">
              Check out some of the stuff I've made.
            </h3>
          </Fade>

          <Fade>
            <div className="portfolio-section">
              <h3 className="portfolio-item-header">
                Ski Report & Local Brewery Locator Web App
              </h3>
              <div className="portfolio-pic-container">
                <a
                  href="https://brewski-86f48.firebaseapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 
                  <video loop muted autoPlay playsInline className="portfolio-pic-content">
                    <source src={brewSkiMP4} type="video/mp4" />
                  </video>
                </a>
              </div>
              

              <div className="portfolio-demo-link-container">
                <a
                  href="https://brewski-86f48.firebaseapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-demo-link"
                >
                  Demo
                </a>
              </div>
              <h2>Built With: </h2>
              <ul className="portfolio-tech-list">
                <li>
                  {' '}
                  <FontAwesomeIcon icon={faAngleRight} />{' '}
                  <span className="portfolio-tech-list-text">React.js</span>
                </li>
                <li>
                  {' '}
                  <FontAwesomeIcon icon={faAngleRight} />{' '}
                  <span className="portfolio-tech-list-text">axios</span>
                </li>
                <li>
                  {' '}
                  <FontAwesomeIcon icon={faAngleRight} />{' '}
                  <span className="portfolio-tech-list-text">
                    Google Maps API, World Weather Online API, & the Open
                    Brewery DB API
                  </span>
                </li>
                <li>
                  {' '}
                  <FontAwesomeIcon icon={faAngleRight} />{' '}
                  <span className="portfolio-tech-list-text">reactstrap</span>
                </li>
              </ul>

              {/* <p className="portfolio-text">
              Above is a screen shot of a web appliation meant to provide the
              user with salient weather information for a day skiing as well as
              a list of nearby breweries to provide another activity once their
              long day of skiing is over. It was built using React.js and
              Reactstrap and the information is pulled from the World Weather
              Online API, the Open Brewery DB API, and Google Maps API.{' '}
            </p> */}
            </div>
          </Fade>
          <Fade>
            <div className="portfolio-section">
              <h3 className="portfolio-item-header">Lyrics Search Engine</h3>

              <div className="portfolio-pic-container">
                <a
                  href="https://react-lyrics-69891.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                  <video loop muted autoPlay playsInline className="portfolio-pic-content">
                    <source src={lyricSearchMP4} type="video/mp4" />
                  </video>
                </a>
              </div>

              <div className="portfolio-demo-link-container">
                <a
                  href="https://react-lyrics-69891.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-demo-link"
                >
                  Demo
                </a>
              </div>
              <h2>Built With: </h2>
              <ul className="portfolio-tech-list">
                <li>
                  {' '}
                  <FontAwesomeIcon icon={faAngleRight} />{' '}
                  <span className="portfolio-tech-list-text">
                    React.js (Context API)
                  </span>
                </li>
                <li>
                  {' '}
                  <FontAwesomeIcon icon={faAngleRight} />{' '}
                  <span className="portfolio-tech-list-text">axios</span>
                </li>
                <li>
                  {' '}
                  <FontAwesomeIcon icon={faAngleRight} />{' '}
                  <span className="portfolio-tech-list-text">
                    Musixmatch API
                  </span>
                </li>
                <li>
                  {' '}
                  <FontAwesomeIcon icon={faAngleRight} />{' '}
                  <span className="portfolio-tech-list-text">boostrap</span>
                </li>
              </ul>
            </div>
          </Fade>
          <Fade>
            <div className="portfolio-section">
              <h3 className="portfolio-item-header">
                Medical Practice Website
              </h3>

              <div className="portfolio-pic-container">
                <a
                  href="https://fichmaneyecenter.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <video loop muted autoPlay playsInline className="portfolio-pic-content">
                    <source src={FECMP4} type="video/mp4" />
                  </video>
                </a>
              </div>

              <div className="portfolio-demo-link-container">
                <a
                  href="https://fichmaneyecenter.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-demo-link"
                >
                  Demo
                </a>
              </div>
              <h2>Built With: </h2>
              <ul className="portfolio-tech-list">
                <li>
                  {' '}
                  <FontAwesomeIcon icon={faAngleRight} />{' '}
                  <span className="portfolio-tech-list-text">Next.js</span>
                </li>
                <li>
                  {' '}
                  <FontAwesomeIcon icon={faAngleRight} />{' '}
                  <span className="portfolio-tech-list-text">Sass</span>
                </li>
                <li>
                  {' '}
                  <FontAwesomeIcon icon={faAngleRight} />{' '}
                  <span className="portfolio-tech-list-text">
                    Google Maps API
                  </span>
                </li>
                <li>
                  {' '}
                  <FontAwesomeIcon icon={faAngleRight} />{' '}
                  <span className="portfolio-tech-list-text">
                    React Boostrap
                  </span>
                </li>
              </ul>
            </div>
          </Fade>
          
          <Fade>
            <div className="portfolio-section">
              <h3 className="portfolio-item-header">Message Board</h3>
              {/* <div className="portfolio-pic-container">
                <a
                  href="https://trusting-morse-7b054d.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img fluid={this.props.blogImage} alt="GATSBY_BLOG" />
                </a>
              </div> */}
              <div className="portfolio-pic-container">
                <a
                  href="https://react-redux-message-board.firebaseapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                  <video loop muted autoPlay playsInline className="portfolio-pic-content">
                    <source src={soundOffMP4} type="video/mp4" />
                  </video>
                </a>
              </div>

              <div className="portfolio-demo-link-container">
                <a
                  href="https://react-redux-message-board.firebaseapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-demo-link"
                >
                  Demo
                </a>
              </div>
              <h2>Built With: </h2>
              <ul className="portfolio-tech-list">
                <li>
                  {' '}
                  <FontAwesomeIcon icon={faAngleRight} />{' '}
                  <span className="portfolio-tech-list-text">React.js</span>
                </li>
                <li>
                  {' '}
                  <FontAwesomeIcon icon={faAngleRight} />{' '}
                  <span className="portfolio-tech-list-text">Redux</span>
                </li>
                <li>
                  {' '}
                  <FontAwesomeIcon icon={faAngleRight} />{' '}
                  <span className="portfolio-tech-list-text">Firebase & FireStore</span>
                </li>
                <li>
                  {' '}
                  <FontAwesomeIcon icon={faAngleRight} />{' '}
                  <span className="portfolio-tech-list-text">Materialize</span>
                </li>
              </ul>
            </div>
          </Fade>
          <Fade>
            <div className="contact-form-container">
              <label className="contact-form-header">Contact Me</label>
              <form
                className="contact-form"
                data-netlify="true"
                netlify-honeypot="bot-field"
                name="contact"
                method="post"
                action="/success"
              >
                <input type="hidden" name="contact" value="contact" />
                <label className="contact-form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="contact-form-input"
                />
                <label className="contact-form-label">Email</label>
                <input
                  name="email"
                  placeholder="your@email.com"
                  type="email"
                  className="contact-form-input"
                />
                <label className="contact-form-label">Message</label>
                <textarea
                  name="message"
                  className="contact-form-input"
                  placeholder="What's up?"
                />
                <button type="submit" className="contact-form-btn">
                  Send
                </button>
              </form>
            </div>
          </Fade>
        </div>
      </React.Fragment>
    )
  }
}

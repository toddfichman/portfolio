import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleDoubleDown,
  faArrowDown,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

export default class Bio extends Component {
  state = {
    hasScrolled: false,
    transform: null,
  }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll)
  // }
  // componentWillUnmount() {
  //   window.addEventListener("scroll", this.handleScroll)
  // }

  // handleScroll(event) {
  //   let scrollTop = event.srcElement.body.scrollTop,
  //     itemTranslate = Math.min(0, scrollTop / 3 - 60)

  //   this.setState({
  //     transform: itemTranslate,
  //   })
  //   console.log(itemTranslate)
  // }

  // displayScrollSignal() {
  //   if (window.onscroll === true) {

  //   }
  // }

  render() {
    return (
      <React.Fragment>
        <div className="portfolio">
          <div className="portfolio-arrow text-focus-in">
            <FontAwesomeIcon size="5x" icon={faChevronDown} />
          </div>

          {/* <FontAwesomeIcon icon={faAngleDoubleDown} className="arrow-down"/> */}
          <h3 className="portfolio-header">Hey, thanks for visting my site.</h3>
          <h3 className="portfolio-header">
            I'm Todd Fichman and I'm a Front-End Developer working on my
            Full-Stack knowledge
          </h3>
          <h3 className="portfolio-header">
            Check out some of the stuff I've made.
          </h3>

          <div className="portfolio-section">
            <h3 className="portfolio-item-header">
              Ski Report & Local Brewery Locator Web App
            </h3>
            <Fade>
              <div className="portfolio-pic-container">
                <a
                  href="https://gentle-tor-64276.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img fluid={this.props.brewSkiImage} alt="WEATHER_APP" />
                </a>
              </div>
            </Fade>

            <div className="portfolio-demo-link-container">
              <a
                href="https://gentle-tor-64276.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-demo-link"
              >
                Check it
              </a>
            </div>
            <p>Make With - </p>
            <ul>
              <li>React.js</li>
              <li>axios</li>
              <li>Google Maps API</li>
              <li>bootstap</li>
            </ul>

            <p className="portfolio-text">
              Above is a screen shot of a web appliation meant to provide the
              user with salient weather information for a day skiing as well as
              a list of nearby breweries to provide another activity once their
              long day of skiing is over. It was built using React.js and
              Reactstrap and the information is pulled from the World Weather
              Online API, the Open Brewery DB API, and Google Maps API.{' '}
            </p>
          </div>
          <div className="portfolio-section">
            <h3 className="portfolio-item-header">Medical Practice Website</h3>
            <Fade>
              <div className="portfolio-pic-container">
                <a
                  href="https://fichman-eye-center.toddfichman.now.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img fluid={this.props.FECImage} alt="FICHMAN-EYE-CENTER" />
                </a>
              </div>
            </Fade>
            <div className="portfolio-demo-link-container">
              <a
                href="https://fichman-eye-center.toddfichman.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-demo-link"
              >
                Check it
              </a>
            </div>
            <p className="portfolio-text">
              Above is a screen shot of a web appliation meant to provide the
              user with salient weather information for a day skiing as well as
              a list of nearby breweries to provide another activity once their
              long day of skiing is over. It was built using React.js and
              Reactstrap and the information is pulled from the World Weather
              Online API, the Open Brewery DB API, and Google Maps API.{' '}
            </p>
          </div>
          <div className="portfolio-section">
            <h3 className="portfolio-item-header">Lyrics Search Engine</h3>
            <Fade>
              <div className="portfolio-pic-container">
                <a
                  href="https://react-lyrics-69891.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img fluid={this.props.lyricsImage} alt="LYRICS_SEARCH_APP" />
                </a>
              </div>
            </Fade>
            <div className="portfolio-demo-link-container">
              <a
                href="https://react-lyrics-69891.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-demo-link"
              >
                Check it
              </a>
            </div>
            <p>Make With - </p>
            <ul>
              <li>React Context API</li>
              <li>Musixmatch Developer API</li>
              <li>bootstap</li>
            </ul>
            <p className="portfolio-text">
              Above is a screen shot of a web appliation meant to provide the
              user with salient weather information for a day skiing as well as
              a list of nearby breweries to provide another activity once their
              long day of skiing is over. It was built using React.js and
              Reactstrap and the information is pulled from the World Weather
              Online API, the Open Brewery DB API, and Google Maps API.{' '}
            </p>
          </div>
        <div className="contact-form-container">
          <label className="contact-form-header">Contact</label>
          <form className="contact-form">
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
            <textarea name="message" className="contact-form-input" placeholder="What's up?"/>
            <button className="contact-form-btn">Send</button>
          </form>
        </div>
        </div>
      </React.Fragment>
    )
  }
}

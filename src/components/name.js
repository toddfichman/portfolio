import React, { Component } from "react";

export default class Name extends Component {
  state = {
    modalOpen: false,
  }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen })
    console.log("togglw", this.state.modalOpen)
  }

  render() {
    return (
      <section className="name-section">
        <div
          className="overlay"
          style={{ width: this.state.modalOpen ? "100%" : "0" }}
        >
          <a
            href="#"
            className="closebtn"
            onClick={this.toggleModal}
          >
            &times;
          </a>

          <div className="overlay-content">
            {this.state.modalOpen ? (
              <>
                <a href={"mailto:toddfichman@gmail.com" }>toddfichman@gmail.com</a>
                <a href="https://www.linkedin.com/in/todd-fichman-438a4016b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/toddfichman" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://docs.google.com/document/d/1sOESCLWi3butVgIOkAwMxpFz8PibzIX6jKij8RSR8Zo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
              </>
            ) : null}
          </div>
        </div>
        <h3 className="contact-top" onClick={this.toggleModal.bind(this)}>
          <div
            to="/"
            style={{
              
              textDecoration: `none`,
              cursor: 'pointer'
            }}
            className="text-focus-in"
          >
            Contact
          </div>
        </h3>
        <div className="name">
          <h1 className="text-focus-in">Todd</h1>
          <h1 className="text-focus-in">Fichman</h1>
        </div>
      </section>
    )
  }
}

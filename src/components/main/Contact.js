import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import {Element} from 'react-scroll'

class Contact extends Component {
  render() {
    return (
      <Element name="contact">
        <Fade>

        <section name="contact" className="section-contact">
          <div className="container about-grid">
            <Fade>
              <h1>contact</h1>
            </Fade>
            <ul className="accordion">
              <li className="tab">
                <div className="social mail">
                  <a href="#"></a>
                </div>
                <div className="content">
                  <h3>email: mickozr@gmail.com</h3>
                  <p>You can contact me on my personal email</p>
                </div>
              </li>
              <li className="tab">
                <div className="social twitter">
                  <a href="https://twitter.com/McMick0?lang=en" target="_blank"></a>
                </div>
                <div className="content">
                  <h3>Twitter</h3>
                  <p>Also you can contact me on my twitter</p>
                </div>
              </li>
              <li className="tab">
                <div className="social facebook">
                  <a href="https://www.facebook.com/milos.mandic1" target="_blank"></a>
                </div>
                <div className="content">
                  <h3>Facebook</h3>
                  <p>You can contact me on my personal facebook</p>
                </div>
              </li>
              <li className="tab">
                <div className="social instagram">
                  <a href="https://www.instagram.com/mcmickoo/?hl=en" target="_blank"></a>
                </div>
                <div className="content">
                  <h3>Instagram</h3>
                  <p>You can contact me on my personal instagram</p>
                </div>
              </li>
            </ul>
          </div>
        </section>            
        </Fade>
      </Element>
    )
  }
}

export default Contact;
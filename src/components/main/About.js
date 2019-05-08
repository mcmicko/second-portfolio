import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import {Element} from 'react-scroll'

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

 class About extends Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };
  render() {
    const { name, email, message } = this.state;
    return (
      <Element id="about" name="about">
        <section className="section-about">
          <div className="container about-grid">
            <Fade>
              <h1>about</h1>          
            </Fade>
            <Fade>
              <div>
                <form onSubmit={this.handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <p>
                    <label>
                      Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
                    </label>
                  </p>
                  <p>
                    <label>
                      Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
                    </label>
                  </p>
                  <p>
                    <label>
                      Message: <textarea name="message" value={message} onChange={this.handleChange} />
                    </label>
                  </p>
                   <input type="hidden" name="form-name" value="contact" />
                  <p>
                    <button type="submit">Send</button>
                  </p>
                </form>                                
              </div>
            </Fade>
          </div>
        </section>
      </Element>

    )
  }
}
export default About;
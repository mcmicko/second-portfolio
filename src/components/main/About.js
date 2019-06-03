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
    handleChange = e => {this.setState({[e.target.name]: e.target.value})}

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
              <div className="about-content">
                Hello, my name is Milos, I'm 26 years old and I live in Zrenjanin, Serbia. 
                I have a degree from the Technical Faculty in Zrenjanin, in the field of Industrial Engineering. 
                My passion is to programing. My hobby grew into love. I like to create something new and funcional in a blank page, and that other people benefit from it.                    
              </div>
            </Fade>
          </div>
        </section>
      </Element>

    )
  }
}
export default About;
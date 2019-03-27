import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import {Element} from 'react-scroll'


 class About extends Component {
  render() {
    return (
      <Element id="about" name="about">
        <section className="section-about">
          <div className="container about-grid">
            <Fade>
              <h1>about</h1>          
            </Fade>
            <Fade>
              <div>
                <h3>location: Zrenjanin, Serbia</h3>
                <h3>born: 29.3.1993</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, totam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam illum reiciendis quisquam odio maiores sunt accusantium itaque iure laboriosam saepe totam quis dolorum architecto corrupti ex, mollitia, iusto nemo?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam illum reiciendis quisquam odio maiores sunt accusantium itaque iure laboriosam saepe totam quis dolorum architecto corrupti ex, mollitia, iusto nemo?</p>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam illum reiciendis quisquam odio maiores sunt accusantium itaque iure laboriosam saepe totam quis dolorum architecto corrupti ex, mollitia, iusto nemo?</p>
              </div>
            </Fade>
          </div>
        </section>
      </Element>

    )
  }
}
export default About;
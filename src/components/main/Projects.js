import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import {Element} from 'react-scroll'
import {TiArrowForwardOutline } from 'react-icons/ti'

class Projects extends Component {
  render() {
    return (
      <Element name="projects">
        <section id="projects">
          <Fade>
            <h1>projects</h1>
          </Fade>
          <Fade>
            <div className="container">
              <div className="project-card">
                <div id="my-image">
                  <div className="my-web">
                    <a href="https://quiet-hollows-55212.herokuapp.com/" target="_blank">
                      <TiArrowForwardOutline size="6rem" value={{className:"icon"}}/>
                    </a>
                  </div>
                </div>   
                <p>mern(mongodb, express, react, node) stack</p>     
              </div>
            </div>          
          </Fade>
        </section>             
      </Element>
 

    )
  }
}

export default Projects;
import React from 'react';
import Particles from 'react-particles-js'
import ScrollAnimation from 'react-animate-on-scroll'
import {Spring} from 'react-spring'


export default class Header extends React.Component {
	render() {
		return (
			<ScrollAnimation animateIn="fadeIn">
				<div id="my-card">
            <Spring
              from={{marginTop: '110rem'}}
              to={{marginTop: '0'}}
              duration={10}
            >{props => (
              <div style={props}><h1 id="my-name">milos</h1><h1 id="my-surname">mandic</h1></div>
            )}
            </Spring>
				</div>
        <div className="scroll-down"></div>   

				<Particles className="particles" params={particleOpt}/>
			</ScrollAnimation>
		);
	}
}


const particleOpt = {
	"particles": {
    "number": {
      "value": 147,
      "density": {
        "enable": true,
        "value_area": 1420.4657549380909
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.14204657549380909,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 7.032967032967034,
        "opacity_min": 0.3276723276723277,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 142.0465754938091,
      "color": "#9571d9",
      "opacity": 0.2551164387345227,
      "width": 0
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 5445.118727262681,
        "rotateY": 4813.800613956863
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 100,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true	
}
import React, {Component} from 'react'
// import {Link} from 'gatsby';
import {Transition,animated} from 'react-spring'
import {Link} from 'react-scroll'
import classnames from 'classnames'



export default class Navbar extends Component{
	state = {
		openNav: false,
		prevScrollpos: window.pageYOffset,
		visible: true
	}

	  // Adds an event listener when the component is mount.
		componentDidMount() {
			if (typeof window !== 'undefined') {
				window.addEventListener("scroll", this.handleScroll);
			}
		}
	
		// Remove the event listener when the component is unmount.
		componentWillUnmount() {
			window.removeEventListener("scroll", this.handleScroll);
		}
	
		// Hide or show the menu.
		handleScroll = () => {
			const { prevScrollpos } = this.state;
	
			const currentScrollPos = window.pageYOffset;
			const visible = prevScrollpos > currentScrollPos;
	
			this.setState({
				prevScrollpos: currentScrollPos,
				visible
			});
		};

	opNav = () => {
		this.setState({openNav: !this.state.openNav})
	}
	render(){
		let classes = '';
		if(!this.state.openNav){
 			classes += 'prvi';
		} else {
			classes += 'drugi'
		}
		
		return(
					<nav
						className={classnames("navbar", {
							"navbar--hidden": !this.state.visible
						})}
					>
					<ul className="desktop-nav">
						<li><Link className="nav-link" to="about" spy={true} smooth={true} duration={500}>about</Link></li>
						<li><Link className="nav-link" to="projects" spy={true} smooth={true} duration={500}>projects</Link></li>
						<li><Link className="nav-link" to="contact" spy={true} smooth={true} duration={500}>contact</Link></li>					
					</ul>
					<Transition
          native
          items={this.state.openNav}
          from={{ overflow: 'hidden', height: 0 }}
          enter={[{ height: 'auto' }]}
          leave={{ height: 0 }}>
          {show =>
            show && (props => {
							return(
							<animated.div style={props}>
								<ul className="mobile-nav">
									<li><Link className="nav-link" to="about" spy={true} smooth={true} duration={500}>about</Link></li>
									<li><Link className="nav-link" to="projects" spy={true} smooth={true} duration={500}>projects</Link></li>
									<li><Link className="nav-link" to="contact" spy={true} smooth={true} duration={500}>contact</Link></li>						
								</ul>
							</animated.div>	
							)
						})
          }
        </Transition>

					<div onClick={this.opNav} id="toggle">
					<svg className={classes} width="2.6rem" height="0.4rem"></svg>
						{this.state.openNav ? (<p id="hide">hide</p>) : (null)}
					</div>							
				</nav>				
		)
	}
}


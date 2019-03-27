import React, {Component} from 'react';
import {animateScroll as scroll} from 'react-scroll';

export default class Footer extends Component{
	scrollToTop = () => {
		scroll.scrollToTop()
	}
	render(){
		return(
			<footer>
				<p style={{marginLeft:'1rem'}}>copyright &copy; 2019 milos mcmandic</p>
				<p style={{marginRight:'1rem'}}>this site is make in <b>gatsbyJS</b> </p>
				<div onClick={this.scrollToTop} className="on-top"></div>  
			</footer>
		)
	}
}

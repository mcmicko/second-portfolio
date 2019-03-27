import React from "react"
import PropTypes from "prop-types"
import Navbar from './globals/Navbar';
import Footer from './globals/Footer';

import '../pages/scss/layout.scss';

const Layout = ({ children }) => (
  <div>
    <Navbar/>
    {children}
    <Footer/>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

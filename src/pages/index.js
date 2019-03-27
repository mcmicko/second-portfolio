import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../components/particles/Header'
import About from "../components/main/About";
import SectionTwo from "../components/main/SectionTwo";
import Contact from "../components/main/Contact";
import Projects from '../components/main/Projects'

const IndexPage = () => (
  <Layout>
    <SEO title="porfolio" keywords={[`gatsby`, `application`, `react`]} />

	  <Header/>
    <About/>
    <SectionTwo/>
    <Projects/>
    <Contact/>
  </Layout>
)

export default IndexPage

import React  from 'react'
import Head from  './components/header/Head'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Exp from './components/exp/Exp'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/tesimonials/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
      <Head  />
      <Nav />
      <About />
      <Exp />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
   
  )
}

export default App

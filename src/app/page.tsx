import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Expereince from '../../components/Experiences/Expereince'
import About from '../../components/About/About'
import Custom from '../../components/Customs/Custom'
import Studies from '../../components/Studies/Studies'
import Feedback from '../../components/Feedback/Feedback'
import Brand from '../../components/Brand/Brand'
import Footer from '../../components/Footer/Footer'



export default function page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Expereince />
      <Brand />
      <About />
      <Custom />
      <Studies />
      <Feedback />
      <Footer/>
    </main>
  )
}

import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Expereince from '../../components/Experiences/Expereince'
import About from '../../components/About/About'

export default function page() {
  return (
    <main>
      <Navbar/>
      <Hero/>
     <Expereince/>
     <About/>
    </main>
  )
}

import React from 'react'

import Hero from '../../components/Hero/Hero'
import Expereince from '../../components/Experiences/Expereince'
import About from '../../components/About/About'
import Custom from '../../components/Customs/Custom'
import Studies from '../../components/Studies/Studies'
import Feedback from '../../components/Feedback/Feedback'
import Brand from '../../components/Brand/Brand'




export default function Page() {
  return (
    <main>
      <Hero />
      <Expereince />
      <Brand />
      <About />
      <Custom />
      <Studies />
      <Feedback />

    </main>
  )
}

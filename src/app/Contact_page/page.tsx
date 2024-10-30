import React from 'react'
import Contact from './Components/Hero/Hero'
import ContactUs from './Components/ContactUs/Contact'
import Form from './Components/Form/Form'
import MapSection from './Components/Map/Map'

export default function page() {
  return (
    <div>
      <Contact/>
      <ContactUs/>
      <MapSection/>
      <Form/>
    
    </div>
  )
}

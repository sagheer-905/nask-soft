import React from 'react'
import ContactCard from '../Component/Contactus/ContactCart/ContactCard'
import ConatacFrom from '../Component/Contactus/ContactFrom/ConatacFrom'
import Getintouch from '../Component/Contactus/GetinTouch/Getintouch'
import Location from '../Component/Contactus/Location/Location'
import Footer from '../Component/Home/Footer/Footer'

function Contactus() {
  return (
    <div class="site-content">
      <Getintouch/>
      <ContactCard/>
      <ConatacFrom/>
      <Location/>
      <Footer/>

    </div>
  )
}

export default Contactus

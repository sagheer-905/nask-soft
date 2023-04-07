import React from 'react'
import OurtexServices from '../Component/TexRegistration/OurtexServices/OurtexServices'
import TexRegistrationBanner from '../Component/TexRegistration/TexRegistrationBanner/TexRegistrationBanner'
import Footer from '../Component/Home/Footer/Footer'
function TexRegistration() {
  return (
    <div class="site-content">
      <TexRegistrationBanner/>
      <OurtexServices/>
      <Footer/>
    </div>
  )
}

export default TexRegistration

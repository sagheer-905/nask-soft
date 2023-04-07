import React from 'react'
import Footer from '../Component/Home/Footer/Footer'
import BannerSecServicse from '../Component/Services/BannerSecSer/BannerSecServicse'
import MianBanner from '../Component/Services/Servises/MianBanner'

function Servise() {
  return (
    <div className='site-content'>
      <MianBanner/>
      <BannerSecServicse/>
      <Footer/>
    </div>
  )
}

export default Servise

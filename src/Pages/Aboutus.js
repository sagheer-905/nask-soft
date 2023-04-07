import React from 'react'
import BannerSec from '../Component/Aboutus/BannerSec/BannerSec'
import MainBannerABout from '../Component/Aboutus/MainBanner/MainBannerABout'
import OurClient from '../Component/Aboutus/OurClient/OurClient'
import Ourcomany from '../Component/Aboutus/OurCompany/Ourcomany'
import Subscibe from '../Component/Aboutus/Subscribe/Subscibe'
import Footer from '../Component/Home/Footer/Footer'

function Aboutus() {
  return (
    <div className='site-content'>
      <MainBannerABout/>
      <BannerSec/>
      <Ourcomany/>
      <OurClient/>
      <Subscibe/>
      <Footer/>
    </div>
  )
}

export default Aboutus

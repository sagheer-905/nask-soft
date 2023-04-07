import React from 'react'
import GrouponSecBanner from '../Component/Groupon/GrouponSecBanner/GrouponSecBanner'
import MainBanner from '../Component/Groupon/MainBannerGroupon/MainBanner'
import OurServices from '../Component/Groupon/OurServices/OurServices'
import Footer from '../Component/Home/Footer/Footer'

function Groupon() {
  return (
    <div  class="site-content">
     <MainBanner/>
     <GrouponSecBanner/>
     <OurServices/>
     <Footer/>
    </div>
  )
}

export default Groupon

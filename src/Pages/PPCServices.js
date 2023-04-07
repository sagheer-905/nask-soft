import React from 'react'
import Footer from '../Component/Home/Footer/Footer'
import PPCcanDo from '../Component/PPCServices/PPCcanDo/PPCcanDo'
import PPCceckout from '../Component/PPCServices/PPCceckout/PPCceckout'
import MianBanner from '../Component/PPCServices/PPCServicesBanner/MianBanner'
import YourBenifits from '../Component/PPCServices/YourBenifits/YourBenifits'

function PPCServices() {
  return (
    <div class="site-content">
      <MianBanner/>
      <PPCcanDo/>
      <YourBenifits/>
      <PPCceckout/>
      <Footer/>
    </div>
  )
}

export default PPCServices

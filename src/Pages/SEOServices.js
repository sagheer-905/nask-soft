import React from 'react'
import Auditsection from '../Component/SEOServices/Auditsection/Auditsection'
import BenifitsSection from '../Component/SEOServices/BenifitsSection/BenifitsSection'
import Goodidea from '../Component/SEOServices/GoodIdea/Goodidea'
import InfoSection from '../Component/SEOServices/InfoSection/InfoSection'
import Reportingsection from '../Component/SEOServices/Reportingsection/Reportingsection'
import SEOServicesBanner from '../Component/SEOServices/SEOServicesBanner/SEOServicesBanner'
import SEOServisesSection from '../Component/SEOServices/SEOServisesSection/SEOServisesSection'
import Servicessection from '../Component/SEOServices/Servicessection/Servicessection'
 import Footer from '../Component/Home/Footer/Footer'

function SEOServices() {
  return (
    <div  class="site-content">
      <SEOServicesBanner/>
      <SEOServisesSection/>
      <Goodidea/>
      <Reportingsection/>
      <Auditsection/>
      <InfoSection/>
      <Servicessection/>
      <BenifitsSection/>
      <Footer/>
    </div>
  )
}

export default SEOServices

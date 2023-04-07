import React from 'react'
import Approach from '../Component/DegitalMarketing/Approach/Approach'
import Benefits from '../Component/DegitalMarketing/Benefits/Benefits'
import Deigitalmain from '../Component/DegitalMarketing/MainBanner/Deigitalmain'
import OurProcesse from '../Component/DegitalMarketing/OurProceses/OurProcesse'
import OurServecis from '../Component/DegitalMarketing/OurSerevices/OurServecis'
import WhyDegitalMarketing from '../Component/DegitalMarketing/WhyDegitalMarketing/WhyDegitalMarketing'
import Footer from '../Component/Home/Footer/Footer'
function Degitalmarketing() {
  return (
    <div className='site-content'>
      <Deigitalmain/>
      <OurServecis/>
      <WhyDegitalMarketing/>
      <Benefits/>
      <Approach/>
      <OurProcesse/>
      <Footer/>
    </div>
  )
}

export default Degitalmarketing

import React from 'react'
import IncorpurationBanner from '../Component/Incorpuration/IncorpurationBanner/IncorpurationBanner'
import Legaladvice from '../Component/Incorpuration/Legaladvice/Legaladvice'
import TypeOFLegaladvice from '../Component/Incorpuration/TypeOFLegaladvice/TypeOFLegaladvice'
import Footer from '../Component/Home/Footer/Footer'
function Incorpuration() {
  return (
    <div class="site-content">
      <IncorpurationBanner/>
      <Legaladvice/>
      <TypeOFLegaladvice/>
      <Footer/>
    </div>
  )
}

export default Incorpuration

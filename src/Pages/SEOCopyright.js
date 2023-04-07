import React from 'react'
import Cardsection from '../Component/SEOCopyright/Cardsection/Cardsection'
import Circlesection from '../Component/SEOCopyright/Circlesection/Circlesection'
import Costsection from '../Component/SEOCopyright/Costsection/Costsection'
import Creatingsection from '../Component/SEOCopyright/Creatingsection/Creatingsection'
import Impementationsection from '../Component/SEOCopyright/Impementationsection/Impementationsection'
import MainBanner from '../Component/SEOCopyright/SEOCopyrightBanner/MainBanner'
import Servicesection from '../Component/SEOCopyright/service-section/Servicesection'
import Footer from '../Component/Home/Footer/Footer'
function SEOCopyright() {
  return (
    <div  class="site-content">
      <MainBanner/>
      <Servicesection/>
      <Creatingsection/>
      <Impementationsection/>
      <Costsection/>
      <Cardsection/>
      <Circlesection/>
      <Footer/>
    </div>
  )
}

export default SEOCopyright

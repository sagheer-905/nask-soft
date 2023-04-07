import React from 'react'
import Benefitssection from '../Component/ContentMarketing/Benefitssection/Benefitssection'
import BusinessTasks from '../Component/ContentMarketing/BusinessTasks/BusinessTasks'
import MainBanner from '../Component/ContentMarketing/MainBanner/MainBanner'
import Processsection from '../Component/ContentMarketing/processsection/ProcesSsection'
import Stagessection from '../Component/ContentMarketing/Stagessection/Stagessection'
import Strategysection from '../Component/ContentMarketing/Strategysection/Strategysection'
import Footer from '../Component/Home/Footer/Footer'

function ContentMarketing() {
  return (
    <div  class="site-content">
      <MainBanner/>
      <BusinessTasks/>
      <Benefitssection/>
      <Processsection/>
      <Strategysection/>
      <Stagessection/>
      <Footer/>
    </div>
  )
}

export default ContentMarketing

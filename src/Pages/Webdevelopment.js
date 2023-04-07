import React from 'react'
import WebCreative from '../Component/WebDevelopment/WebCreative/WebCreative'
import DevelopmentBanner from '../Component/WebDevelopment/Webdevelopment/DevelopmentBanner'
import WebStatic from '../Component/WebDevelopment/StacticWebsite/WebStatic'
import Coustomweb from '../Component/WebDevelopment/CoustomWeb/Coustomweb'
import TabContaent from '../Component/WebDevelopment/TabContent/TabContaent'
import DevelopmentSolution from '../Component/WebDevelopment/DevelopmentSolution/DevelopmentSolution'
import WebSlider from '../Component/WebDevelopment/WebSlider/WebSlider'
import Footer from '../Component/Home/Footer/Footer'


function Webdevelopment() {
  return (
    <div class="site-content">
      <DevelopmentBanner/>
      <WebCreative/>
      <WebStatic/>
      <Coustomweb/>
      <TabContaent/>
      <DevelopmentSolution/>
      <WebSlider/>
      <Footer/>
      
    </div>
  )
}

export default Webdevelopment

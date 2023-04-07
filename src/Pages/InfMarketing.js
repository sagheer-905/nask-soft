import React from 'react'
import Footer from '../Component/Home/Footer/Footer'
import HelpingBrand from '../Component/InfluencerMarketing/HelpingBrand/HelpingBrand'
import MianBanner from '../Component/InfluencerMarketing/InfluencerMarketingBanner/MianBanner'
import OurInfluService from '../Component/InfluencerMarketing/OurInfluService/OurInfluService'
import SliderSection from '../Component/InfluencerMarketing/SliderSection/SliderSection'
import StartGrowning from '../Component/InfluencerMarketing/StartGrowning/StartGrowning'
import WhyinfluMarketing from '../Component/InfluencerMarketing/WhyinfluMarketing/WhyinfluMarketing'

function InfMarketing() {
  return (
    <div class="site-content">
      <MianBanner/>
      <HelpingBrand/>
      <WhyinfluMarketing/>
      <OurInfluService/>
      <StartGrowning/>
      <SliderSection/>
      <Footer/>
    </div>
  )
}

export default InfMarketing

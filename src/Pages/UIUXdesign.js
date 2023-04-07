import React from 'react'
import Footer from '../Component/Home/Footer/Footer'
import Adaptive from '../Component/UIUXdesigner/Adaptive/Adaptive'
import Artisitic from '../Component/UIUXdesigner/Artisitic/Artisitic'
import BusinessDesign from '../Component/UIUXdesigner/BusinessDesign/BusinessDesign'
import DataType from '../Component/UIUXdesigner/DataType/DataType'
import LastSection from '../Component/UIUXdesigner/LastSection/LastSection'
import Timeline from '../Component/UIUXdesigner/Timeline/Timeline'
import TopicSection from '../Component/UIUXdesigner/TopicSection/TopicSection'
import TypeofdesignrSection from '../Component/UIUXdesigner/TypeOfdesing/TypeofdesignrSection'
import UIUXBannner from '../Component/UIUXdesigner/UIUXBanner/UIUXBannner'
import TAbSection from '../Component/UIUXdesigner/UIUXtab/TAbSection'

function UIUXdesign() {
  return (
    <div class="site-content">
    <UIUXBannner/>
    <TAbSection/>
    <TypeofdesignrSection/>
    <TopicSection/>
    <DataType/>
    <Artisitic/>
    <Adaptive/>
    <Timeline/>
    <BusinessDesign/>
    <LastSection/>
    <Footer/>
    </div>
  )
}

export default UIUXdesign

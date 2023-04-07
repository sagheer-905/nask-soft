import React from 'react'
import B2bSection from '../Component/EcomServices/B2B&B2C/B2bSection'
import EcomBackend from '../Component/EcomServices/EcomBackEnd/EcomBackend'
import EcomBanner from '../Component/EcomServices/EcomBanner/EcomBanner'
import EcomtabSection from '../Component/EcomServices/EcomtabSection/EcomtabSection'
import EcomWordpress from '../Component/EcomServices/EcomWordpress/EcomWordpress'
import Modules from '../Component/EcomServices/Modules/Modules'
import Opencart from '../Component/EcomServices/Opencart/Opencart'
import PementGetWay from '../Component/EcomServices/PaymentGetway/PementGetWay'
import RedBanner from '../Component/EcomServices/RedBanner/RedBanner'
import ShopifiyEcom from '../Component/EcomServices/ShopyfiyEcom/ShopifiyEcom'
import Footer from '../Component/Home/Footer/Footer'

function EcomServices() {
  return (
    <div className='site-content'>
      <EcomBanner/>
      <EcomtabSection/>
      <EcomBackend/>
      <B2bSection/>
      <Opencart/>
      <Modules/>
      <RedBanner/>
      <ShopifiyEcom/>
      <EcomWordpress/>
      <PementGetWay/>
      <Footer/>
    </div>
  )//
}

export default EcomServices

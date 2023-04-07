import React from 'react'
import AmazonMain from '../Component/Amazon/AmazonMAinBanner/AmazonMain'
import AmazonSecSection from '../Component/Amazon/AmazonSecSection/AmazonSecSection'
import AmazonProduct from '../Component/Amazon/AmazonProduct/AmazonProduct'
import ProductLunching from '../Component/Amazon/AmazonProductLunching/ProductLunching'
import AccoountHealth from '../Component/Amazon/AccountHealth/AccoountHealth'
import MarketAnliys from '../Component/Amazon/MarketAnliysis/MarketAnliys'
import AccountReinstatement from '../Component/Amazon/AccountReinstatement/AccountReinstatement'
import Footer from '../Component/Home/Footer/Footer'

function Amazon() {
  return (
    <div  class="site-content">
      <AmazonMain/>
      <AmazonSecSection/>
      <AmazonProduct/>
      <ProductLunching/>
      <AccoountHealth/>
      <MarketAnliys/>
      <AccountReinstatement/>
      <Footer/>
    </div>
  )
}

export default Amazon

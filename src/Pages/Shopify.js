import React from 'react'
import LastsectionShopyfiy from '../Component/Shopify/ECOMMERCEWEBSITE/LastsectionShopyfiy'
import ImageSection from '../Component/Shopify/IageSection/ImageSection'
import ShoppingCart from '../Component/Shopify/ShoppingCart/ShoppingCart'
import ShopyfiymainBanner from '../Component/Shopify/ShopyfiymainBanner/ShopyfiymainBanner'
import Footer from '../Component/Home/Footer/Footer'

function Shopify() {
  return (
    <div className='site-content'>
      <ShopyfiymainBanner/>
      <ShoppingCart/>
      <ImageSection/>
      <LastsectionShopyfiy/>
      <Footer/>
    </div>
  )
}

export default Shopify

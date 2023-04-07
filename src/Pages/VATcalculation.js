import React from 'react'
import ExampleSection from '../Component/VAT/ExampleSection/ExampleSection'
import VATBanner from '../Component/VAT/VATBanner/VATBanner'
import VatCard from '../Component/VAT/VATCart/VatCard'
import Footer from '../Component/Home/Footer/Footer'
function VATcalculation() {
  return (
    <div>
      <VATBanner/>
      <VatCard/>
      <ExampleSection/>
      <Footer/>
    </div>
  )
}

export default VATcalculation

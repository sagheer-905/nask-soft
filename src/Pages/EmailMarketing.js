import React from 'react'
import CreativitySection from '../Component/EmailMarkrting/CreativitySection/CreativitySection'
import EmailBanner from '../Component/EmailMarkrting/EmailBanner/EmailBanner'
import EmailProfile from '../Component/EmailMarkrting/EmailProfile/EmailProfile'
import Marketingsearch from '../Component/EmailMarkrting/Marketingsearch/Marketingsearch'
import ServicesEmail from '../Component/EmailMarkrting/ServicesEmail/ServicesEmail'
import Strategy from '../Component/EmailMarkrting/Strategy/Strategy'
import Footer from '../Component/Home/Footer/Footer'
function EmailMarketing() {
  return (
    <div>
      <EmailBanner/>
      <Strategy/>
      <ServicesEmail/>
      <EmailProfile/>
      <CreativitySection/>
      <Marketingsearch/>
      <Footer/>
    </div>
  )
}

export default EmailMarketing

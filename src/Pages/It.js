import React from 'react'
import Footer from '../Component/Home/Footer/Footer'
import ItBanner from '../Component/ITNetworking/FirstBanner/ItBanner'
import Itcard from '../Component/ITNetworking/Itcard/Itcard'
import Itquality from '../Component/ITNetworking/ItQUALITY/Itquality'

function It() {
  return (
    <div>
      <ItBanner/>
      <Itquality/>
      <Itcard/>
      <Footer/>
    </div>
  )
}

export default It

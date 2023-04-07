import React from 'react'
import Benefits from '../Component/Bussinus/Benefits/Benefits'
import BussinusProfile from '../Component/Bussinus/BussinusProfile/BussinusProfile'
import Companyprofile from '../Component/Bussinus/Companyprofile/Companyprofile'
import Compnaybusiness from '../Component/Bussinus/Compnaybusiness/Compnaybusiness'
import Usecases from '../Component/Bussinus/Usecases/Usecases'
import Writtingservices from '../Component/Bussinus/WrittingServices/Writtingservices'
import Footer from '../Component/Home/Footer/Footer'

function Bussinus() {
  return (
    <div>
      <BussinusProfile/>
      <Compnaybusiness/>
      <Writtingservices/>
      <Companyprofile/>
      <Usecases/>
      <Benefits/>
      <Footer/>
    </div>
  )
}

export default Bussinus

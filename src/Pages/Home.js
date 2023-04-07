import React from 'react'
import Designe from '../Component/Home/Designe/Designe'
import FinancSection from '../Component/Home/Finece/FinancSection'
import Footer from '../Component/Home/Footer/Footer'
import MainBanner from '../Component/Home/HomeBanner/MainBanner'
import Marketing from '../Component/Home/Marketing/Marketing'
import OurTechnologies from '../Component/Home/OurTechnologies/OurTechnologies'
import Porfolio from '../Component/Home/Portfolio/Porfolio'
import Services from '../Component/Home/Services/Services'
import Specialization from '../Component/Home/Specialization/Specialization'
function Home() {
  return (
    <div className='site-content'>
      <MainBanner/>
      <Specialization/>
      <Services/>
      <Designe/>
      <FinancSection/>
      <Marketing/>
      <Porfolio/>
      <OurTechnologies/>
      <Footer/>
    </div>
  )
}

export default Home

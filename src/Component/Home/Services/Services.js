import React from 'react'
import img1 from "../../../images/Homepage/service-logo.png"
import img2 from "../../../images/Homepage/icon-bg1.png"
import img3 from "../../../images/Homepage/icon-bg-2.png"
import OWlSlider from '../../OWlSlider'
function Services() {
  return (
    <div>
      {/*---- Services Section Start ----*/}
      <div className="service-section position-relative">
        {/* <img src="../../../images/Homepage/services-bnr1.png" alt="..." class="img-fluid w-100"> */}
        <img src={img1} alt="...." className="img-fluid service-logo" />
        <div className="services-content text-center">
          <h3 className="fw-bold h2 text-white">What We Do</h3>
          <p className="text-white">Transforming your business processess for the digital future</p>
          
          <OWlSlider/>

      
        </div>
      </div>
      {/*---- Services Section End ----*/}

    </div>
  )
}

export default Services

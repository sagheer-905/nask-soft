import React from 'react'
import img2 from "../../../images/DigitalMarketing/2.png"
import img from "../../../images/DigitalMarketing/Line.png" 
import img3 from "../../../images/DigitalMarketing/3.png"
import img4 from "../../../images/DigitalMarketing/4.png"
import img5 from "../../../images/DigitalMarketing/1.png"
function OurServecis() {
  return (
    <div>
      {/*----- Digital marketing services section Start -----*/}
<div className="digitalMarket-service py-5">
  <div className="container py-md-4 position-relative">
    <img src={img} alt="..." className="img-fluid digiline d-none d-lg-block" />
    <h3 className="h2 fw-bold text-uppercase text-center mb-4 mb-md-5">Our Services</h3>
    <div className="row">
      <div className="col-md-6 col-lg-3 position-relative">
        <span className="digi-count d-none d-md-block">01</span>
        <div className="card position-relative digi_hexagon">
          <div className="card-body">
            <img src={img5} alt="...." className="img-fluid" />
            <h6 className="fw-semibold text-uppercase mt-4">conversion marketing</h6>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 position-relative">
        <span className="digi-count d-none d-md-block">02</span>
        <div className="card position-relative digi_hexagon">
          <div className="card-body">
            <img src={img2} alt="...." className="img-fluid" />
            <h6 className="fw-semibold text-uppercase mt-4">content marketing</h6>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 position-relative">
        <span className="digi-count d-none d-md-block">03</span>
        <div className="card position-relative digi_hexagon">
          <div className="card-body">
            <img src={img3} alt="...." className="img-fluid" />
            <h6 className="fw-semibold text-uppercase mt-4">social media marketing</h6>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 position-relative">
        <span className="digi-count d-none d-md-block">04</span>
        <div className="card position-relative digi_hexagon">
          <div className="card-body">
            <img src={img4} alt="...." className="img-fluid" />
            <h6 className="fw-semibold text-uppercase mt-4">PPC services</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/*----- Digital marketing services section end -----*/}

    </div>
  )
}

export default OurServecis

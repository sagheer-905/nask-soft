import React from 'react'
import img from "../../../images/ppcServices/benefit-1.png"
import img2 from "../../../images/ppcServices/benefit-2.png"
import img3 from "../../../images/ppcServices/benefit-3.png"
function YourBenifits() {
  return (
    <div>
      {/*---- PPC Benefits section start -----*/}
<div className="ppc-benefits py-5">
  <div className="container pb-md-4">
    <h3 className="h2 text-uppercase fw-bold text-center mb-5">Your benefits our key experties</h3>
    <div className="row gy-4 gy-md-0">
      <div className="col-md-4">
        <div className="card rounded-4 px-3 px-xl-5 py-4">
          <div className="card-img text-center">
            <img src={img} alt="..." className="img-fluid" />
          </div>
          <h5 className="fw-semibold text-uppercase mt-4 mb-3">Your revenue</h5>
          <p>Contextual ads are all about sales. We use several methods to achieve max-imal profit for you. We check your site.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card rounded-4 px-3 px-xl-5 py-4">
          <div className="card-img text-center">
            <img src={img2} alt="..." className="img-fluid" />
          </div>
          <h5 className="fw-semibold text-uppercase mt-4 mb-3">Get more conversions</h5>
          <p>It’s not enough just to attract visitors to your site. A user-friendly site converts visitors into buyers.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card rounded-4 px-3 px-xl-5 py-4">
          <div className="card-img text-center">
            <img src={img3} alt="..." className="img-fluid" />
          </div>
          <h5 className="fw-semibold text-uppercase mt-4 mb-3">Clear marketing data</h5>
          <p>Contextual ad platforms and analytics tools allow you to collect data about your site and audience.</p>
        </div>
      </div>
    </div>
  </div>
</div>
{/*---- PPC Benefits section end -----*/}

    </div>
  )
}

export default YourBenifits

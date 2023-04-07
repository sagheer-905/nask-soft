import React from 'react'
import img from "../../../images/Homepage/Finance2.png" 
import img2 from "../../../images/Homepage/Globe.png"
function FinancSection() {
  return (
    <div>
      {/*---- Finance Section Start ----*/}
<div className="finance-section position-relative">
  <img src={img2} alt="..." className="img-fluid" />
  {/* bubbles wrapper */}
  <div className="bubble-wrapper">
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>



  </div>
  {/* bubbles wrapper */}
  <div className="dd-sectionInner container-fluid">
    <div className="row align-items-center justify-content-end pb-4 pb-md-0">
      <div className="col-md-5 py-3 py-md-0">
        <h6 className="fw-bold text-uppercase">Finance</h6>
        <h3 className="h2 fw-bolder">Enterprise Solutions</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <ul>
          <li>Banking</li>
          <li>Leverage</li>
          <li>Credit</li>
          <li>Capital Markets</li>
          <li>Money</li>
          <li>Investments</li>
          <li>Growth</li>
        </ul>
        <button type="button" className="btn rounded-pill mt-4">More Details</button>
      </div>
      <div className="col-md-6 text-center py-3 py-md-0">
        <img src={img} alt="..." className="img-fluid" />
      </div>
    </div>
  </div>
</div>
{/*---- Finance Section End ----*/}

    </div>
  )
}

export default FinancSection

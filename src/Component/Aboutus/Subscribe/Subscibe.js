import React from 'react'
import imgGlobe from "../../../images/AboutUspage/contact_globe.png"
function Subscibe() {
  return (
    <div>
      {/*----- Newsletter Section Start  ------*/}
<div className="newsletter-container py-5">
  <div className="container py-5">
    <img src={imgGlobe} alt="..." className="img-fluid newsletter-img" />
    <div className="row justify-content-center align-items-center">
      <div className="col-md-6 col-lg-5">
        <h3 className="fw-bold">Subscribe To Our Newsletter For Latest
          Update Of New Prodcuts</h3>
      </div>
      <div className="col-md-6 col-lg-5">
        <form className="position-relative">
          <input type="email" className="form-control rounded-pill" placeholder="Email Address" />
          <button type="submit" className="btn rounded-pill">Subscribe Now</button>
        </form>
      </div>
    </div>
  </div>
</div>
{/*----- Newsletter Section End  ------*/}

    </div>
  )
}

export default Subscibe

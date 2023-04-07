import React from 'react'
import cube1 from "../../../images/AboutUspage/cube1.png"
import cube2 from "../../../images/AboutUspage/cube2.png"
import cube3 from "../../../images/AboutUspage/cube3.png"
import cube4 from "../../../images/AboutUspage/cube4.png"
import cube5 from "../../../images/AboutUspage/cube5.png"
function MianBanner() {
  return (
    <div>
      {/*---- Main Banner Start ----*/}
<div className="services-bnr position-relative">
  <div className="row align-items-center p-md-0 ps-lg-5 pt-5 justify-content-center">
    <div className="col-md-5 text-center">
      <div className="cubes">
      <img src={cube1} alt="..." className="img-fluid" />
        <img src={cube2} alt="..." className="img-fluid" />
        <img src={cube3} alt="..." className="img-fluid" />
        <img src={cube4} alt="..." className="img-fluid" />
        <img src={cube5} alt="..." className="img-fluid" />
      </div>
    </div>
    <div className="col-md-6 ps-lg-5 cl-2 px-4 px-md-0">
      <h1 className="fw-bold text-white position-relative text-uppercase">We Turn Your wishes into brilliant solutions</h1>
      <p className="fw-normal text-white mt-3">We offer a full suite of website development and
        programming services, flexible pricing and superior
        service.</p>
    </div>
  </div>
  <a href="#down" className="btn-down"><i className="bi bi-chevron-double-down" /></a>
</div>
{/*---- Main Banner End ----*/}

    </div>
  )
}

export default MianBanner

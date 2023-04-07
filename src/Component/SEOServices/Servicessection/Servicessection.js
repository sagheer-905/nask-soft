import React from 'react'
import img from "../../../images/SEOmain/Ellipse.png"
import img2 from "../../../images/SEOmain/seo.png"
import img3 from "../../../images/SEOmain/Web-development.png"
import img4 from "../../../images/SEOmain/Outsource.png"
import img5 from "../../../images/SEOmain/design.png"
function Servicessection() {
  return (
    <div>
      {/*----- SEO Other Services section start -----*/}
<div className="SEO-others">
  <div className="container position-relative">
    <h3 className="h2 fw-bold text-uppercase text-center mb-5">Other Services</h3>
    <img src={img} alt="..." className="img-fluid seo-ellipse d-none d-md-block" />
    <div className="row justify-content-center pb-4 pb-md-5">
      <div className="col-md-2">
        <div className="card text-center rounded-circle">
          <img src={img2} alt="..." className="img-fluid" />
          <h6 className="fw-semibold text-uppercase">SEO<br /> Services</h6>
        </div>
      </div>
    </div>
    <div className="row justify-content-center align-items-center py-md-5 gap-md-5 gap-xl-4 gap-xxl-0  gy-4 gy-md-0">
      <div className="col-md-2">
        <div className="card text-center rounded-circle">
          <img src={img3} alt="..." className="img-fluid" />
          <h6 className="fw-semibold text-uppercase">Website<br /> Development</h6>
        </div>
      </div>
      <div className="col-md-4 col-lg-3 text-center">
        <h5 className="fw-bold text-uppercase">
          Design Services
        </h5>
        <p className="m-0">You can get a wide range of design services such as web design, UI/UX and brand identity.</p>
      </div>
      <div className="col-md-2">
        <div className="card text-center rounded-circle">
          <img src={img4} alt="..." className="img-fluid" />
          <h6 className="fw-semibold text-uppercase">Outsource<br /> Services</h6>
        </div>
      </div>
    </div>
    <div className="row justify-content-center pt-4 pt-md-5">
      <div className="col-md-2">
        <div className="card text-center rounded-circle">
          <img src={img5} alt="..." className="img-fluid" />
          <h6 className="fw-semibold text-uppercase">Design<br /> Services</h6>
        </div>
      </div>
    </div>
  </div>
</div>
{/*----- SEO Other Services section end -----*/}

    </div>
  )
}

export default Servicessection

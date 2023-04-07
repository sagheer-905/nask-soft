import React from 'react'
import img from "../../../images/SEOmain/Line.png" 
import img2 from "../../../images/SEOmain/Service1.png"
import img3 from "../../../images/SEOmain/Service2.png"
import img4 from "../../../images/SEOmain/Service3.png"
import img5 from "../../../images/SEOmain/Service4.png"
function SEOServisesSection() {
  return (
    <div>
      {/*----- Digital marketing services section Start -----*/}
<div className="SEOmain-services py-5">
  <div className="container py-md-4 position-relative">
    <img src={img} alt="..." className="img-fluid seoline d-none d-lg-block" />
    <h3 className="h2 fw-bold text-uppercase text-center mb-4 mb-md-5">Nasksoft's SEO Services</h3>
    <div className="row">
      <div className="col-md-6 col-lg-3 position-relative">
        <span className="seo-count d-none d-md-block">01</span>
        <div className="card position-relative seo_hexagon">
          <div className="card-body">
            <img src={img2} alt="...." className="img-fluid" />
            <h6 className="fw-semibold text-uppercase mt-4">On-page SEO</h6>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 position-relative">
        <span className="seo-count d-none d-md-block">02</span>
        <div className="card position-relative seo_hexagon">
          <div className="card-body">
            <img src={img3} alt="...." className="img-fluid" />
            <h6 className="fw-semibold text-uppercase mt-4">Technical SEO</h6>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 position-relative">
        <span className="seo-count d-none d-md-block">03</span>
        <div className="card position-relative seo_hexagon">
          <div className="card-body">
            <img src={img4} alt="...." className="img-fluid" />
            <h6 className="fw-semibold text-uppercase mt-4">Off-page SEO</h6>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 position-relative">
        <span className="seo-count d-none d-md-block">04</span>
        <div className="card position-relative seo_hexagon">
          <div className="card-body">
            <img src={img5} alt="...." className="img-fluid" />
            <h6 className="fw-semibold text-uppercase mt-4">SEO Copywriting</h6>
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

export default SEOServisesSection

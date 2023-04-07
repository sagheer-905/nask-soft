import React from 'react'
import img from "../../../images/SEOmain/Audit1.png"
import img1 from "../../../images/SEOmain/Audit2.png"
import img2 from "../../../images/SEOmain/Audit3.png"
function Auditsection() {
  return (
    <div>
      {/*---- SEO Audit section start -----*/}
<div className="seo-audit">
  <div className="container">
    <h3 className="h2 text-uppercase fw-bold text-center mb-5">SEO Audit</h3>
    <div className="row gy-4 gy-md-0 justify-content-evenly text-center">
      <div className="col-md-4 col-lg-3 px-lg-0">
        <div className="card rounded-4 px-3 py-4">
          <img src={img} alt="...." className="img-fluid" />
          <h6 className="fw-semibold text-uppercase mt-4 mb-3">SEO audit of your niche</h6>
          <p>We analyze your business and customers to identify specific characteristics that will
            persuade
            people to buy your product or service.
          </p>
        </div>
      </div>
      <div className="col-md-4 col-lg-3 px-lg-0">
        <div className="card rounded-4 px-3 py-4">
          <img src={img1} alt="...." className="img-fluid" />
          <h6 className="fw-semibold text-uppercase mt-4 mb-3">Target Audience Research</h6>
          <p>We understand the pros and cons of digital marketing services.
            Using this knowledge, we will customize a marketing startegy.</p>
        </div>
      </div>
      <div className="col-md-4 col-lg-3 px-lg-0">
        <div className="card rounded-4 px-3 py-4">
          <img src={img2} alt="...." className="img-fluid" />
          <h6 className="fw-semibold text-uppercase mt-4 mb-3">Tech SEO Audit of your site</h6>
          <p>We focus on your customers, their needs, and what they are looking for.
            This will help you to achieve your business goals.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
{/*---- SEO Audit section end -----*/}

    </div>
  )
}

export default Auditsection

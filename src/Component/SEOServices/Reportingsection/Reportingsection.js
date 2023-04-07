import React from 'react'
import img from "../../../images/SEOmain/transparentSEO.png"
function Reportingsection() {
  return (
    <div>
      {/*----- Transparent SEO Reporting section start -----*/}
<div className="seoTransp py-5">
  <div className="container py-md-4">
    <div className="row justify-content-between align-items-center gy-4 gy-md-0 ">
      <div className="col-md-6">
        <h3 className="h2 fw-bold text-uppercase mb-3">Transparent SEO Reporting</h3>
        <p>Our customers can at any time find out what stage the project is in and what SEO
          promotion activities have been completed.
        </p>
        <p className="fw-semibold">You can see in a standard report:</p>
        <ul className="fw-semibold">
          <li>Attendance statistics.</li>
          <li>Sources of traffic and comparison.</li>
          <li>Conversion data, comparative tables.</li>
          <li>Pages positions.</li>
          <li>Comparison of positions with the previous month.</li>
          <li>Work done in a given time period.</li>
          <li>We also done marketing recommendations along with the report.</li>
        </ul>
      </div>
      <div className="col-md-5">
        <img src={img} alt="..." className="img-fluid" />
      </div>
    </div>
  </div>
</div>
{/*----- Transparent SEO Reporting section end -----*/}

    </div>
  )
}

export default Reportingsection

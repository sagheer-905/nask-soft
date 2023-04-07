import React from 'react'
import img from "../../../images/Homepage/CDD1.png"
import img2 from "../../../images/Homepage/7.png"
function Designe() {
  return (
    <div>
       {/* <!------ Design & Development Section Start ------> */}
        <div class="dd-section position-relative">
            <img src={img2} alt="..." class="img-fluid"/>

            {/* <!-- bubbles wrapper --> */}
            <div class="bubble-wrapper">
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
                <span></span>
            </div>
            {/* <!-- bubbles wrapper --> */}

            <div class="dd-sectionInner container-fluid">
                <div class="row align-items-center py-4 py-md-0">
                <div className="col-md-6 text-center py-3 py-md-0">
  <img src={img} alt="..." className="img-fluid" /> 

</div>

                    <div class="col-md-5 py-3 py-md-0">
                        <h6 class="fw-bold text-uppercase">Design & Development</h6>
                        <h3 class="h2 fw-bolder">Custom Software Solutions</h3>
                        <p>We deliver high-fidelity solutions for web, mobile, and desktops
                            mapped onto your unique business processes. We build, modernize,
                            optimize and scale your business apps using the latest SDLC tools
                            and cross-platform technologies.</p>
                        <ul>
                            <li>UI/UX Design & Prototyping</li>
                            <li>eCommerce Solutions</li>
                            <li>Native & Hybrid Apps</li>
                            <li>MVP, PWA & CMS</li>
                            <li>On-Demand Apps</li>
                            <li>APIs Development</li>
                            <li>Quality Assurance</li>
                        </ul>
                        <button type="button" class="btn rounded-pill mt-4">More Details</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <!------ Design & Development Section End ------> */}
    </div>
  )
}

export default Designe

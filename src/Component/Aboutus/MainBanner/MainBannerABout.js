import React from 'react'
import cube1 from "../../../images/AboutUspage/cube1.png"
import cube2 from "../../../images/AboutUspage/cube2.png"
import cube3 from "../../../images/AboutUspage/cube3.png"
import cube4 from "../../../images/AboutUspage/cube4.png"
import cube5 from "../../../images/AboutUspage/cube5.png"
import img from "../../../images/AboutUspage/main-banner2.png"

function MainBannerABout() {
  return (
    <div>
      {/*---- Main Banner Start ----*/}
<div className="main-banner container-fluid position-relative">
  {/* bubbles wrapper */}
  <div className="bubble-wrapper">
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
  </div>
  {/* bubbles wrapper */}
  <div className="row align-items-center p-md-0 ps-lg-5 gap-lg-3 pt-5 justify-content-center justify-content-lg-start">
    <div className="col-md-5 ps-lg-5">
      <h1 className="fw-bold text-white position-relative">About Us</h1>
      <p className="fw-normal text-white mt-3">Lorem Ipsum is simply dummy text of the printing
        and typesetting industry.</p>
    </div>
    <div className="col-md-6 text-center text-md-start">
      <div className="cubes">
        <img src={cube1} alt="..." className="img-fluid" />
        <img src={cube2} alt="..." className="img-fluid" />
        <img src={cube3} alt="..." className="img-fluid" />
        <img src={cube4} alt="..." className="img-fluid" />
        <img src={cube5} alt="..." className="img-fluid" />
      </div>
    </div>
  </div>
</div>
{/* ---- Main Banner End ---- */}
{/* <!-----overlay image ------> */}
        <img src={img} alt="...." class="img-fluid overlay-img d-none d-md-block"/>
        {/* <!-----overlay image ------> */}
    </div>
  )
}

export default MainBannerABout

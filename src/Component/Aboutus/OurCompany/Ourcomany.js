import React from 'react'
import img from "../../../images/AboutUspage/Ellipse.png"
import img2 from "../../../images/AboutUspage/goal.png" 
import img3 from "../../../images/AboutUspage/1.png"
import img4 from "../../../images/AboutUspage/mission.png"
import img5 from "../../../images/AboutUspage/2.png"
import img6 from "../../../images/AboutUspage/vision.png"
import img7 from "../../../images/AboutUspage/3.png"
function Ourcomany() {
  return (
    <div>
      {/*-------- Mission & Goal Section Start --------*/}
<div className="mission-section pt-5 position-relative">
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
  <div className="container pt-sm-5">
    <div className="row pt-lg-5 gy-4 gy-md-0">
      <div className="col-md-4 px-md-3">
        <div className="card">
          <div className="ellipse position-relative">
            <img src={img} alt="..." className="img-fluid ellipse-img1" />
            <img src={img2} alt="..." className="img-fluid ellipse-img2" />
            <img src={img3} alt="..." className="img-fluid count-img" />
          </div>
          <div className="card-body">
            <h4 className="fw-bold">Our Goals</h4>
            <p>Lorem ipsum dolor amet consectetur
              adipiscing elit do eiusmod tempor
              incid idunt ut labore.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 px-md-3">
        <div className="card">
          <div className="ellipse position-relative">
            <img src={img} alt="..." className="img-fluid ellipse-img1" />
            <img src={img4} alt="..." className="img-fluid ellipse-img2" />
            <img src={img5} alt="..." className="img-fluid count-img" />
          </div>
          <div className="card-body">
            <h4 className="fw-bold">Our Mission</h4>
            <p>Lorem ipsum dolor amet consectetur
              adipiscing elit do eiusmod tempor
              incid idunt ut labore.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 px-md-3">
        <div className="card">
          <div className="ellipse position-relative">
            <img src={img} alt="..." className="img-fluid ellipse-img1" />
            <img src={img6} alt="..." className="img-fluid ellipse-img2" />
            <img src={img7} alt="..." className="img-fluid count-img" />
          </div>
          <div className="card-body">
            <h4 className="fw-bold">Our Vision</h4>
            <p>Lorem ipsum dolor amet consectetur
              adipiscing elit do eiusmod tempor
              incid idunt ut labore.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/*-------- Mission & Goal Section End ---------*/}

    </div>
  )
}

export default Ourcomany

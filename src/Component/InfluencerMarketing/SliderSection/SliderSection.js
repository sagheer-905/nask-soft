import React from 'react'
import img1 from "../../../images/InfluencerMarketing/Panel.png"

function SliderSection() {
  return (
    <div>
      {/*----- Influencer marketing Working Section Start -----*/}
<div className="inflMarket_work py-5">
  <div className="container py-md-3">
    <h3 className="h2 text-uppercase fw-bold text-center mb-4">How does it work?</h3>
    {/* carousel */}
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={3} aria-label="Slide 4" />
      </div>
      {/* slide 1 */}
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval={10000}>
          <div className="row align-items-center gy-5 gy-md-0">
            <div className="col-md-5 pe-md-5">
              <h4 className="h3 fw-bold text-uppercase mb-3">Step 01.</h4>
              <h5 className="fw-bold text-uppercase mb-4">Create a new compaign</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec finibus ligula. Fusce nec
                urna mauris. Sed mattis mollis ante, a maximus mauris mollis scelerisque.</p>
              <button className="btn rounded-pill">View Details</button>    
            </div>
            <div className="col-md-7">
              <img src={img1} alt="..." className="img-fluid" />
            </div>
          </div>
        </div>
        {/* slide 2 */}
        <div className="carousel-item" data-bs-interval={2000}>
          <div className="row align-items-center gy-5 gy-md-0">
            <div className="col-md-5 pe-md-5">
              <h4 className="h3 fw-bold text-uppercase mb-3">Step 02.</h4>
              <h5 className="fw-bold text-uppercase mb-4">Create a new compaign</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec finibus ligula. Fusce nec
                urna mauris. Sed mattis mollis ante, a maximus mauris mollis scelerisque.</p>
              <button className="btn rounded-pill">View Details</button>    
            </div>
            <div className="col-md-7">
              <img src={img1} alt="..." className="img-fluid" />
            </div>
          </div>
        </div>
        {/* slide 3 */}
        <div className="carousel-item">
          <div className="row align-items-center gy-5 gy-md-0">
            <div className="col-md-5 pe-md-5">
              <h4 className="h3 fw-bold text-uppercase mb-3">Step 03.</h4>
              <h5 className="fw-bold text-uppercase mb-4">Create a new compaign</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec finibus ligula. Fusce nec
                urna mauris. Sed mattis mollis ante, a maximus mauris mollis scelerisque.</p>
              <button className="btn rounded-pill">View Details</button>    
            </div>
            <div className="col-md-7">
              <img src={img1} alt="..." className="img-fluid" />
            </div>
          </div>
        </div>
        {/* slide 4 */}
        <div className="carousel-item">
          <div className="row align-items-center gy-5 gy-md-0">
            <div className="col-md-5 pe-md-5">
              <h4 className="h3 fw-bold text-uppercase mb-3">Step 04.</h4>
              <h5 className="fw-bold text-uppercase mb-4">Create a new compaign</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec finibus ligula. Fusce nec
                urna mauris. Sed mattis mollis ante, a maximus mauris mollis scelerisque.</p>
              <button className="btn rounded-pill">View Details</button>    
            </div>
            <div className="col-md-7">
              <img src={img1} alt="..." className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* carousel */}
  </div>
</div>
{/*----- Influencer marketing Working Section End -----*/}

    </div>
  )
}

export default SliderSection

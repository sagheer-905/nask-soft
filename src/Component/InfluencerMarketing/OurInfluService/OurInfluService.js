import React from 'react'
import img1 from "../../../images/InfluencerMarketing/Path85.png"
import img2 from "../../../images/InfluencerMarketing/Insta.png"
import img3 from "../../../images/InfluencerMarketing/youtube.png"
import img4 from "../../../images/InfluencerMarketing/tiktok.png"
import img5 from "../../../images/InfluencerMarketing/Twittch.png"
function OurInfluService() {
  return (
    <div>
      {/*----- Influencer marketing Services Section Start -----*/}
<div className="inflMarket-services py-5">
  <div className="container position-relative">
    <img src={img1} alt="..." className="img-fluid wavy-path d-none d-lg-block" />
    <h3 className="h2 text-uppercase fw-bold mb-5 text-center">Our Influencer Services.</h3>
    <div className="row gy-4 gy-lg-0 pb-5">
      <div className="col-sm-6 col-lg-3">
        <div className="card py-3 rounded-4 px-xl-3">
          <img src={img2} alt="..." className="img-fluid" />
          <div className="card-body px-4 pt-0">
            <h4 className="fw-bold mb-3">Find Instagram<br /> Influencers.</h4>
            <button className="btn rounded-pill">Read More...</button>
          </div> 
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        <div className="card py-3 rounded-4 px-xl-3">
          <img src={img3} alt="..." className="img-fluid" />
          <div className="card-body px-4 pt-0">
            <h4 className="fw-bold mb-3">Find Youtube<br /> Influencers.</h4>
            <button className="btn rounded-pill">Read More...</button>
          </div> 
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        <div className="card py-3 rounded-4 px-xl-3">
          <img src={img4} alt="..." className="img-fluid" />
          <div className="card-body px-4 pt-0">
            <h4 className="fw-bold mb-3">Find Tiktok<br /> Influencers.</h4>
            <button className="btn rounded-pill">Read More...</button>
          </div> 
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        <div className="card py-3 rounded-4 px-xl-3">
          <img src={img5} alt="..." className="img-fluid" />
          <div className="card-body px-4 pt-0">
            <h4 className="fw-bold mb-3">Find Twitch<br /> Influencers.</h4>
            <button className="btn rounded-pill">Read More...</button>
          </div> 
        </div>
      </div>
    </div>
    <div className="text-center">
      <button className="btn rounded-pill view-btn">View All...</button>
    </div>
  </div>
</div>
{/*----- Influencer marketing Services Section End -----*/}

    </div>
  )
}

export default OurInfluService

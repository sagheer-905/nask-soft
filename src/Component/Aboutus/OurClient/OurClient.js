import React from 'react'
import img from "../../../images/AboutUspage/review2.png"

function OurClient() {
  return (
    <div>
      {/*-------- Client Section Start --------*/}
<div className="client-section py-5">
  <h2 className="fw-bold text-center mb-5">What Our Client Say's</h2>
  {/* slider */}
  <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={3} aria-label="Slide 4" />
    </div>
    <div className="carousel-inner mb-5">
      <div className="carousel-item active" data-bs-interval={10000}>
        <div className="client-review">
          <div className="row justify-content-center align-items-center gy-3 gy-md-0">
            <div className="col-5 col-md-3 col-xl-2">
              <img src={img} alt="" className="img-fluid" />
            </div>
            <div className="col-10 col-md-6 col-xl-5">
              <h6 className="blockqoute">
                Nullam et velit mollis, dictum eros a, vehicula turpis. Aenean feugiat congue
                faucibus. Nullam dapibus ex ex, vulputate gravida nisi mattis in. Duis maximus
                odio sed turpis vehicula auctor sit amet ut urna. Nam non libero ut ex
                fermentum consectetur et in dolor. Morbi tempor gravida diam nec lacinia.
                Suspendisse vehicula ultricies arcu.
              </h6>
              <span className="author">Cak Dikin</span>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval={2000}>
        <div className="client-review">
          <div className="row justify-content-center align-items-center gy-3 gy-md-0">
            <div className="col-5 col-md-3 col-xl-2">
              <img src={img} alt="" className="img-fluid" />
            </div>
            <div className="col-10 col-md-6 col-xl-5">
              <h6 className="blockqoute">
                Nullam et velit mollis, dictum eros a, vehicula turpis. Aenean feugiat congue
                faucibus. Nullam dapibus ex ex, vulputate gravida nisi mattis in. Duis maximus
                odio sed turpis vehicula auctor sit amet ut urna. Nam non libero ut ex
                fermentum consectetur et in dolor. Morbi tempor gravida diam nec lacinia.
                Suspendisse vehicula ultricies arcu.
              </h6>
              <span className="author">Cak Dikin</span>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="client-review">
          <div className="row justify-content-center align-items-center gy-3 gy-md-0">
            <div className="col-5 col-md-3 col-xl-2">
              <img src={img} alt="" className="img-fluid" />
            </div>
            <div className="col-10 col-md-6 col-xl-5">
              <h6 className="blockqoute">
                Nullam et velit mollis, dictum eros a, vehicula turpis. Aenean feugiat congue
                faucibus. Nullam dapibus ex ex, vulputate gravida nisi mattis in. Duis maximus
                odio sed turpis vehicula auctor sit amet ut urna. Nam non libero ut ex
                fermentum consectetur et in dolor. Morbi tempor gravida diam nec lacinia.
                Suspendisse vehicula ultricies arcu.
              </h6>
              <span className="author">Cak Dikin</span>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="client-review">
          <div className="row justify-content-center align-items-center gy-3 gy-md-0">
            <div className="col-5 col-md-3 col-xl-2">
              <img src={img} alt="" className="img-fluid" />
            </div>
            <div className="col-10 col-md-6 col-xl-5">
              <h6 className="blockqoute">
                Nullam et velit mollis, dictum eros a, vehicula turpis. Aenean feugiat congue
                faucibus. Nullam dapibus ex ex, vulputate gravida nisi mattis in. Duis maximus
                odio sed turpis vehicula auctor sit amet ut urna. Nam non libero ut ex
                fermentum consectetur et in dolor. Morbi tempor gravida diam nec lacinia.
                Suspendisse vehicula ultricies arcu.
              </h6>
              <span className="author">Cak Dikin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/*-------- Client Section End --------*/}

    </div>
  )
}

export default OurClient

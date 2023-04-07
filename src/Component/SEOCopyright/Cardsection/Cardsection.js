import React from 'react'
import img1 from "../../../images/SEOcopywriting/a.png" 
import img2 from "../../../images/SEOcopywriting/b.png" 
import img3 from "../../../images/SEOcopywriting/c.png" 

function Cardsection() {
  return (
    <div>
      {/*---seo-card-section-start---*/}
<div className="seo-card-section py-5">
  <div className="container">
    <h3 className="h2 text-center fw-bold mb-5">YOUR BENEFITS OF OUR EXPERTIES</h3>
    <div className="row gy-4 gy-lg-0">
      <div className="col-lg-4">
        <div className="card">
          <img src={img1} className="img-fluid" alt="...." />
          <div className="card-body">
            <h4 className="card-title">Deliver what your audience wants to see</h4>
            <p className="card-text">Do you need to be at the top of the search? To get customers you
              must come in first for your audience, which is why our specialists focus on your
              customers and potential audience members who will be attracted to the web search.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <img src={img2} className="img-fluid" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Using buying triggers in SEO copy</h4>
            <p className="card-text">Our SEO specialists work closely with you to incorporate buying
              triggers into your SEO copy. We also learn in-depth all about your product and
              audience. This approach helps us to best convert the audience into buyers in the
              most organic way.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <img src={img3} className="img-fluid" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Implementing other SEO techniques</h4>
            <p className="card-text">Professional SEO copy includes elements that make this copy
              preferable to search engines. Our SEO specialists consider interlinking, anchors,
              image search optimizations, and other techniques for your SEO copies.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/*---seo-card-section-end---*/}

    </div>
  )
}

export default Cardsection

import React from 'react'
import img1 from "../../../images/DigitalMarketing/benifits1.png" 
import img3 from "../../../images/DigitalMarketing/benifits2.png"
import img4 from "../../../images/DigitalMarketing/benifits3.png"
function Benefits() {
  return (
    <div>
      {/*---- Digital marketing Benefits section start -----*/}
<div className="digitalMarket-benefits py-5">
  <div className="container py-md-4">
    <h3 className="h2 text-uppercase fw-bold text-center mb-5">Your benefits our key experties</h3>
    <div className="row gy-4 gy-md-0">
      <div className="col-md-4">
        <div className="card rounded-4 px-3 px-xl-5 py-4">
          <div className="card-img text-center">
            <img src={img1} alt="..." className="img-fluid" />
          </div>
          <h5 className="fw-semibold text-uppercase mt-4 mb-3">Identification of Selling Points</h5>
          <p>We analyze your business and customers to identify specific characteristics that will persuade
            people to buy your product or service.
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card rounded-4 px-3 px-xl-5 py-4">
          <div className="card-img text-center">
            <img src={img3} alt="..." className="img-fluid" />
          </div>
          <h5 className="fw-semibold text-uppercase mt-4 mb-3">Tailored marketing Strategy</h5>
          <p>We understand the pros and cons of digital marketing services. 
            Using this knowledge, we will customize a marketing startegy.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card rounded-4 px-3 px-xl-5 py-4">
          <div className="card-img text-center">
            <img src={img4} alt="..." className="img-fluid" />
          </div>
          <h5 className="fw-semibold text-uppercase mt-4 mb-3">Customer-Centric Approach</h5>
          <p>We focus on your customers, their needs, and what they are looking for.
            This will help you to achieve your business goals.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
{/*---- Digital marketing Benefits section end -----*/}

    </div>
  )
}

export default Benefits

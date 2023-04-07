import React from 'react'
import img1 from "../../../images/ppcServices/checklist-1.png"
import img2 from "../../../images/ppcServices/checklist-3.png"
import img3 from "../../../images/ppcServices/checklist-5.png"
import img4 from "../../../images/ppcServices/checklist-2.png"
import img5 from "../../../images/ppcServices/checklist-4.png"
import img6 from "../../../images/ppcServices/checklist-6.png"


function PPCceckout() {
  return (
    <div>
      {/*---- PPC Checklist section start -----*/}
<div className="ppc-checklist pt-md-4 pb-5">
  <div className="container">
    <h3 className="h2 text-center text-uppercase fw-bold mb-4 mb-md-5">Nasksoft's PPC Checklist</h3>
    <div className="row justify-content-between">
      <div className="col-lg-5">
        <div className="row align-items-center pb-4 pb-md-5">
          <div className="col-3">
            <img src={img1} alt="..." className="img-fluid" />
          </div>
          <div className="col-9">
            <h6 className="text-uppercase fw-semibold">Analytics</h6>
            <p>A detailed analysis of your products or services, business goals, target audience, landing pages and website security. This step also includes an audit of analytical tools and accounts on PPC platforms.</p>
          </div>
        </div>
        <div className="row align-items-center pb-4 pb-md-5">
          <div className="col-3">
            <img src={img2} alt="..." className="img-fluid" />
          </div>
          <div className="col-9">
            <h6 className="text-uppercase fw-semibold">KEYWORDS RESEARCH</h6>
            <p>Based on the analysis, the specialist creates a complete list of search queries and negative keywords. Then the specialist structures your campaign logically around a group of keywords.</p>
          </div>
        </div>
        <div className="row align-items-center pb-4 pb-md-5 pb-lg-0">
          <div className="col-3">
            <img src={img3} alt="..." className="img-fluid" />
          </div>
          <div className="col-9">
            <h6 className="text-uppercase fw-semibold">DEVELOPMENT AND CUSTOMIZATION</h6>
            <p>The specialist starts developing ad copies that are relevant to those sets of keywords and uses them on landing pages.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="row align-items-center pb-4 pb-md-5">
          <div className="col-3">
            <img src={img4} alt="..." className="img-fluid" />
          </div>
          <div className="col-9">
            <h6 className="text-uppercase fw-semibold">TEST AND OPTIMIZATION AD CAMPAIGNS</h6>
            <p>The specialist then launches a campaign. The specialist collects data, and then corrects and adjusts campaigns. The key factors are keywords, quality score, conversion rate and cost per click. The specialist also must check...</p>
          </div>
        </div>
        <div className="row align-items-center pb-4 pb-md-5">
          <div className="col-3">
            <img src={img5} alt="..." className="img-fluid" />
          </div>
          <div className="col-9">
            <h6 className="text-uppercase fw-semibold">RUN AD CAMPAIGNS</h6>
            <p>The positive results of tests allow us to run ad campaigns. The specialist continues to optimize campaigns to achieve better results. Every ad campaign on the web.</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-3">
            <img src={img6} alt="..." className="img-fluid" />
          </div>
          <div className="col-9">
            <h6 className="text-uppercase fw-semibold">STATISTICAL ANALYSIS</h6>
            <p>At this stage, the specialist processes data and creates a report which will help you develop your business.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/*---- PPC Checklist section end-----*/}

    </div>
  )
}

export default PPCceckout

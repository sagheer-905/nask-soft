import React from 'react'
import img1 from "../../../images/SEOcopywriting/aro1.png"
import img2 from "../../../images/SEOcopywriting/search.png"
import img3 from "../../../images/SEOcopywriting/seo.png"
import img4 from "../../../images/SEOcopywriting/aro2.png"
import img5 from "../../../images/SEOcopywriting/seo1.png"
import img6 from "../../../images/SEOcopywriting/arrow.png"
function Circlesection() {
  return (
    <div>
      {/*---seo-circle-section-start---*/}
<div className="seo-circle-section-start my-5">
  <div className="container">
    <h3 className="h2 text-center fw-bold pb-4 pb-md-5">NASKSOFT SEO COPYRIGHTING PROCESS </h3>
    <div className="row text-center gy-4 gy-md-0 pt-md-5">
      <div className="col-md-3 position-relative text-center">
        <img src={img1} alt="..." className="img-fluid aro1" />
        <img src={img2} alt="..." className="img-fluid circle-img" />
        <h5 className="my-3">PREPARATORY PHASE</h5>
        <p>Once we get your message, our project manager will contact you to discuss your needs in more
          detail. When we have all of the necessary information, the project manager will create a
          plan and calculate the cost of your SEO copywriting services.</p>
      </div>
      <div className="col-md-3 position-relative text-center">
        <img src={img3} alt="..." className="img-fluid d-md-none mx-auto" />
        <h5 className="my-3">RESEARCH PHASE</h5>
        <p>Your industry, location, or product has the potential to be very specific. We understand this
          and we tailor our research to your project. As a result, you will get a detailed report
          which you can use for marketing, sales, or other business purposes.</p>
        <img src={img3} alt="..." className="img-fluid d-none d-md-block mx-auto circle-img" />
        <img src={img4} alt="..." className="img-fluid aro2" />
      </div>
      <div className="col-md-3 position-relative text-center">
        <img src={img1} alt="..." className="img-fluid aro1" />
        <img src={img5} alt="..." className="img-fluid circle-img" />
        <h5 className="my-3">CREATION PHASE</h5>
        <p>Once the data has been gathered, we will easily be able to create you ready to use SEO copy
          for your website. The beginning stages will help you to understand how we are planning to
          attract visitors from web searches and convert them into customers.</p>
      </div>
      <div className="col-md-3 position-relative text-center">
        <img src={img6} alt="..." className="img-fluid d-md-none mx-auto" />
        <h5 className="my-3">IMPLEMENTATION AND MONITORING PHASES</h5>
        <p>This phase is an assessment of the previous efforts. The main question of website owners is
          how long to wait for results. New pages will need more time because they have no search history</p>
        <img src={img6} alt="..." className="img-fluid d-none d-md-block mx-auto circle-img" />
        <img src={img4} alt="..." className="img-fluid aro2" />
      </div>
    </div>
  </div>
</div>
{/*---seo-circle-section-end---*/}

    </div>
  )
}

export default Circlesection

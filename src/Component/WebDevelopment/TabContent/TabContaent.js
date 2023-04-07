import React from 'react'
import img from "../../../images/WebDevelopment/web-cycle.png"
import img2 from "../../../images/WebDevelopment/01.png"
import img3 from "../../../images/WebDevelopment/strategy.png"
import img4 from "../../../images/WebDevelopment/design.png"
import img5 from "../../../images/WebDevelopment/02.png"
import img6 from "../../../images/WebDevelopment/03.png"
import img7 from "../../../images/WebDevelopment/develop.png"
import img8 from "../../../images/WebDevelopment/QA.png"
import img9 from "../../../images/WebDevelopment/04.png"
import img10 from "../../../images/WebDevelopment/05.png"
import img11 from "../../../images/WebDevelopment/support.png"
function TabContaent() {
  return (
    <div>
      {/*---- Web Process Cycle Section Start ----*/}
<div className="web-cycle py-lg-5 position-relative">
  <img src={img} alt="..." className="img-fluid w-100 web-bg" />
  <div className="webcycle-inner">
    <div className="container">
      {/* row 1 */}
      <div className="row align-items-center justify-content-center">
        <div className="col-9 col-sm-4 text-sm-end">
          <img src={img2} alt="..." className="img-fluid count_img" />
        </div>
        <div className="col-5 col-sm-3">
          <img src={img3} alt="..." className="img-fluid" />
        </div>
        <div className="col-9 col-sm-4">
          <p>We define your competition and target audience.
            Discover what is working in your online industry,
            then design your website accordingly.</p>
        </div>
      </div>
      {/* row 2 */}
      <div className="row align-items-center justify-content-center">
        <div className="col-9 col-sm-4 order-3 order-sm-1">
          <p className="text-sm-end">Color scheme, layout, sitemap, and style.
            We will bring your brand to life with a one
            of a kind masterpiece, built just for you.</p>
        </div>
        <div className="col-5 col-sm-3 order-2">
          <img src={img4} alt="..." className="img-fluid" />
        </div>
        <div className="col-9 col-sm-4 order-1 order-sm-3">
          <img src={img5} alt="..." className="img-fluid count_img" />
        </div>
      </div>
      {/* row 3 */}
      <div className="row align-items-center justify-content-center">
        <div className="col-9 col-sm-4 text-sm-end">
          <img src={img6} alt="..." className="img-fluid count_img" />
        </div>
        <div className="col-5 col-sm-3">
          <img src={img7} alt="..." className="img-fluid" />
        </div>
        <div className="col-9 col-sm-4">
          <p>We turn your ideas into a reality. &amp;our website is
            placed on a "development server" where you get
            to watch the whole process, live.</p>
        </div>
      </div>
      {/* row 4 */}
      <div className="row align-items-center justify-content-center">
        <div className="col-9 col-sm-4 order-3 order-sm-1">
          <p className="text-sm-end">Quality assurance is meant to monitor and
            improve the whole development process to
            make sure any problems are found and fixed
            in time</p>
        </div>
        <div className="col-5 col-sm-3 order-2">
          <img src={img8} alt="..." className="img-fluid" />
        </div>
        <div className="col-9 col-sm-4 order-1 order-sm-3">
          <img src={img9} alt="..." className="img-fluid count_img" />
        </div>
      </div>
      {/* row 5 */}
      <div className="row align-items-center justify-content-center">
        <div className="col-9 col-sm-4 text-sm-end">
          <img src={img10} alt="..." className="img-fluid count_img" />
        </div>
        <div className="col-5 col-sm-3">
          <img src={img11} alt="..." className="img-fluid" />
        </div>
        <div className="col-9 col-sm-4">
          <p>This is where you go live, to the world. Design,
            marketing, and maintenance; we'll be at your side
            for the life of your site</p>
        </div>
      </div>
    </div>
  </div>
</div>
{/*---- Web Process Cycle Section End ----*/}

    </div>
  )
}

export default TabContaent

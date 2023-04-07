import React from 'react'
import img from "../../../images/ppcServices/advantage.png"
function PPCcanDo() {
  return (
    <div>
      {/*----- PPC Business Section Start -----*/}
<div className="ppc-business py-5 position-relative">
  {/* waves Start*/}
  <div id="wave-1">
    <div className="waves">
      <div className="d-none d-md-block" />
    </div>
  </div>
  {/* waves End*/}
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-10 col-lg-8 text-center">
        <h3 className="fw-bold text-uppercase mb-4">WHAT PCC CAN DO FOR YOUR BUSINESS</h3>
        <p>Contextual ad platforms allow you to target an audience by key requests or interests. You can also set up preferred locations, languages, and interests, as well as specify a time period to attract relevant traffic. You can also, of 
          course, set up an ad to attract as wide an audience as possible. You can use different types of ads such as texts, banners, and videos. It’s better to use contextual advertising.</p>
      </div>
    </div>
  </div>
</div>
{/*----- PPC Business Section End -----*/}
{/*----- PPC Advantages Section Start -----*/}
<div className="ppc-advantage position-relative">
  {/* waves Start*/}
  <div id="wave-1">
    <div className="waves">
      <div className="d-none d-md-block" />
    </div>
  </div>
  {/* waves End*/}
  <div className="container position-relative">
    <img src={img} alt="..." className="img-fluid d-none d-md-block" />
    <h3 className="h2 text-center text-uppercase fw-bold mb-4">Advantages of PPC</h3>
    <div className="row justify-content-between gy-4 gy-md-0">
      <div className="col-md-4 col-lg-3 px-md-4">
        <h5 className="fw-bold">Remarketing</h5>
        <p>Remarketing is the process of reaching people who have previously visited your website. Remarketing requires special data gathered by analytics tools such as Google Analytics or Facebook Pixel.</p>
      </div>
      <div className="col-md-4 col-lg-3 px-md-4">
        <h5 className="fw-bold">Measurable Results</h5>
        <p>PPC is a way to see measurable results in comparison with other site promotion methods. contextual advertising platform provide different forms of metrics that enable you to see how well.</p>
      </div>
      <div className="col-md-4 col-lg-3 px-md-4">
        <h5 className="fw-bold">Greater Control</h5>
        <p>Total control is  impossible because all PPC platforms are based on algorithms and statistical models Although contextual advertising can be expensive method it leaves you less susceptible.</p>
      </div>
    </div>
  </div>
</div>
{/*----- PPC Advantages Section End -----*/}

    </div>
  )
}

export default PPCcanDo

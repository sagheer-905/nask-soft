import React from 'react'
import img1 from "../../../images/Homepage/technology1.png"
import img2 from "../../../images/Homepage/technology2.png"
import img3 from "../../../images/Homepage/technology3.png"
import img4 from "../../../images/Homepage/technology4.png"
import img5 from "../../../images/Homepage/technology5.png"
import img6 from "../../../images/Homepage/technology6.png"
import img7 from "../../../images/Homepage/html.png"
import img8 from "../../../images/Homepage/css.png"
import img9 from "../../../images/Homepage/android.png"
import img10 from "../../../images/Homepage/ios.png"
import img11 from "../../../images/Homepage/mysql.png"
import img12 from "../../../images/Homepage/sql-server.png"
import img13 from "../../../images/Homepage/wordpress.png"
import img14 from "../../../images/Homepage/sharepoint.png"
import img15 from "../../../images/Homepage/azure.png"
import img16 from "../../../images/Homepage/aws.png"
import img17 from "../../../images/Homepage/selenium.png"
import img18 from "../../../images/Homepage/cucumber.png"
import img19 from "../../../images/Homepage/github.png"
import img20 from "../../../images/Homepage/bitbucket.png"
import img21 from "../../../images/Homepage/mean.png"
import img22 from "../../../images/Homepage/solidity.png"
import img23 from "../../../images/Homepage/truffle.png"

function OurTechnologies() {
  return (
    <div>
      {/*------- Technologies Section Start --------*/}
<div className="container-fluid technology-section py-5">
  <div className="row justify-content-center pt-md-4">
    <div className="col-md-7 text-center">
      <h2 className="fw-bold mb-4">Our Core Technologies</h2>
      <p>Nasksoft works under various modern technologies for effective, scalable, and future-proof custom
        software development</p>
    </div>
    <div className="col-md-10 text-center">
      {/* tabs pills */}
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="backend" data-bs-toggle="pill" data-bs-target="#backend-tab" type="button" role="tab" aria-controls="pills-backend" aria-selected="true">Backend</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="frontend" data-bs-toggle="pill" data-bs-target="#frontend-tab" type="button" role="tab" aria-controls="pills-frontend" aria-selected="false">Frontend</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="mobile" data-bs-toggle="pill" data-bs-target="#mobile-tab" type="button" role="tab" aria-controls="pills-mobile" aria-selected="false">Mobile</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="database" data-bs-toggle="pill" data-bs-target="#database-tab" type="button" role="tab" aria-controls="pills-database" aria-selected="false">Database</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="cms" data-bs-toggle="pill" data-bs-target="#cms-tab" type="button" role="tab" aria-controls="pills-cms" aria-selected="false">CMS</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="cloud" data-bs-toggle="pill" data-bs-target="#cloud-tab" type="button" role="tab" aria-controls="pills-cloud" aria-selected="false">Cloud</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="testing-tool" data-bs-toggle="pill" data-bs-target="#testing-tool-tab" type="button" role="tab" aria-controls="pills-testing-tool" aria-selected="false">Testing Tools</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="devops" data-bs-toggle="pill" data-bs-target="#devops-tab" type="button" role="tab" aria-controls="pills-devops" aria-selected="false">DevOps</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="full-stack" data-bs-toggle="pill" data-bs-target="#full-stack-tab" type="button" role="tab" aria-controls="pills-full-stack" aria-selected="false">Full Stacks</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="blockchain" data-bs-toggle="pill" data-bs-target="#blockchain-tab" type="button" role="tab" aria-controls="pills-blockchain" aria-selected="false">Blockchain</button>
        </li>
      </ul>
      {/* tabs content */}
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="backend-tab" role="tabpanel" aria-labelledby="pills-backend-tab" tabIndex={0}>
          <div className="row pt-4 pb-5 gy-4">
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img1} alt="..." className="img-fluid w-100" />
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img2} alt="..." className="img-fluid w-100" />
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img3} alt="..." className="img-fluid w-100" />
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img4} alt="..." className="img-fluid w-100" />
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img5} alt="..." className="img-fluid w-100" />
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img6} alt="..." className="img-fluid w-100" />
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="frontend-tab" role="tabpanel" aria-labelledby="pills-frontend-tab" tabIndex={0}>
          <div className="row pt-4 pb-5 gy-4">
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img7} alt="..." className="img-fluid w-100" />
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img8} alt="..." className="img-fluid w-100" />
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="mobile-tab" role="tabpanel" aria-labelledby="pills-mobile-tab" tabIndex={0}>
          <div className="row pt-4 pb-5 gy-4">
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img9} alt="..." className="img-fluid w-100" />
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img10} alt="..." className="img-fluid w-100" />
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="database-tab" role="tabpanel" aria-labelledby="pills-database-tab" tabIndex={0}>
          <div className="row pt-4 pb-5 gy-4">
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img11} alt="..." className="img-fluid w-100" />
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img12} alt="..." className="img-fluid w-100" />
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="cms-tab" role="tabpanel" aria-labelledby="pills-cms-tab" tabIndex={0}>
          <div className="row pt-4 pb-5 gy-4">
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img13} alt="..." className="img-fluid w-100" />
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img14} alt="..." className="img-fluid w-100" />
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="cloud-tab" role="tabpanel" aria-labelledby="pills-cloud-tab" tabIndex={0}>
          <div className="row pt-4 pb-5 gy-4">
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img15} alt="..." className="img-fluid w-100" />
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img16} alt="..." className="img-fluid w-100" />
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="testing-tool-tab" role="tabpanel" aria-labelledby="pills-testing-tool-tab" tabIndex={0}>
          <div className="row pt-4 pb-5 gy-4">
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img17} alt="..." className="img-fluid w-100" />
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img18} alt="..." className="img-fluid w-100" />
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="devops-tab" role="tabpanel" aria-labelledby="pills-devops-tab" tabIndex={0}>
          <div className="row pt-4 pb-5 gy-4">
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img19} alt="..." className="img-fluid w-100" />
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img20} alt="..." className="img-fluid w-100" />
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="full-stack-tab" role="tabpanel" aria-labelledby="pills-full-stack-tab" tabIndex={0}>
          <div className="row pt-4 pb-5 gy-4">
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img21} alt="..." className="img-fluid w-100" />
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="blockchain-tab" role="tabpanel" aria-labelledby="pills-blockchain-tab" tabIndex={0}>
          <div className="row pt-4 pb-5 gy-4">
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img22} alt="..." className="img-fluid w-100" />
            </div>
            <div className="col-6 col-sm-4 col-lg-2">
              <img src={img23} alt="..." className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/*------- Technologies Section End --------*/}

    </div>
  )
}

export default OurTechnologies

import React, { useState } from 'react'
import logo from "../../images/Homepage/logo.png"
import img1 from "../../images/Homepage/menu.png"
import img2 from "../../images/Homepage/facebook.png"
import img3 from "../../images/Homepage/instagram.png"
import img4 from "../../images/Homepage/twitter.png"
import img5 from "../../images/Homepage/linkedin.png"
import icon from '../../images/icon/download.png'
import icon2 from '../../images/icon/download (1).png'
import icon3 from '../../images/icon/download (2).png'
import icon4 from '../../images/icon/download (3).png'
import icon5 from '../../images/icon/download (4).png'
import icon6 from '../../images/icon/download (5).png'
import icon7 from '../../images/icon/download (6).png'
import icon8 from '../../images/icon/download (7).png'
import icon9 from '../../images/icon/download (8).png'
import icon10 from '../../images/icon/download (9).png'
import icon11 from '../../images/icon/download (10).png'
import icon12 from '../../images/icon/download (11).png'
import icon13 from '../../images/icon/download (12).png'
import icon14 from '../../images/icon/download (13).png'
import icon15 from '../../images/icon/download (14).png'
import icon16 from '../../images/icon/download (15).png'
import icon17 from '../../images/icon/download (16).png'
import icon18 from '../../images/icon/download (17).png'
import icon19 from '../../images/icon/download (18).png'
import icon20 from '../../images/icon/download (19).png'
import icon21 from '../../images/icon/download (20).png'
import icon22 from '../../images/icon/download (21).png'
import icon23 from '../../images/icon/download (22).png'
import icon24 from '../../images/icon/download (23).png'
import icon25 from '../../images/icon/download (24).png'




import { Link, Outlet } from 'react-router-dom'
import './DropDown.css'

function Navbar() {


  const [stiky, setSteky] = useState(false)
  window.addEventListener("scroll", function () {
    console.log(window);
    if (window.scrollY > 60) {
      setSteky(true)
    }
    else {
      setSteky(false)
    }
  })
  return (
    <div>
      {/*----- Navbar Start -----*/}
      <div className={stiky ? "navbar-bg row navigation-bar fixed-top" : "row navigation-bar fixed-top"}>
        <div className="col-lg-11">
          <nav className="navbar navbar-expand-lg navbar-light px-lg-5">
            <div className="container-fluid">
              <a className="navbar-brand ps-md-3 ps-xl-5" href="index.html"><img src={logo} alt="..." className="img-fluid" /></a>
              <button className="navbar-toggler pe-md-3 pe-lg-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse p-3 p-lg-0" id="navbarNav">
                <ul className="navbar-nav ms-auto gap-lg-4 gap-xl-5">
                  <li className="nav-item">
                    <Link className="nav-link" to='/'>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/aboutus'>About Us</Link>
                  </li>

                  <li className="nav-item" id='drop'>
                    <Link className="nav-link" to='/service'>Services</Link>
                    <ul class="dropdown">
                      <div className='dropdown_box'>
                        <h5>DEVELOPMENT</h5>
                        <div className='icon_img'>

                          <Link to='/webdevelopment'>

                            <img src={icon} alt='...' />
                            <p>WEB DEVELOPMENT</p>
                          </Link>
                        </div>
                        <div className='icon_img'>

                          <Link to='/wordpress'>

                            <img src={icon2} alt='...' />
                            <p>APP DEVELOPMENT</p>
                          </Link>
                        </div>
                        <div className='icon_img'>
                          <Link to='/wordpress'>
                            <img src={icon3} alt='...' />
                            <p>WORDPRESS DEVELOPMENT</p>
                          </Link>
                        </div>
                        <div className='icon_img'>
                          <Link to='/itnetworking'>
                            <img src={icon4} alt='...' />
                            <p>IT NETWORKING SERVICES</p>
                          </Link>
                        </div>

                      </div>
                      <div className='dropdown_box'>
                        <h5>DESIGN</h5>
                        <div className='icon_img'>
                          <Link to='/uiuxdeigner'>
                            <img src={icon5} alt='...' />
                            <p>UI/UX DESIGN</p>
                          </Link>
                        </div>
                        <div className='icon_img'>
                          <Link to='/bussines'>
                            <img src={icon6} alt='...' />
                            <p>BUSINESS PROFILE DESIGN</p>
                          </Link>
                        </div> <div className='icon_img'>

                          <img src={icon6} alt='...' />
                          <p>GRAPHIC EDITING</p>
                        </div>
                      </div>
                      <div className='dropdown_box'>
                        <h5>ECOMMERCE</h5>
                        <div className='icon_img'>
                          <Link to='/ecomServices'>
                            <img src={icon7} alt='...' />
                            <p>ECOMMERCE SERVICES</p>
                          </Link>
                        </div>
                        <div className='icon_img'>
                          <Link to='/shopify'>
                            <img src={icon8} alt='...' />
                            <p>SHOPIFY SERVICES</p>
                          </Link>

                        </div> <div className='icon_img'>
                          <Link to='/groupon'>
                            <img src={icon9} alt='...' />
                            <p>GROUPON SERVICES</p>
                          </Link>

                        </div> <div className='icon_img'>
                          <Link to='/amazon'>

                            <img src={icon10} alt='...' />
                            <p>AMAZON SERVICES</p>
                          </Link>
                        </div>
                      </div>
                      <div className='dropdown_box'>
                        <h5>MARKETING</h5>
                        <div className='icon_img'>

                          <img src={icon11} alt='...' />
                          <p>SOCIAL MEDIA MARKETING</p>
                        </div>
                        <div className='icon_img'>
                          <Link to='/infmarketing'>
                            <img src={icon12} alt='...' />
                            <p>INFLUENCER MARKETING</p>
                          </Link>
                        </div> <div className='icon_img'>
                          <Link to='/degitalmarketing'>

                            <img src={icon13} alt='...' />
                            <p>DIGITAL MARKETING</p>
                          </Link>
                        </div>
                        <div className='icon_img'>
                          <Link to='/ppcservices'>
                          <img src={icon21} alt='...' />
                          <p>PPC SERVICES</p>
                          </Link>
                        </div>
                        <div className='icon_img'>
                          <Link to='/emailmarketing'>

                          <img src={icon14} alt='...' />
                          <p>EMAIL MARKETING</p>
                          </Link>
                        </div>
                        <div className='icon_img'>
                          <Link to='/contentmarketing'>
                          <img src={icon15} alt='...' />
                          <p>CONTENT MARKETING</p>
                          </Link>
                        </div> <div className='icon_img'>
                          <Link to='/seoservices'>
                          <img src={icon16} alt='...' />
                          <p>SEO SERVICES</p>
                          </Link>
                        </div> <div className='icon_img'>
                          <Link to='/seocopyright'>

                          <img src={icon17} alt='...' />
                          <p>SEO COPYRIGHTING</p>
                          </Link>
                        </div>
                      </div>
                      <div className='dropdown_box'>
                        <h5>FINANCE</h5>
                        <div className='icon_img'>
                          <Link to="/finacialapperal">
                          <img src={icon18} alt='...' />
                          <p>FINANCE APPRAISALS</p>
                          </Link>
                        </div>
                        <div className='icon_img'>
                          <Link to='/budgetprepare'>
                          <img src={icon19} alt='...' />
                          <p>BUDGET PREPRATION</p>
                          </Link>
                        </div> <div className='icon_img'>
                          <Link to='/vatcalculation'>
                          <img src={icon20} alt='...' />
                          <p>VAT CALCULATION</p>
                          </Link>
                        </div>
                        <div className='icon_img'>
                          <Link to='/bookingKeeping'>
                          <img src={icon22} alt='...' />
                          <p>BOOKING KEEPING</p>
                          </Link>
                        </div>
                        <div className='icon_img'>
                          <Link to='/SaleTexFilling'>
                          <img src={icon23} alt='...' />
                          <p>SALE TAX FILLING</p>
                          </Link>
                        </div> <div className='icon_img'>
                          <Link to="/TexRegistration">
                          <img src={icon24} alt='...' />
                          <p>TAX REGISTRATION</p>
                          </Link>
                        </div> <div className='icon_img'>
                          <Link to='/Incorpuration'>
                          <img src={icon25} alt='...' />
                          <p>INCORPORATION ADVISORY</p>
                          </Link>
                        </div>
                      </div>

                    </ul>

                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/portfolio'>Portfolio</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/contactus">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-1 d-none d-lg-block">
          <a href='/' className="side-bar ps-xl-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <img src={img1} alt="..." className="img-fluid" />
          </a>
        </div>
        <div>
          <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <h4 className="offcanvas-title fw-bold" id="offcanvasRightLabel">Start a Project</h4>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <p>If you want to get a free consultation without any obligations, fill in the form below and
                we'll get in touch with you.</p>
              <div className="phone-email d-flex gap-1 py-4">
                <p><i className="fa-solid fa-phone" /> 0305 1115551</p>
                <p><i className="fa-solid fa-envelope" /> info@nasksoft.com</p>
              </div>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control border-0 rounded-pill" id="name" placeholder="Your name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control border-0 rounded-pill" id="email" placeholder="Your email" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control border-0 rounded-5" id="message" rows={3} placeholder="Your message" defaultValue={""} />
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn rounded-pill text-uppercase">Send
                    message</button>
                </div>
              </form>
              <div className="social-icons d-flex gap-3 align-items-center justify-content-center mt-5">
                <a href="/"><img src={img2} alt="..." className="img-fluid" /></a>
                <a href="/"><img src={img3} alt="..." className="img-fluid" /></a>
                <a href="/"><img src={img4} alt="..." className="img-fluid" /></a>
                <a href="/"><img src={img5} alt="..." className="img-fluid" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*----- Navbar End -----*/}
      <Outlet />
    </div>
  )
}

export default Navbar

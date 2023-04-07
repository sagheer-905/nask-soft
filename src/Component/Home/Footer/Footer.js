import React from 'react'
import img from "../../../images/Homepage/whatsapp.png"
import img2 from "../../../images/Homepage/facebook.png"
import img3 from "../../../images/Homepage/instagram.png"
import img4 from "../../../images/Homepage/twitter.png"
import img5 from "../../../images/Homepage/linkedin.png"
import logo from "../../../images/Homepage/logo.png"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
      <div>
  {/*------- Footer Section Start --------*/}
  <div className="footer">
    <div className="container-fluid container-xl py-5 px-sm-5 px-lg-4 px-xl-0">
      <div className="row justify-content-lg-center pt-lg-3 py-xl-5 gap-md-5 gap-lg-0 gy-4 gy-md-0">
        <div className="col-md-5 col-lg-3">
          <Link className="navbar-brand" to='/'><img src={logo} alt="..." className="img-fluid" /></Link>
          <p className="text-white mt-3">Maecenas pellentesque placerat
            quam, in finibus nisl tincidunt sed.
            Aliquam magna augue, malesuada
            ut feugiat eget, cursus eget felis.</p>
          <div className="social-icons d-flex gap-3 align-items-center justify-content-center">
            <Link href="#"><img src={img2} alt="..." className="img-fluid" /></Link>
            <Link href="#"><img src={img3} alt="..." className="img-fluid" /></Link>
            <Link href="#"><img src={img4} alt="..." className="img-fluid" /></Link>
            <Link href="#"><img src={img5} alt="..." className="img-fluid" /></Link>
          </div>
        </div>
        <div className="col-md-5 col-lg-2">
          <h4 className="text-white fw-bold">Our links</h4>
          <ul className="list-unstyled pt-3">
            <li><Link to='/'><i className="fa-solid fa-angle-right" /> Home</Link></li>
            <li><Link to="/aboutus"><i className="fa-solid fa-angle-right" /> About Us</Link></li>
            <li><Link to="/service"><i className="fa-solid fa-angle-right" /> Services</Link></li>

          </ul>
        </div>
        <div className="col-md-5 col-lg-2">
          <h4 className="text-white fw-bold">Our Services</h4>
          <ul className="list-unstyled pt-3">
            <li><Link href="strategy-research.html"><i className="fa-solid fa-angle-right" /> Strategy &amp; Research</Link></li>
            <li><Link to='/webdevelopment'><i className="fa-solid fa-angle-right" /> Web Development</Link></li>
            <li><Link href="web-solution.html"><i className="fa-solid fa-angle-right" /> Web Solution</Link></li>
            <li><Link to='/degitalmarketing'><i className="fa-solid fa-angle-right" /> Digital Marketing</Link></li>
            <li><Link href="app-design"><i className="fa-solid fa-angle-right" /> App Design</Link></li>
          </ul>
        </div>
        <div className="col-md-5 col-lg-2">
          <h4 className="text-white fw-bold">Other links</h4>
          <ul className="list-unstyled pt-3">
            <li><Link href="faq.html"><i className="fa-solid fa-angle-right" /> FAQ</Link></li>
            <li><Link to='/portfolio'><i className="fa-solid fa-angle-right" /> Portfolio</Link></li>
            <li><Link href="privacy-policy.html"><i className="fa-solid fa-angle-right" /> Privacy &amp; Policy</Link></li>
            <li><Link href="terms-conditions.html"><i className="fa-solid fa-angle-right" /> Terms &amp; Conditions</Link></li>
            <li><Link href="support.html"><i className="fa-solid fa-angle-right" /> Support</Link></li>
          </ul>
        </div>
        <div className="col-md-5 col-lg-3">
          <h4 className="text-white fw-bold">Contact Us</h4>
          <ul className="list-unstyled pt-3">
            <li>
              <Link href="#">
                <div><i className="fa-solid fa-phone" /> </div>
                <div>0305 1115551</div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div><i className="fa-solid fa-envelope" /> </div>
                <div>info@nasksoft.com</div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div><i className="fa-solid fa-location-dot" /> </div>
                <div>Building No. 21, Block-CCA, Phase-8, DHA, Lahore, Punjab</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/*------- Footer Section End --------*/}
  {/*------- Copyright Section Start --------*/}
  <div className="copyright container-fluid">
    <div className="row pt-3">
      <div className="col-12 text-center">
        <p className="text-white">Copyright © 2022 Nasksoft. All Rights Reserved.</p>
      </div>
    </div>
  </div>
  {/*-------- Copyright Section End ----------*/}
  {/*-------- Bottom to Top Button start --------*/}
  <button id="backTotop-btn"><i className="fa-solid fa-up-long" /></button>
  {/*-------- Bottom to Top Button end --------*/}
  {/*-------- Whatsapp Button start --------*/}
  <Link id="whatsapp-btn" href="#"><img src={img} /></Link>
  {/*-------- Whatsapp Button end --------*/}
</div>

    </div>
  )
}

export default Footer

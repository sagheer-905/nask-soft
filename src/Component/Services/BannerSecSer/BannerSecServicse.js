import React from 'react'
import img1 from "../../../images/servicespage/icon1.png"
import img2 from "../../../images/servicespage/sm-cube-1.png"
import img3 from "../../../images/servicespage/icon2.png"
import img4 from "../../../images/servicespage/sm-cube-2.png"
import img5 from "../../../images/servicespage/icon3.png"
import img6 from "../../../images/servicespage/sm-cube-3.png"
import img7 from "../../../images/servicespage/icon4.png"
import img8 from "../../../images/servicespage/sm-cube-4.png"
import img9 from "../../../images/servicespage/icon5.png"
import img10 from "../../../images/servicespage/sm-cube-5.png"
// import img11 from "../../../images/servicespage/icon6.png"
// import img12 from "../../../images/servicespage/sm-cube-6.png"
// import img13 from "../../../images/servicespage/icon7.png"
// import img14 from "../../../images/servicespage/sm-cube-7.png"
// import img15 from "../../../images/servicespage/icon8.png"
// import img16 from "../../../images/servicespage/sm-cube-8.png"
// import img17 from "../../../images/servicespage/icon9.png"
// import img18 from "../../../images/servicespage/sm-cube-9.png"
// import img19 from "../../../images/servicespage/icon10.png"
// import img20 from "../../../images/servicespage/sm-cube-10.png"
// import img21 from "../../../images/servicespage/icon11.png"
// import img22 from "../../../images/servicespage/sm-cube-11.png"
// import img23 from "../../../images/servicespage/icon12.png"
// import img24 from "../../../images/servicespage/sm-cube-12.png"
// import img25 from "../../../images/servicespage/icon13.png"
// import img26 from "../../../images/servicespage/sm-cube-13.png"
// import img27 from "../../../images/servicespage/icon14.png"
// import img28 from "../../../images/servicespage/sm-cube-14.png"
// import img29 from "../../../images/servicespage/icon15.png"
// import img30 from "../../../images/servicespage/sm-cube-15.png"


function BannerSecServicse() {
  return (
    <div>
      <div>
  {/*----- Services Card Section Start -----*/}
  <div className="services-card">
    {/*--- Web Development Service Start ---*/}
    <div className="container position-relative web-service" id="down">
      {/* card */}
      <div className="card hexagon position-relative">
        <div className="card-body">
          <div className="icon text-center mb-2 mb-md-3">
            <img src={img1} alt="..." className="img-fluid" />
          </div>
          <h5 className="text-uppercase text-white fw-bold text-center mb-3 mb-md-4 position-relative">Web Development</h5>
          <ul className="list-unstyled text-white">
            <li><i className="bi bi-arrow-right me-2" /> Website development</li>
            <li><i className="bi bi-arrow-right me-2" /> Corporate website</li> 
            <li><i className="bi bi-arrow-right me-2" /> Startup websites</li>
            <li><i className="bi bi-arrow-right me-2" /> Landing and promo sites</li>
            <li><i className="bi bi-arrow-right me-2" /> E-commerce</li>
            <li><i className="bi bi-arrow-right me-2" /> Wordpress development</li>
            <li><i className="bi bi-arrow-right me-2" /> Web apps development</li>
            <li><i className="bi bi-arrow-right me-2" /> Fixed price website</li>
          </ul>
        </div>
      </div>
      {/* card */}
      <span className="overlay-text text-white text-uppercase text-center">Web Development</span>
      <div className="floating-cube"><img src={img2} alt="...." className="img-fluid" /></div>
    </div>
    {/*--- Web Development Service End ---*/}
    {/*--- Design Service Start ---*/}
    <div className="container position-relative design-service" id="down">
      {/* card */}
      <div className="card hexagon position-relative">
        <div className="card-body">
          <div className="icon text-center mb-2 mb-md-3">
            <img src={img3} alt="..." className="img-fluid" />
          </div>
          <h5 className="text-uppercase text-white fw-bold text-center mb-3 mb-md-4 position-relative">Design</h5>
          <ul className="list-unstyled text-white">
            <li><i className="bi bi-arrow-right me-2" /> Web Design</li>
            <li><i className="bi bi-arrow-right me-2" /> UI, UX design</li> 
            <li><i className="bi bi-arrow-right me-2" /> Mobile app design</li>
            <li><i className="bi bi-arrow-right me-2" /> Logo Design</li>
            <li><i className="bi bi-arrow-right me-2" /> Brand Identity</li>
            <li><i className="bi bi-arrow-right me-2" /> Banner ad design</li>
          </ul>
        </div>
      </div>
      {/* card */}
      <span className="overlay-text text-white text-uppercase text-center">Design Services</span>
      <div className="floating-cube"><img src={img4} alt="...." className="img-fluid" /></div>
    </div>
    {/*--- Design Service End ---*/}
    {/*--- SEO Service Start ---*/}
    <div className="container position-relative seo-service" id="down">
      {/* card */}
      <div className="card hexagon position-relative">
        <div className="card-body">
          <div className="icon text-center mb-2 mb-md-3">
            <img src={img5} alt="..." className="img-fluid" />
          </div>
          <h5 className="text-uppercase text-white fw-bold text-center mb-3 mb-md-4 position-relative">SEO Services</h5>
          <ul className="list-unstyled text-white">
            <li><i className="bi bi-arrow-right me-2" /> Tech SEO</li>
            <li><i className="bi bi-arrow-right me-2" /> On-page SEO</li> 
            <li><i className="bi bi-arrow-right me-2" /> Off-page SEO</li>
            <li><i className="bi bi-arrow-right me-2" /> SEO copywriting</li>
          </ul>
        </div>
      </div>
      {/* card */}
      <span className="overlay-text text-white text-uppercase text-center">SEO Services</span>
      <div className="floating-cube"><img src={img6} alt="...." className="img-fluid" /></div>
    </div>
    {/*--- SEO Service End ---*/}
    {/*--- Digital Marketing Service Start ---*/}
    <div className="container position-relative marketing-service" id="down">
      {/* card */}
      <div className="card hexagon position-relative">
        <div className="card-body">
          <div className="icon text-center mb-2 mb-md-3">
            <img src={img7} alt="..." className="img-fluid" />
          </div>
          <h5 className="text-uppercase text-white fw-bold text-center mb-3 mb-md-4 position-relative">Digital Marketing</h5>
          <ul className="list-unstyled text-white">
            <li><i className="bi bi-arrow-right me-2" /> Website marketing strategy</li>
            <li><i className="bi bi-arrow-right me-2" /> Content marketing</li> 
            <li><i className="bi bi-arrow-right me-2" /> PPC services</li>
            <li><i className="bi bi-arrow-right me-2" /> Social media marketing services</li>
          </ul>
        </div>
      </div>
      {/* card */}
      <span className="overlay-text text-white text-uppercase text-center">Digital Marketing</span>
      <div className="floating-cube"><img src={img8} alt="...." className="img-fluid" /></div>
    </div>
    {/*--- Digital Marketing Service End ---*/}
    {/*--- Out Source Service Start ---*/}
    <div className="container position-relative outsource-service" id="down">
      {/* card */}
      <div className="card hexagon position-relative">
        <div className="card-body">
          <div className="icon text-center mb-2 mb-md-3">
            <img src={img9} alt="..." className="img-fluid" />
          </div>
          <h5 className="text-uppercase text-white fw-bold text-center mb-3 mb-md-4 position-relative">Outsource</h5>
          <ul className="list-unstyled text-white">
            <li><i className="bi bi-arrow-right me-2" /> Dedicated team</li>
            <li><i className="bi bi-arrow-right me-2" /> Hire Front-End Developer</li> 
            <li><i className="bi bi-arrow-right me-2" /> Hire Back-End Developer</li>
            <li><i className="bi bi-arrow-right me-2" /> Hire Designer</li>
            <li><i className="bi bi-arrow-right me-2" /> Hire project manager</li>
          </ul>
        </div>
      </div>
      {/* card */}
      <span className="overlay-text text-white text-uppercase text-center">Outsource Services</span>
      <div className="floating-cube"><img src={img10} alt="...." className="img-fluid" /></div>
    </div>
    {/*--- Out Source Service End ---*/}
  </div>
  {/*----- Services Card Section End -----*/}
  {/*----- Services Card Section Start -----*/}
  <div className="services-card">
    {/*--- Web Development Service Start ---*/}
    <div className="container position-relative web-service" id="down">
      {/* card */}
      <div className="card hexagon position-relative">
        <div className="card-body">
          <div className="icon text-center mb-2 mb-md-3">
            <img src={img1} alt="..." className="img-fluid" />
          </div>
          <h5 className="text-uppercase text-white fw-bold text-center mb-3 mb-md-4 position-relative">Web Development</h5>
          <ul className="list-unstyled text-white">
            <li><i className="bi bi-arrow-right me-2" /> Website development</li>
            <li><i className="bi bi-arrow-right me-2" /> Corporate website</li> 
            <li><i className="bi bi-arrow-right me-2" /> Startup websites</li>
            <li><i className="bi bi-arrow-right me-2" /> Landing and promo sites</li>
            <li><i className="bi bi-arrow-right me-2" /> E-commerce</li>
            <li><i className="bi bi-arrow-right me-2" /> Wordpress development</li>
            <li><i className="bi bi-arrow-right me-2" /> Web apps development</li>
            <li><i className="bi bi-arrow-right me-2" /> Fixed price website</li>
          </ul>
        </div>
      </div>
      {/* card */}
      <span className="overlay-text text-white text-uppercase text-center">Web Development</span>
      <div className="floating-cube"><img src={img2} alt="...." className="img-fluid" /></div>
    </div>
    {/*--- Web Development Service End ---*/}
    {/*--- Design Service Start ---*/}
    <div className="container position-relative design-service" id="down">
      {/* card */}
      <div className="card hexagon position-relative">
        <div className="card-body">
          <div className="icon text-center mb-2 mb-md-3">
            <img src={img3} alt="..." className="img-fluid" />
          </div>
          <h5 className="text-uppercase text-white fw-bold text-center mb-3 mb-md-4 position-relative">Design</h5>
          <ul className="list-unstyled text-white">
            <li><i className="bi bi-arrow-right me-2" /> Web Design</li>
            <li><i className="bi bi-arrow-right me-2" /> UI, UX design</li> 
            <li><i className="bi bi-arrow-right me-2" /> Mobile app design</li>
            <li><i className="bi bi-arrow-right me-2" /> Logo Design</li>
            <li><i className="bi bi-arrow-right me-2" /> Brand Identity</li>
            <li><i className="bi bi-arrow-right me-2" /> Banner ad design</li>
          </ul>
        </div>
      </div>
      {/* card */}
      <span className="overlay-text text-white text-uppercase text-center">Design Services</span>
      <div className="floating-cube"><img src={img4} alt="...." className="img-fluid" /></div>
    </div>
    {/*--- Design Service End ---*/}
    {/*--- SEO Service Start ---*/}
    <div className="container position-relative seo-service" id="down">
      {/* card */}
      <div className="card hexagon position-relative">
        <div className="card-body">
          <div className="icon text-center mb-2 mb-md-3">
            <img src={img5} alt="..." className="img-fluid" />
          </div>
          <h5 className="text-uppercase text-white fw-bold text-center mb-3 mb-md-4 position-relative">SEO Services</h5>
          <ul className="list-unstyled text-white">
            <li><i className="bi bi-arrow-right me-2" /> Tech SEO</li>
            <li><i className="bi bi-arrow-right me-2" /> On-page SEO</li> 
            <li><i className="bi bi-arrow-right me-2" /> Off-page SEO</li>
            <li><i className="bi bi-arrow-right me-2" /> SEO copywriting</li>
          </ul>
        </div>
      </div>
      {/* card */}
      <span className="overlay-text text-white text-uppercase text-center">SEO Services</span>
      <div className="floating-cube"><img src={img6} alt="...." className="img-fluid" /></div>
    </div>
    {/*--- SEO Service End ---*/}
    {/*--- Digital Marketing Service Start ---*/}
    <div className="container position-relative marketing-service" id="down">
      {/* card */}
      <div className="card hexagon position-relative">
        <div className="card-body">
          <div className="icon text-center mb-2 mb-md-3">
            <img src={img7} alt="..." className="img-fluid" />
          </div>
          <h5 className="text-uppercase text-white fw-bold text-center mb-3 mb-md-4 position-relative">Digital Marketing</h5>
          <ul className="list-unstyled text-white">
            <li><i className="bi bi-arrow-right me-2" /> Website marketing strategy</li>
            <li><i className="bi bi-arrow-right me-2" /> Content marketing</li> 
            <li><i className="bi bi-arrow-right me-2" /> PPC services</li>
            <li><i className="bi bi-arrow-right me-2" /> Social media marketing services</li>
          </ul>
        </div>
      </div>
      {/* card */}
      <span className="overlay-text text-white text-uppercase text-center">Digital Marketing</span>
      <div className="floating-cube"><img src={img8} alt="...." className="img-fluid" /></div>
    </div>
    {/*--- Digital Marketing Service End ---*/}
    {/*--- Out Source Service Start ---*/}
    <div className="container position-relative outsource-service" id="down">
      {/* card */}
      <div className="card hexagon position-relative">
        <div className="card-body">
          <div className="icon text-center mb-2 mb-md-3">
            <img src={img9} alt="..." className="img-fluid" />
          </div>
          <h5 className="text-uppercase text-white fw-bold text-center mb-3 mb-md-4 position-relative">Outsource</h5>
          <ul className="list-unstyled text-white">
            <li><i className="bi bi-arrow-right me-2" /> Dedicated team</li>
            <li><i className="bi bi-arrow-right me-2" /> Hire Front-End Developer</li> 
            <li><i className="bi bi-arrow-right me-2" /> Hire Back-End Developer</li>
            <li><i className="bi bi-arrow-right me-2" /> Hire Designer</li>
            <li><i className="bi bi-arrow-right me-2" /> Hire project manager</li>
          </ul>
        </div>
      </div>
      {/* card */}
      <span className="overlay-text text-white text-uppercase text-center">Outsource Services</span>
      <div className="floating-cube"><img src={img10} alt="...." className="img-fluid" /></div>
    </div>
    {/*--- Out Source Service End ---*/}
  </div>
  {/*----- Services Card Section End -----*/}
  {/*----- Services Card Section Start -----*/}
  <div className="services-card">
    {/*--- Web Development Service Start ---*/}
    <div className="container position-relative web-service" id="down">
      {/* card */}
      <div className="card hexagon position-relative">
        <div className="card-body">
          <div className="icon text-center mb-2 mb-md-3">
            <img src={img1} alt="..." className="img-fluid" />
          </div>
          <h5 className="text-uppercase text-white fw-bold text-center mb-3 mb-md-4 position-relative">Web Development</h5>
          <ul className="list-unstyled text-white">
            <li><i className="bi bi-arrow-right me-2" /> Website development</li>
            <li><i className="bi bi-arrow-right me-2" /> Corporate website</li> 
            <li><i className="bi bi-arrow-right me-2" /> Startup websites</li>
            <li><i className="bi bi-arrow-right me-2" /> Landing and promo sites</li>
            <li><i className="bi bi-arrow-right me-2" /> E-commerce</li>
            <li><i className="bi bi-arrow-right me-2" /> Wordpress development</li>
            <li><i className="bi bi-arrow-right me-2" /> Web apps development</li>
            <li><i className="bi bi-arrow-right me-2" /> Fixed price website</li>
          </ul>
        </div>
      </div>
      {/* card */}
      <span className="overlay-text text-white text-uppercase text-center">Web Development</span>
      <div className="floating-cube"><img src={img2} alt="...." className="img-fluid" /></div>
    </div>
    {/*--- Web Development Service End ---*/}
    {/*--- Design Service Start ---*/}
    <div className="container position-relative design-service" id="down">
      {/* card */}
      <div className="card hexagon position-relative">
        <div className="card-body">
          <div className="icon text-center mb-2 mb-md-3">
            <img src={img3} alt="..." className="img-fluid" />
          </div>
          <h5 className="text-uppercase text-white fw-bold text-center mb-3 mb-md-4 position-relative">Design</h5>
          <ul className="list-unstyled text-white">
            <li><i className="bi bi-arrow-right me-2" /> Web Design</li>
            <li><i className="bi bi-arrow-right me-2" /> UI, UX design</li> 
            <li><i className="bi bi-arrow-right me-2" /> Mobile app design</li>
            <li><i className="bi bi-arrow-right me-2" /> Logo Design</li>
            <li><i className="bi bi-arrow-right me-2" /> Brand Identity</li>
            <li><i className="bi bi-arrow-right me-2" /> Banner ad design</li>
          </ul>
        </div>
      </div>
      {/* card */}
      <span className="overlay-text text-white text-uppercase text-center">Design Services</span>
      <div className="floating-cube"><img src={img4} alt="...." className="img-fluid" /></div>
    </div>
    {/*--- Design Service End ---*/}
    {/*--- SEO Service Start ---*/}
    <div className="container position-relative seo-service" id="down">
      {/* card */}
      <div className="card hexagon position-relative">
        <div className="card-body">
          <div className="icon text-center mb-2 mb-md-3">
            <img src={img5} alt="..." className="img-fluid" />
          </div>
          <h5 className="text-uppercase text-white fw-bold text-center mb-3 mb-md-4 position-relative">SEO Services</h5>
          <ul className="list-unstyled text-white">
            <li><i className="bi bi-arrow-right me-2" /> Tech SEO</li>
            <li><i className="bi bi-arrow-right me-2" /> On-page SEO</li> 
            <li><i className="bi bi-arrow-right me-2" /> Off-page SEO</li>
            <li><i className="bi bi-arrow-right me-2" /> SEO copywriting</li>
          </ul>
        </div>
      </div>
      {/* card */}
      <span className="overlay-text text-white text-uppercase text-center">SEO Services</span>
      <div className="floating-cube"><img src={img6} alt="...." className="img-fluid" /></div>
    </div>
    {/*--- SEO Service End ---*/}
    {/*--- Digital Marketing Service Start ---*/}
    <div className="container position-relative marketing-service" id="down">
      {/* card */}
      <div className="card hexagon position-relative">
        <div className="card-body">
          <div className="icon text-center mb-2 mb-md-3">
            <img src={img7} alt="..." className="img-fluid" />
          </div>
          <h5 className="text-uppercase text-white fw-bold text-center mb-3 mb-md-4 position-relative">Digital Marketing</h5>
          <ul className="list-unstyled text-white">
            <li><i className="bi bi-arrow-right me-2" /> Website marketing strategy</li>
            <li><i className="bi bi-arrow-right me-2" /> Content marketing</li> 
            <li><i className="bi bi-arrow-right me-2" /> PPC services</li>
            <li><i className="bi bi-arrow-right me-2" /> Social media marketing services</li>
          </ul>
        </div>
      </div>
      {/* card */}
      <span className="overlay-text text-white text-uppercase text-center">Digital Marketing</span>
      <div className="floating-cube"><img src={img8} alt="...." className="img-fluid" /></div>
    </div>
    {/*--- Digital Marketing Service End ---*/}
    {/*--- Out Source Service Start ---*/}
    <div className="container position-relative outsource-service" id="down">
      {/* card */}
      <div className="card hexagon position-relative">
        <div className="card-body">
          <div className="icon text-center mb-2 mb-md-3">
            <img src={img9} alt="..." className="img-fluid" />
          </div>
          <h5 className="text-uppercase text-white fw-bold text-center mb-3 mb-md-4 position-relative">Outsource</h5>
          <ul className="list-unstyled text-white">
            <li><i className="bi bi-arrow-right me-2" /> Dedicated team</li>
            <li><i className="bi bi-arrow-right me-2" /> Hire Front-End Developer</li> 
            <li><i className="bi bi-arrow-right me-2" /> Hire Back-End Developer</li>
            <li><i className="bi bi-arrow-right me-2" /> Hire Designer</li>
            <li><i className="bi bi-arrow-right me-2" /> Hire project manager</li>
          </ul>
        </div>
      </div>
      {/* card */}
      <span className="overlay-text text-white text-uppercase text-center">Outsource Services</span>
      <div className="floating-cube"><img src={img10} alt="...." className="img-fluid" /></div>
    </div>
    {/*--- Out Source Service End ---*/}
  </div>
  {/*----- Services Card Section End -----*/}
</div>

    </div>
  )
}

export default BannerSecServicse

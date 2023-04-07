import React from 'react'
import img2 from "../../../images/Homepage/portfolio1.png"
import img3 from "../../../images/Homepage/portfolio2.png"
import img4 from "../../../images/Homepage/portfolio3.png"
function Porfolio() {
    return (
        <div>
            {/*------- Portfolio Section Start --------*/}
            <div className="portfolio-section container-fluid pb-5">
                <div className="row justify-content-center py-4">
                    <div className="col-md-7 text-center">
                        <h2 style={{color:window.location.pathname=="/portfolio"?"white":"",marginTop:window.location.pathname=="/portfolio"?"10vh":""}} className="fw-bold mb-4">Our Portfolio</h2>
                    </div>
                </div>
                <div className="row portfolio-filters pb-5">
                    <div className="col-md-12">
                        {/* tabs pills */}
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="all" data-bs-toggle="pill" data-bs-target="#all-images" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="web-design" data-bs-toggle="pill" data-bs-target="#webdesign" type="button" role="tab" aria-controls="pills-webdesign" aria-selected="false">Web
                                    Design</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="web-development" data-bs-toggle="pill" data-bs-target="#webdevelopment" type="button" role="tab" aria-controls="pills-webdevelopment" aria-selected="false">Web Development</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="brand" data-bs-toggle="pill" data-bs-target="#branding" type="button" role="tab" aria-controls="pills-branding" aria-selected="false">Branding</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="mobile-app" data-bs-toggle="pill" data-bs-target="#mobileapp" type="button" role="tab" aria-controls="pills-mobileapp" aria-selected="false">Mobile
                                    App</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="seo" data-bs-toggle="pill" data-bs-target="#seo-images" type="button" role="tab" aria-controls="pills-seo" aria-selected="false">SEO</button>
                            </li>
                        </ul>
                        {/* tabs pills */}
                    </div>
                </div>
                {/* tabs content */}
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="all-images" role="tabpanel" aria-labelledby="pills-all-images" tabIndex={0}>
                        {/* portfolio gallery */}
                        {/*-------- Client Section Start --------*/}
                        <div className="client-section ">
                            {/* slider */}
                            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={3} aria-label="Slide 4" />
                                </div>
                                <div className="carousel-inner mb-5">
                                    <div className="carousel-item active " data-bs-interval={10000}>
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item p-3 " data-bs-interval={2000}>
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item p-3 ">
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item p-3 ">
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*-------- Client Section End --------*/}

                        {/* portfolio gallery */}
                    </div>

                    <div class="tab-pane fade" id="webdesign" role="tabpanel" aria-labelledby="pills-webdesign"
                        tabindex="0">
<div className="client-section py-5">
                            {/* slider */}
                            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={3} aria-label="Slide 4" />
                                </div>
                                <div className="carousel-inner mb-5">
                                    <div className="carousel-item active " data-bs-interval={10000}>
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item p-3 " data-bs-interval={2000}>
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item p-3 ">
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item p-3 ">
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="webdevelopment" role="tabpanel" aria-labelledby="pills-webdevelopment"
                        tabindex="0">
<div className="client-section py-5">
                            {/* slider */}
                            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={3} aria-label="Slide 4" />
                                </div>
                                <div className="carousel-inner mb-5">
                                    <div className="carousel-item active " data-bs-interval={10000}>
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item p-3 " data-bs-interval={2000}>
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item p-3 ">
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item p-3 ">
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    <div class="tab-pane fade" id="branding" role="tabpanel" aria-labelledby="pills-branding" tabindex="0">
                    <div className="client-section py-5">
                            {/* slider */}
                            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={3} aria-label="Slide 4" />
                                </div>
                                <div className="carousel-inner mb-5">
                                    <div className="carousel-item active " data-bs-interval={10000}>
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item p-3 " data-bs-interval={2000}>
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item p-3 ">
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item p-3 ">
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="mobileapp" role="tabpanel" aria-labelledby="pills-mobileapp"
                    tabindex="0">
                        <div className="client-section py-5">
                            {/* slider */}
                            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={3} aria-label="Slide 4" />
                                </div>
                                <div className="carousel-inner mb-5">
                                    <div className="carousel-item active " data-bs-interval={10000}>
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item p-3 " data-bs-interval={2000}>
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item p-3 ">
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item p-3 ">
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                       <div class="tab-pane fade" id="seo-images" role="tabpanel" aria-labelledby="pills-seo-images"
                    tabindex="0">
<div className="client-section py-5">
                            {/* slider */}
                            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={3} aria-label="Slide 4" />
                                </div>
                                <div className="carousel-inner mb-5">
                                    <div className="carousel-item active " data-bs-interval={10000}>
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item p-3 " data-bs-interval={2000}>
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item p-3 ">
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item p-3 ">
                                        <div className='d-flex'>

                                            <div className="item p-3">
                                                <img src={img2} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img3} alt="..." className="img-fluid" />
                                            </div>
                                            <div className="item p-3">
                                                <img src={img4} alt="..." className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/*------- Portfolio Section End --------*/}

        </div>
    )
}

export default Porfolio

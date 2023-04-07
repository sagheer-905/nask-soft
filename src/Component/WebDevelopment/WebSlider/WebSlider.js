import React from 'react'
import img1 from "../../../images/WebDevelopment/l1.png"
import img2 from "../../../images/WebDevelopment/l2.png"
import img3 from "../../../images/WebDevelopment/l3.png"
import img4 from "../../../images/WebDevelopment/l4.png"
import img5 from "../../../images/WebDevelopment/l5.png"
import img6 from "../../../images/WebDevelopment/l6.png"
import img7 from "../../../images/WebDevelopment/l7.png"



function WebSlider() {
    return (
        <div>
            {/*---- Logos Slider Section Start ----*/}
            <div className="logos-slider container pb-5">

                <div className="client-section py-5">

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

                                    <div className="item px-2 py-3">
                                        <img src={img1} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img2} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img3} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img4} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img5} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img6} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img7} alt="..." className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item p-3 " data-bs-interval={2000}>
                                <div className='d-flex'>

                                <div className="item px-2 py-3">
                                        <img src={img1} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img2} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img3} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img4} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img5} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img6} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img7} alt="..." className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item p-3 ">
                                <div className='d-flex'>

                                <div className="item px-2 py-3">
                                        <img src={img1} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img2} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img3} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img4} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img5} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img6} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img7} alt="..." className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item p-3 ">
                                <div className='d-flex'>

                                <div className="item px-2 py-3">
                                        <img src={img1} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img2} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img3} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img4} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img5} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img6} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="item px-2 py-3">
                                        <img src={img7} alt="..." className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

          
            </div>
            {/*---- Logos Slider Section End ----*/}

        </div>
    )
}

export default WebSlider

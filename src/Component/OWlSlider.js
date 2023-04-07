import React from 'react'
import img2 from "../images/Homepage/icon-bg1.png"
import img3 from "../images/Homepage/icon-bg-2.png"
import Carousel from 'react-elastic-carousel'
function OWlSlider() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 2 },
        { width: 1100, itemsToShow: 3 },
        
        

    ]
    return (
        <>
        <div className='main_slider'>
            <Carousel  breakPoints={breakPoints} >





           
  <div className="item position-relative" id="hexagon">
    {/* <img src="images/Homepage/services-card.png" alt="..." class="img-fluid"> */}
    <div className="item-body">
      <div className="icon position-relative">
        <img src={img2} alt="..." className="img-fluid img-1" />
        <img src={img3} alt="..." className="img-fluid img-2" />
        <i className="fa-solid fa-computer" />
      </div>
      <h6 className="fw-bold mt-3">Strategy &amp; Research</h6>
      <p>Mauris ut felis malesuada eros varius
        tristique a at orci. Nulla vulputate, leo sit
        amet rhoncus suscipit, enim ex venenatis
        ipsum, et porttitor.</p>
      <i className="fa-solid fa-angle-right" />
    </div>
  </div>
  <div className="item position-relative" id="hexagon">
    {/* <img src="images/Homepage/services-card.png" alt="..." class="img-fluid"> */}
    <div className="item-body">
      <div className="icon position-relative">
        <img src={img2} alt="..." className="img-fluid img-1" />
        <img src={img3} alt="..." className="img-fluid img-2" />
        <i className="fa-solid fa-laptop-code" />
      </div>
      <h6 className="fw-bold mt-3">Web Development</h6>
      <p>Mauris ut felis malesuada eros varius
        tristique a at orci. Nulla vulputate, leo sit
        amet rhoncus suscipit, enim ex venenatis
        ipsum, et porttitor.</p>
      <i className="fa-solid fa-angle-right" />
    </div>
  </div>
  <div className="item position-relative" id="hexagon">
    {/* <img src="images/Homepage/services-card.png" alt="..." class="img-fluid"> */}
    <div className="item-body">
      <div className="icon position-relative">
        <img src={img2} alt="..." className="img-fluid img-1" />
        <img src={img3} alt="..." className="img-fluid img-2" />
        <i className="fa-regular fa-file-code" />
      </div>
      <h6 className="fw-bold mt-3">Web Solution</h6>
      <p>Mauris ut felis malesuada eros varius
        tristique a at orci. Nulla vulputate, leo sit
        amet rhoncus suscipit, enim ex venenatis
        ipsum, et porttitor.</p>
      <i className="fa-solid fa-angle-right" />
    </div>
  </div>
  <div className="item position-relative" id="hexagon">
    {/* <img src="images/Homepage/services-card.png" alt="..." class="img-fluid"> */}
    <div className="item-body">
      <div className="icon position-relative">
        <img src={img2} alt="..." className="img-fluid img-1" />
        <img src={img3} alt="..." className="img-fluid img-2" />
        <i className="fa-solid fa-computer" />
      </div>
      <h6 className="fw-bold mt-3">Strategy &amp; Research</h6>
      <p>Mauris ut felis malesuada eros varius
        tristique a at orci. Nulla vulputate, leo sit
        amet rhoncus suscipit, enim ex venenatis
        ipsum, et porttitor.</p>
      <i className="fa-solid fa-angle-right" />
    </div>
  </div>
  <div className="item position-relative" id="hexagon">
    {/* <img src="images/Homepage/services-card.png" alt="..." class="img-fluid"> */}
    <div className="item-body">
      <div className="icon position-relative">
        <img src={img2} alt="..." className="img-fluid img-1" />
        <img src={img3} alt="..." className="img-fluid img-2" />
        <i className="fa-solid fa-laptop-code" />
      </div>
      <h6 className="fw-bold mt-3">Web Development</h6>
      <p>Mauris ut felis malesuada eros varius
        tristique a at orci. Nulla vulputate, leo sit
        amet rhoncus suscipit, enim ex venenatis
        ipsum, et porttitor.</p>
      <i className="fa-solid fa-angle-right" />
    </div>
  </div>
  <div className="item position-relative" id="hexagon">
    {/* <img src="images/Homepage/services-card.png" alt="..." class="img-fluid"> */}
    <div className="item-body">
      <div className="icon position-relative">
        <img src={img2} alt="..." className="img-fluid img-1" />
        <img src={img3} alt="..." className="img-fluid img-2" />
        <i className="fa-regular fa-file-code" />
      </div>
      <h6 className="fw-bold mt-3">Web Solution</h6>
      <p>Mauris ut felis malesuada eros varius
        tristique a at orci. Nulla vulputate, leo sit
        amet rhoncus suscipit, enim ex venenatis
        ipsum, et porttitor.</p>
      <i className="fa-solid fa-angle-right" />
    </div>
  </div>
  <div className="item position-relative" id="hexagon">
    {/* <img src="images/Homepage/services-card.png" alt="..." class="img-fluid"> */}
    <div className="item-body">
      <div className="icon position-relative">
        <img src={img2} alt="..." className="img-fluid img-1" />
        <img src={img3} alt="..." className="img-fluid img-2" />
        <i className="fa-solid fa-computer" />
      </div>
      <h6 className="fw-bold mt-3">Strategy &amp; Research</h6>
      <p>Mauris ut felis malesuada eros varius
        tristique a at orci. Nulla vulputate, leo sit
        amet rhoncus suscipit, enim ex venenatis
        ipsum, et porttitor.</p>
      <i className="fa-solid fa-angle-right" />
    </div>
  </div>
  <div className="item position-relative" id="hexagon">
    {/* <img src="images/Homepage/services-card.png" alt="..." class="img-fluid"> */}
    <div className="item-body">
      <div className="icon position-relative">
        <img src={img2} alt="..." className="img-fluid img-1" />
        <img src={img3} alt="..." className="img-fluid img-2" />
        <i className="fa-solid fa-laptop-code" />
      </div>
      <h6 className="fw-bold mt-3">Web Development</h6>
      <p>Mauris ut felis malesuada eros varius
        tristique a at orci. Nulla vulputate, leo sit
        amet rhoncus suscipit, enim ex venenatis
        ipsum, et porttitor.</p>
      <i className="fa-solid fa-angle-right" />
    </div>
  </div>
  <div className="item position-relative" id="hexagon">
    {/* <img src="images/Homepage/services-card.png" alt="..." class="img-fluid"> */}
    <div className="item-body">
      <div className="icon position-relative">
        <img src={img2} alt="..." className="img-fluid img-1" />
        <img src={img3} alt="..." className="img-fluid img-2" />
        <i className="fa-regular fa-file-code" />
      </div>
      <h6 className="fw-bold mt-3">Web Solution</h6>
      <p>Mauris ut felis malesuada eros varius
        tristique a at orci. Nulla vulputate, leo sit
        amet rhoncus suscipit, enim ex venenatis
        ipsum, et porttitor.</p>
      <i className="fa-solid fa-angle-right" />
    </div>
  </div>




            </Carousel>
            </div>
        </>

    )
}

export default OWlSlider

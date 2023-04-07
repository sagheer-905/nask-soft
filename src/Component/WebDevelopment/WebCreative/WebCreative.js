import React from 'react'
import img from "../../../images/WebDevelopment/creative.png"
function WebCreative() {
  return (
    <div>
      {/*---- Web Creative Section Start ----*/}
<div className="web-creative container py-5">
  <div className="row justify-content-center align-items-center py-md-5">
    <div className="col-md-5">
      <h3 className="h2 fw-bold text-uppercase mb-4">We Are<br /> <span>Creative</span></h3>
      <p>Curabitur aliquet, metus quis ornare semper, magna nibh
        tincidunt ante, et congue lectus dui vitae enim. Aliquam id
        accumsan erat. Mauris vitae sem vel nulla facilisis consequat.
        Sed sed felis posuere, ullamcorper orci id, fringilla ipsum.
        Integer dapibus tellus sit amet lorem efficitur, nec varius
        dolor volutpat. Donec nisl lacus, tempor quis augue a, lacinia
        condimentum diam. Nam iaculis quam vel enim faucibus,
        eget tincidunt felis interdum.</p>
    </div>
    <div className="col-md-7">
      <img src={img} alt="...." className="img-fluid" />
    </div>
  </div>
</div>
{/*---- Web Creative Section End ----*/}

    </div>
  )
}

export default WebCreative

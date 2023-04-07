import React from 'react'

function ContactCard() {
  return (
    <div>
      {/*----- Help Section Start -----*/}
<div className="help-section py-5 position-relative">
  {/* bubbles wrapper */}
  <div className="bubble-wrapper">
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
  </div>
  {/* bubbles wrapper */}
  {/* waves Start*/}
  <div id="wave-1">
    <div className="waves">
      <div />
    </div>
  </div>
  <div id="wave-2">
    <div className="waves">
      <div />
    </div>
  </div>
  {/* waves end */}
  <div className="container py-5">
    <h3 className="h2 text-uppercase fw-bold text-center mb-5">We Help You <br /> Stay Connected</h3>
    <div className="row justify-content-center gap-xl-5 gy-4 gy-md-0">
      <div className="col-md-4 col-xl-3">
        <div className="card">
          <div className="card-body text-center pt-4">
            <i className="fa-solid fa-wifi" />
            <h5 className="fw-bold my-2">Stay Connected</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus gravida.
              Fusce euismod urna et ligula eleifend accumsan.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-xl-3">
        <div className="card">
          <div className="card-body text-center pt-4">
            <i className="fa-solid fa-user-group" />
            <h5 className="fw-bold my-2">Encourage Participation</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus gravida.
              Fusce euismod urna et ligula eleifend accumsan.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-xl-3">
        <div className="card">
          <div className="card-body text-center pt-4">
            <i className="fa-solid fa-circle-nodes" />
            <h5 className="fw-bold my-2">Build Connections</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus gravida.
              Fusce euismod urna et ligula eleifend accumsan.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/*----- Help Section Start -----*/}

    </div>
  )
}

export default ContactCard

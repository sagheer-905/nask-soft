import React from 'react'

function Marketingsearch() {
  return (
    <div>
      {/*----- Email Marketing search section start ----*/}
<div className="eMarket-search py-5">
  <div className="row justify-content-center">
    <div className="col-11 col-md-8 col-lg-6 text-center">
      <h3 className="h2 text-uppercase fw-bold mb-5">Find The Perfect<br /> Professional For You</h3>
      <h5 className="fw-semibold mb-3">Get Free Quotes Within Minutes.</h5>
      <form>
        <div className="mb-4 d-sm-flex gap-2 position-relative">
          <i className="fa-solid fa-magnifying-glass" />
          <input type="text" className="form-control" placeholder="What services are you looking for?" />
          <input type="submit" className="btn mt-4 mt-sm-0" defaultValue="Search" />
        </div>
      </form>
      <h5><span className="fw-bold">Popular:</span> SEO, Web Development, UI UX Design.</h5>
    </div>
  </div>
</div>
{/*----- Email Marketing search section end ----*/}

    </div>
  )
}

export default Marketingsearch

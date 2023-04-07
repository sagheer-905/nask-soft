import React from 'react'

function TypesSection() {
  return (
    <div>
      {/*---- Appraisal Types Section start -----*/}
<div className="appraisal-types container pb-5">
  <div className="row justify-content-center">
    <div className="col-sm-10 col-lg-9 text-center">
      <h3 className="h2 fw-bold text-uppercase mb-4">TYPES OF APPRAISALS</h3>
      <p>While almost all appraisal reports will include the above-noted sections, there is some nuance depending on the 
        nature of the asset being valued.
      </p>
    </div>
  </div>
  <div className="row justify-content-center pt-5 gy-5 gy-lg-0">
    <div className="col-lg-4">
      <div className="card mx-lg-2">
        <div className="card-body text-center px-4">
          <h5 className="fw-bold my-3">Equipment Appraisals</h5>
          <p>Equipment appraisals, for example, offer 
            three types of valuation estimates: fair
            market value (FMV), orderly liquidation
            value (OLV), and forced liquidation value 
            (FLV). These different estimates of value
            may serve unique purposes for different 
            stakeholders.
          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="card mx-lg-2">
        <div className="card-body text-center px-4">
          <h5 className="fw-bold my-3">Real Estate Appraisals</h5>
          <p>Real estate is also interesting because it 
            can’t be picked up and moved, so
            properties may be subject to certain
            zoning or land use restrictions. It’s also
            common that property is acquired with
            the goal of rezoning and redeveloping it.
          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="card mx-lg-2">
        <div className="card-body text-center px-4">
          <h5 className="fw-bold my-3">Qualified Appraisals</h5>
          <p>Qualified appraisals are a subset of
            appraisals that meet certain strict
            criteria set out by the IRS in the United
            States. These appraisals are quite
            rigorous; appraising an asset for tax
            purposes in the US requires that a
            “Qualified Appraiser” conduct the
            analysis and prepare the correspondng
            report.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
{/*---- Appraisal Types Section end -----*/}

    </div>
  )
}

export default TypesSection

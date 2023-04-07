import React from 'react'
import img from "../../../images/shopifyPage/www.png"
import img2 from "../../../images/shopifyPage/website.png"
function LastsectionShopyfiy() {
  return (
    <div>
      {/*----- Ecommerce website development solution Section Start -----*/}
<div className="eCom_dev_sol position-relative py-5">
  <img src={img} alt="..." className="img-fluid shopify-www" />
  <img src={img2} alt="..." className="img-fluid shopify-web" />
  <div className="container py-5">
    <div className="row justify-content-between">
      <div className="col-md-6">
        <h3 className="h1 fw-bold text-uppercase mb-4">Ecommerce Website Development Solutions</h3>
        <p>Nasksoft provides solutions for e-commerce development
          such as consulting, support, and maintenance of websites
          at a reasonable price.</p>
      </div>
      <div className="col-md-6 col-lg-6">
        <ul>
          <li>Mobile friendly custom web design</li>
          <li>Best UI\UX practice</li>
          <li>Custom ecommerce development</li>
          <li>Unlimited categories and products</li>
          <li>Payment gateway</li>
          <li>Import/export functionality</li>
          <li>Discounts</li>
          <li>Ecommerce SEO</li>
          <li>Ecommerce website security</li>
          <li>Unlimited technical support</li>
        </ul>
      </div>
    </div>
  </div>
</div>
{/*----- Ecommerce website development solution Section End -----*/}

    </div>
  )
}

export default LastsectionShopyfiy

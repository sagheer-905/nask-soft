import React from 'react'
import img1 from "../../../images/ecommercepage/laptop.png"
function ShopifiyEcom() {
  return (
    <div>
      {/*----- Shopify Website Section Start -----*/}
<div className="shopping_website py-md-5">
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-md-8 text-center py-5">
        <h3 className="h2 fw-bold">Shopify ecommerce website</h3>
        <p>Shopify is trusted by millions of businessess worldwide</p>
      </div>
      <div className="col-md-10">
        <img src={img1} alt="..." className="img-fluid" />
      </div>
    </div>
  </div>
</div>
{/*----- Shopify Website Section End -----*/}
{/*----- Shopify Cards Section Start -----*/}
<div className="shopify-cards container py-5">
  <div className="row justify-content-between py-xl-5 gy-4 gy-md-0">
    <div className="col-md-4 col-lg-3">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={52} height={52} viewBox="0 0 52 52">
        <image id="custom" width={52} height={42} xlinkHref="data:image/png;base64,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" />
      </svg>
      <h5 className="fw-bold my-2">Choose &amp; customise a theme</h5>
      <p>Customize the design of your shop from
        over thousands of themes. No design
        experience or programming skills
        required.</p>
    </div>
    <div className="col-md-4 col-lg-3">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={52} height={52} viewBox="0 0 52 52">
        <image id="customize" width={42} height={42} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAABHNCSVQICAgIfAhkiAAAArJJREFUWEftmctLVkEYxr9PRYsM22W4y0URRIRt2lUilGguWpR2wYTuUQuXtQgEV7roihoURBRBizAjCilbtGoTLaxl/0JpBt1/T5wj03TOh2dmPBmcFx7ON3Nmnnl4z7xzeb/y1tpDjaVS6S5oAS72lU4PwAnwJYHgInXdYJkLOX3egr4yQl/xY4sjidltkMI5i+ck5asBuN9L6M8ARKKYAtstrpuUe0PwS+gsRCsCkD2Co8PiuRZNCV/6WQn9CMtKXyb6PwS7LZ4rlE8F4J4phEZeLDzqM52KOYr3imCKp1ARTEUw+XggDqY5fiz3JFL3x6Dd4hmhfCwA91zI09MzBLVaom5QPhxAaElCb0F0MADZUTiuWzw6TWkj8LVJCRXJBbAZVIEs59Nq2n8GT8FYipoe6rtAPfieQXE50jLNcyAWmqH/v2laCA3t9//Oo8fxwAag4HAJpin6jYf2osknj+refSbAIPvguBeAJ5Ei5II/yQhtGYRupO1a8ANoKfoWLXN6/mUSqnXQNYthEj6hsDOD0Du0VQbFtFUUPqQJXczrciXd9p1fDlsNZpaa0MsIOm2IksA14NNSEzqAoPOGKH1yffpEW+wERDyoAkfZPgWOTM9tQPWxKSuoXJUyggouLZWvwaga5CV0P2PdTvNWhfo3vNuUp9BOBnPZEOZzBXl5dA9C7zt49EU0RXL79LsY0N616qirNcRr61YK1DRdb/bm+elrGMy+lw1Td8RQJZHrgLmOapfS+pqbR5O++hCV/cYLbTwNadMjrzmaNL6dRZEnmyyPzveTUDXQfcbXJiBQdC/UFFwKMtMq7vVZzp+VRDzn5Y6FqqSd7vtKpevCpwVe+YVe8HtO2iaPvqNSk9jXLkFw1pckrb+Eruel/hBrdhxEkfkSHACJRzRH3j+6/QIU68IJ85B97QAAAABJRU5ErkJggg==" />
      </svg>
      <h5 className="fw-bold my-2">Add Products</h5>
      <p>Add your products to the shop. List your
        eye-catching products with the best
        photos, price and descriptions.</p>
    </div>
    <div className="col-md-4 col-lg-3">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={52} height={52} viewBox="0 0 52 52">
        <image id="diagram" width={52} height={42} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAABHNCSVQICAgIfAhkiAAABMBJREFUaEPtmnmoVkUYxr3uomEuqGWQlmKpEG6FqXQhIzRxwaikCK3A/Q/XXCIUUUSsFI1cUBFFS3GJjFJbwEijRQ1BxY2LW5QRLkiW6/O7zMjcw3zfnHuV+52B74WHMzNnzjnPc2bOzDvvnJKedd+sEbl1FP+eQn+hl7BfGCr8i66SCAU+bgQ9q+MLQjtPA9Fq62IS+JLI9jCCEBayNarwViwCN4roayFFifMXlG8p3M56Fy0RyVsecTdVtldYbVqqj6fOkyo7mnWB8J4ozBFolR3CToGB5JwRRXlzj8BRKlseg0C4NxX+8Yg4rjI7yJxUukx43tTbpeOLsQj0aKsxV4UznBMMQtgv5nhdx8axCiwV+e8dcYh6WmgrnHLKe8co8AEJ+ENo6AhhxPzL5Omqj5n0nBgF/ibyXR1xryq9yckzBw43+f2xCfxMxF9xxHyi9BgnT/IdYaUti0ngByLNlGFtnxI+r6aRyo8JDwkHYxH4nsgyF1o7o0QHodyh9hjTCg74nhgEviui8x0R15RuL5zNIa5CcdYFvi+2sx3GzG3PCAfSiKNOlgV+KH4TEkLodj+lFZdlgZ+KHMO/tRtKsJj9uTLisiiwhUhtNwOE1XJZiVKnW5KulUPoeZUfcc9lqYs+J2JbhGYOwTKlKT8t4MEwNXQKtCJrR+bLcsuKwORICbfvhMHCFcO1u47Wkc6nkZf0clYEPiwieB0EjFxboczIRFk35X8NtB6n1wrDsyCQmMliAc/DtbeVYaWetC4qYKEbMq7lHuVWiC6KB7JAGJhgekh5omEHcyjIvMA6Is6kPd0jAD9zcqBpMi1wtMhPFdokRBxVHgf6q1C/0/lMCuRbmCLQLZOG84wrltYyI7CVGL8hENUiCp20bSqYKVSYkFOoLLhA1mYjjLj6HsI/mhZjfquKFURgqZgC/MYncrD+RuUfC7hgrj2iDP5lLiO24s571SIQN4kHsWTpJ/i6oCW8WQnmpK89Crjud8ENHPmE8gx7/T0L5GE4sU0E/MHWAtEpQnGPCp0F306OS+yEMuzqIC7fN8YkvypP69lTi5SwS6YqC2QwwBd8UKgtJD2LEA9C6HQ/QupfhCqb88N03JCirjvSVlng7RQPcqv8rwxOL6Hx3QLfCSvtyhjfLGu+kOEYzDKVqixwq24wxPOkiyr7WyCgyh4A8UjcKCJWf4aYBc5Xq0C4sGHB0E5A55LARgcirqYU0kb18g04vCDWdNaqXWBKHd5qbHoQJ6mZ5yaEHJ4SDps6UQnEeZ6X4g2NUx3mQywqgRBfkkIgIXU7NRRUIN6FzzlGA9vJuFru9zRW+aUpBDL3sTFS0BZ8XU9fHyD7n87jlpWZelEJZPJlEg7ZAFX4MkaBDALJ7SifWH7AwYnGompBviUIh6yvKnxbFFjxNWVikCm2oGmUYhf1fMTFLup5KfdlueTet/gNxv4NEiLgj4aQ4auy8MXYqiIGEzI3gMTvj3tCF+j8eMH6ucSKfD/kJW/zkQru/m5iN1+IaTYwNxyU4sGE4e1OD/UhErKFqmAjZKVKp3mRBLDYDsMIeC0LPcQ8g2cRWvkBge6vTymuj6rK5wisbNApKoUInCbGk4R6UTEPkyVMsvoOAItfSUXshdIAAAAASUVORK5CYII=" />
      </svg>
      <h5 className="fw-bold my-2">Start Selling</h5>
      <p>Set up payments and shipping, and
        start selling.</p>
    </div>
  </div>
</div>
{/*----- Shopify Cards Section End -----*/}

    </div>
  )
}

export default ShopifiyEcom

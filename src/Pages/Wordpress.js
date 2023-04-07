import React from 'react'
import Footer from '../Component/Home/Footer/Footer'
import WordPressBanner from '../Component/Wordpress/FristBanner/WordPressBanner'
import WordpressDevelopmen from '../Component/Wordpress/WordpressDevelopment/WordpressDevelopmen'
import WordpressPlan from '../Component/Wordpress/WordpressPlan/WordpressPlan'

function Wordpress() {
  return (
    <div className='site-content'>
      <WordPressBanner/>
      <WordpressPlan/>
      <WordpressDevelopmen/>
      <Footer/>
    </div>
  )
}

export default Wordpress

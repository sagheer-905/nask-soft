import React from 'react'

function Location() {
  return (
    <div>
      {/*----- Map Section Start -----*/}
<div className="map-section my-5 py-5">
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13604.278721227152!2d74.4394711!3d31.5222461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f68de5f615a161a!2sNask%20Soft!5e0!3m2!1sen!2s!4v1665062684194!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
</div>
{/*----- Map Section End -----*/}

    </div>
  )
}

export default Location

import React from 'react'
import AboutBooking from '../Component/BookingKeeping/AboutBooking/AboutBooking'
import BookingKeepingBanner from '../Component/BookingKeeping/BookingKeepingBanner/BookingKeepingBanner'
import Cashbased from '../Component/BookingKeeping/Cashbased/Cashbased'
import Doubleentry from '../Component/BookingKeeping/Doubleentry/Doubleentry'
import Singleentry from '../Component/BookingKeeping/Singleentry/Singleentry'
import Footer from '../Component/Home/Footer/Footer'

function BookingKeeping() {
  return (
    <div>
      <BookingKeepingBanner/>
      <AboutBooking/>
      <Singleentry/>
      <Doubleentry/>
      <Cashbased/>
      <Footer/>
    </div>
  )
}

export default BookingKeeping

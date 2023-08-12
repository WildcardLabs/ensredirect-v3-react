import React from 'react'
import "../../assets/css/landing.css"
import Header from '../layout/landing/Header'
import SectionOne from '../layout/landing/SectionOne'
import SectionTwo from '../layout/landing/SectionTwo'
import SectionThree from '../layout/landing/SectionThree'
import SectionFour from '../layout/landing/SectionFour'
import GetInTouch from '../layout/landing/GetInTouch'
import Footer from '../layout/landing/Footer'

function Landing() {
  return (
    <div className="landing">
        <Header/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        {/* <GetInTouch/> */}
        <Footer/>
    </div>
  )
}

export default Landing
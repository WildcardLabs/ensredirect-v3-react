import React from 'react'
// import sec3Two from "../../../assets/images/sec3-Two.svg"
import sec3One from "../../../assets/images/sec3-One.svg"

function SectionThree() {
  return (
    <section className="sectionThree">
      <div className="box">
        <img src={sec3One} alt="" />
        <h1>Custom <span>MediaHub</span></h1>
        <p>Your favorite streaming platforms on your ENS domain.Generate the ultimate profile that showcases all your video and audio content, seamlessly embedded on your ENS domain. Elevate how your content is discovered - All in one place.</p>
      </div>
      <img src="https://res.cloudinary.com/dtjl9nigz/image/upload/v1697449537/Group_35_kyab34.png" alt="" className='coverImg'/>
    </section>
  )
}

export default SectionThree
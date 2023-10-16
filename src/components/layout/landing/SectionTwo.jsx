import React from 'react'
import sec2One from "../../../assets/images/sec2-One.svg"
function SectionTwo() {
  return (
    <section className="sectionTwo">
      <div className="box">
        <img src={sec2One} alt="" />
        <h1>ENS<span> Profile</span></h1>
        <p>Curate a personalized profile that represents how you want to be identified online.Manage and showcase your profile with the ability to customize your text records.</p>
      </div>
      <img src="https://res.cloudinary.com/dtjl9nigz/image/upload/v1697448525/Frame_23_jw0bb7.svg" alt="" className='coverImg' loading="lazy" />
    </section>
  )
}

export default SectionTwo
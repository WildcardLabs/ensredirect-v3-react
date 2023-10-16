import React from 'react'
// import sec1Two from "../../../assets/images/sec1-Two.svg"
import sec1One from "../../../assets/images/sec1-One.svg"
function SectionOne() {
  return (
    <section className="sectionOne">
        <div className="box">
            <img src={sec1One} alt="" />
            <h1>Redirect Your ENS <span>Domain.</span></h1>
            <p>Redirect your ENS domain to any website of your choice. Effortlessly forward your .eth to any social or professional profile, showcase your work, champion a cause or simply have fun with memes.</p>
        </div>
       <img src="https://res.cloudinary.com/dtjl9nigz/image/upload/v1697448488/Group_8_reme4e.svg" alt="" className='coverImg'loading="lazy"/>
    </section>
  )
}

export default SectionOne
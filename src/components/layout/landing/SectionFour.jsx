import React from 'react'
import sec4 from "../../../assets/images/sec4.png"

function SectionFour() {
    return (
        <section className='sectionFour' id='aboutus'>
            <div className="child">
                <div className="innerChild">
                    <img src={sec4} alt="" loading="lazy"/>
                </div>
                <div className="innerChild">
                    <h1>About ENSRedirect</h1>
                    <p>
                        At ENSRedirect we are building products and public goods that empower ENS domain holders and users to utilize their domains. To revolutionize ENS domains, we believe users need tools to seamlessly manage their identity onchain and unlock immersive digital experiences.Since our inception, we have remained at the forefront of innovation in the ENS domain space. We continuously push the boundaries of what ENS domains can accomplish and leverage these advancements to develop products for decentralized communities and users.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SectionFour
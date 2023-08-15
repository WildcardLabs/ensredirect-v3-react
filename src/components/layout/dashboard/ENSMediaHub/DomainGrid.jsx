import React from 'react'
import ensGroup2 from "../../../../assets/images/ensGroup2.svg"
import { motion } from 'framer-motion'
function DomainGrid({ ens, setSelectedEnsFunc }) {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className='domianGrid'>
            {
                ens.map((item, idx) => (
                    <div className="box" key={idx} onClick={() => { setSelectedEnsFunc(item) }}>
                        <div className="innerBox">
                            <div className="cover">
                                <img src={ensGroup2} alt="" />
                            </div>
                            <p>{item}</p>
                        </div>
                    </div>
                ))
            }
        </motion.div>
    )
}

export default DomainGrid
import React from 'react'
import ensGroup2 from "../../../../assets/images/ensGroup2.svg"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
function DomainGrid({ ens }) {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className='domianGrid'>
            {
                ens.map((item, idx) => (
                    <div className="box" key={idx}>
                    <div className="innerBox">
                        <div className="cover">
                            <img src={ensGroup2} alt="" />
                        </div>
                       {
                        idx === 0 ?
                        <div className="text">
                        <h3>Primary</h3>
                      <p>{item}</p>
                      <Link to={`/personalize/${item}`}>
                      Setup ENS Profile
                      </Link>
                      </div>
                      :
                      <div className="text">
                    <p>{item}</p>
                   
                    </div>
                       }
                    </div>
                </div>
                ))
            }
        </motion.div>
    )
}

export default DomainGrid
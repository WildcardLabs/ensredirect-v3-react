import React, { useEffect, useRef, useState } from 'react'
import ensGroup2 from "../../../../assets/images/ensGroup2.svg"
import { BiSolidChevronRight, BiSolidChevronLeft } from "react-icons/bi";
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
function DomainList({ ens, primaryens }) {
    const sliderRef = useRef();
    const [index, setIndex] = useState(0)
    const nextSlide = () => {
        const sum = ens.length;
        if (sum > (index + 3)) {
            const newIndex = index + 1;
            sliderRef.current.style = `transform:translateX(-${320 * newIndex}px)`
            setIndex(newIndex)
        }
    }
    const prevSlide = () => {
        const sum = 6;
        if (index > 0) {
            const newIndex = index - 1;
            console.log(newIndex);
            sliderRef.current.style = `transform:translateX(-${320 * newIndex}px)`
            setIndex(newIndex);
        }
    }


    return (
        <motion.div className='domainList'
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
        >
            {
                index >= 1 &&
                <div className="btnCont prev" onClick={prevSlide}>
                    <button>
                        <BiSolidChevronLeft />
                    </button>
                </div>
            }
            <div className="slider" ref={sliderRef}>
                {
                    ens.map((item, idx) => (
                        <Link to={`/personalize/${item}`} className="box" key={idx}>
                            <div className="innerBox">
                                <div className="cover">
                                    <img src={ensGroup2} alt="" loading="lazy"/>
                                </div>
                                {
                                    item === primaryens ?
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
                        </Link>
                    ))
                }
            </div>
            <div className="btnCont next" onClick={nextSlide}>
                <button>
                    <BiSolidChevronRight />
                </button>
            </div>
        </motion.div>
    )
}

export default DomainList
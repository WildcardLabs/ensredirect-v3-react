import React from 'react'
import one from "../../../assets/images/one.svg"
import two from "../../../assets/images/two.svg"
import three from "../../../assets/images/three.svg"
import { motion } from 'framer-motion'
function CreatePopup() {
    return (
        <motion.ul className="createPopUp"
        animate={{ y: 0}}
        initial={{y: -50}}
        >
            <li>
                <img src={one} alt="" />
                <p>Redirect Your ENS Domain</p>
            </li>
            <li>
                <img src={two} alt="" />
                <p>ENS Profile</p>
            </li>
            <li>
                <img src={three} alt="" />
                <p>Custom MediaHub</p>
            </li>
        </motion.ul>
    )
}

export default CreatePopup
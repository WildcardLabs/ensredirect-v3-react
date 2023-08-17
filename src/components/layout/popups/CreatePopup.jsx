import React from 'react'
import one from "../../../assets/images/one.svg"
import two from "../../../assets/images/two.svg"
import three from "../../../assets/images/three.svg"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
function CreatePopup({popUpCreateMenu}) {
    return (
        <motion.ul className="createPopUp"
        animate={{ y: 0, x: "-50%" }}
        initial={{ y: -50, x: "0%" }}
        >
            <li>
                <Link to="/ensRedirect" onClick={popUpCreateMenu}>
                    <img src={one} alt="" />
                    <p>Redirect Your ENS Domain</p>
                </Link>
            </li>
            <li>
                <Link to="/personalize" onClick={popUpCreateMenu}>
                    <img src={two} alt="" />
                    <p>ENS Profile</p>
                </Link>
            </li>
            <li>
                <Link to="/customizeMedia" onClick={popUpCreateMenu}>
                    <img src={three} alt="" />
                    <p>Custom MediaHub</p>
                </Link>
            </li>
        </motion.ul>
    )
}

export default CreatePopup
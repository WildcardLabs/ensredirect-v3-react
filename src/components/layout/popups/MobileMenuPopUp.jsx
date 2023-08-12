import React from 'react'
import { AiFillCloseCircle, AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function MobileMenuPopUp({ popUpCreateMenu, popUpMobileMenu }) {
    return (
        <motion.div className='menuPopUp'
            animate={{ y: 0, x: "-50%" }}
            initial={{ y: -50, x: "0%" }}
        >
            <div className='head'>
                <img src="logo.png" alt="" />
                <AiFillCloseCircle className='icon' onClick={popUpMobileMenu} />
            </div>
            {/* <hr /> */}
            <ul>
                <li>
                    <Link to="" onClick={popUpMobileMenu}>Home</Link>
                </li>
                <li>
                    <Link to="" onClick={popUpMobileMenu}>About Us</Link>
                </li>
                <button className='create' onClick={popUpCreateMenu}> <AiOutlinePlus /> Create</button>
                <button className='connect'>Connect Wallet</button>
            </ul>
        </motion.div>
    )
}

export default MobileMenuPopUp
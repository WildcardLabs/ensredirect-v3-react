import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from "react-icons/ai"
import CreatePopup from '../popups/CreatePopup'
import bg from "../../../assets/images/bg.svg"
function Header() {
  return (
    <header>
      <nav>
        <div className="sec">
          <img src="logo.png" alt="logo" />
          <h1>ENSRedirect</h1>
        </div>
        <div className="sec1">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/"}>About Us</Link></li>
          </ul>
          <button className='create'> <AiOutlinePlus /> Create</button>
          <button className='connect'>Connect Wallet</button>
        </div>
      </nav>
      {/* <CreatePopup/> */}
      <div className="box">
        <div className="innerbox">
          <h1>
            Create utility
            for your
          </h1>
          <h1 className='color'>
          ENS name
          </h1>
          <p>
          Unlock the true potential of your ENS name with our ultimate all-in-one solution.
          </p>
          <button>
            Get Started
          </button>
        </div>
        <div className="innerbox">
          <img src={bg} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header
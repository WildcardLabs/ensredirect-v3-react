import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlus ,AiOutlineMenu} from "react-icons/ai"
import CreatePopup from '../popups/CreatePopup'
import bg from "../../../assets/images/bg.svg"
import MobileMenuPopUp from '../popups/MobileMenuPopUp'
function Header() {
  const [createPopUp, setCreatePopUp] = useState(false);
  const [menuPopUp, setMenuPopUp] = useState(false);
  function popUpCreateMenu() {
    setCreatePopUp(!createPopUp)
    setMenuPopUp(false)
  }

  function popUpMobileMenu() {
    setMenuPopUp(!menuPopUp)
    setCreatePopUp(false)
  }
  return (
    <header>
      <nav>
        <Link to='/' className="sec">
          <img src="logo.svg" alt="logo" />
          <h1>ENSRedirect</h1>
        </Link>
        <div className="sec1">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/"}>About Us</Link></li>
          </ul>
          <button className='create' onClick={popUpCreateMenu}> <AiOutlinePlus /> Create</button>
          <button className='connect'>Connect Wallet</button>
        </div>
        <AiOutlineMenu className="menu" onClick={popUpMobileMenu}/>
      </nav>
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
      {createPopUp && <CreatePopup popUpCreateMenu={popUpCreateMenu}/>}
      {menuPopUp && <MobileMenuPopUp popUpCreateMenu={popUpCreateMenu} popUpMobileMenu={popUpMobileMenu}/>}
      
    </header>
  )
}

export default Header
import React, { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom'
import { AiOutlinePlus, AiOutlineMenu } from "react-icons/ai"
import CreatePopup from '../popups/CreatePopup'
import bg from "../../../assets/images/bg.svg"
import MobileMenuPopUp from '../popups/MobileMenuPopUp'
import { setOwner } from "../../../redux/ensStore"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useSelector } from 'react-redux'


function Header() {
  const [createPopUp, setCreatePopUp] = useState(false);
  const [menuPopUp, setMenuPopUp] = useState(false);
  const { owner } = useSelector((state) => state.ensStore);
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
          <img src="logo.svg" alt="logo" loading="lazy"/>
          <h1>ENSRedirect</h1>
        </Link>
        <div className="sec1">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><a href={"#aboutus"}>About Us</a></li>
          </ul>
          <button className='create' onClick={popUpCreateMenu}> <AiOutlinePlus /> Create</button>
          <ConnectButton />
        </div>
        <AiOutlineMenu className="menu" onClick={popUpMobileMenu} />
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
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              // Note: If your app doesn't use authentication, you
              // can remove all 'authenticationStatus' checks
              const ready = mounted && authenticationStatus !== 'loading';
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === 'authenticated');

              return (
                <div
                  {...(!ready && {
                    'aria-hidden': true,
                    'style': {
                      opacity: 0,
                      pointerEvents: 'none',
                      userSelect: 'none',
                      cursor: 'pointer',
                    },
                  })}
                >
                  {(() =>
                    <button onClick={openConnectModal} type="button">
                      Get Started
                    </button>
                  )()}
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
        <div className="innerbox">

          <img src={bg} alt="" loading="lazy"/>
        </div>
      </div>
      {createPopUp && <CreatePopup popUpCreateMenu={popUpCreateMenu} />}
      {menuPopUp && <MobileMenuPopUp popUpCreateMenu={popUpCreateMenu} popUpMobileMenu={popUpMobileMenu} />}

    </header>
  )
}

export default Header
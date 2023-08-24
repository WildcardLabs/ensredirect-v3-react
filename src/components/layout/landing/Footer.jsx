import React from 'react'
import GetInTouch from './GetInTouch'
import { Link } from 'react-router-dom'
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"
import { BsFillEnvelopeFill } from "react-icons/bs"
import { ConnectButton } from '@rainbow-me/rainbowkit';
function Footer() {
    return (
        <footer>
            <GetInTouch />
            <div className="box">
                <ul>
                    <li>
                        <Link to="/"className="logo">
                            <img src="logo.svg" alt="" loading="lazy"/>
                            <h1>ENSRedirect</h1>
                        </Link>
                        <p>
                            Unlock the true potential of your ENS name with our ultimate all-in-one solution.
                        </p>
                    </li>
                    <li>
                        <h1>NAVIGATION</h1>
                        <div className="links">
                            <Link to="/">Home</Link>
                            <a href={"#aboutus"}>About Us</a>
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
                     <Link  onClick={openConnectModal}>+ Create</Link>
                  )()}
                </div>
              );
            }}
          </ConnectButton.Custom>
                          
                        </div>
                    </li>
                    <li>
                        <h1>GET IN TOUCH</h1>
                        <Link to="/">team@ensredirect.xyz</Link>
                    </li>
                </ul>
                <div className="line"></div>
                <ul>
                    <li>
                        <p>All rights reserved. 2023</p>
                    </li>
                    <li>
                        <a href="#">
                            <BsFillEnvelopeFill />
                        </a>
                        <a href="https://twitter.com/@ensredirect" target='_blank'>
                            <AiOutlineTwitter />
                        </a>
                        <a href="#">
                            <AiOutlineGithub />
                        </a>
                    </li>
                    <li>
                        <p>All rights reserved. 2023</p>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
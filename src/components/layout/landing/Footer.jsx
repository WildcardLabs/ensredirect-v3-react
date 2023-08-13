import React from 'react'
import GetInTouch from './GetInTouch'
import { Link } from 'react-router-dom'
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"
import { BsFillEnvelopeFill } from "react-icons/bs"
function Footer() {
    return (
        <footer>
            <GetInTouch />
            <div className="box">
                <ul>
                    <li>
                        <div className="logo">
                            <img src="logo.svg" alt="" />
                            <h1>ENSRedirect</h1>
                        </div>
                        <p>
                            Unlock the true potential of your ENS name with our ultimate all-in-one solution.
                        </p>
                    </li>
                    <li>
                        <h1>NAVIGATION</h1>
                        <div className="links">
                            <Link to="/">Home</Link>
                            <Link to="/">About Us</Link>
                            <Link to="/">+ Create</Link>
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
                        <a href="#">
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
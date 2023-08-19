import React from 'react'
import { Link } from 'react-router-dom'
import "../../assets/css/profile.css"
import { RiShareBoxLine } from "react-icons/ri"
import { TbCopy } from "react-icons/tb"
import { BiCalendar } from "react-icons/bi";
import { FaEnvelope, FaTelegramPlane } from "react-icons/fa"
import { BsDiscord } from "react-icons/bs"
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai"
import MainSec from '../layout/dashboard/profile/MainSec'

function Profile() {
    const truncateAddress = (address, startChars = 5, endChars = 4) => {
        if (!address) return '';

        const start = address.slice(0, startChars);
        const end = address.slice(-endChars);

        return `${start}...${end}`;
    };

    return (
        <div className='profile'>
            <div className="banner">
                <div className="header">
                    <Link to="">
                        <img src="/logo.png" alt="" />
                    </Link>
                </div>
                <h2>Share Profile <RiShareBoxLine className='icon' /></h2>
            </div>
            <main>
                <div className="sidebar">
                    <div className="cover">
                       <div className="imageCont">
                       <img src='/dp.png' alt="" />
                       </div>
                        <h1>Hellenstans.eth</h1>
                        <p><BiCalendar className='icon' />Onchain since July 15, 2023</p>
                        <div className="address">
                            <span>  {truncateAddress("0x7f736235D9b05e8A8dAC7015DC6B2237Ad61de1D")}</span>
                            <TbCopy className='icon' />
                        </div>
                    </div>
                    <h3>ensredirect.xyz</h3>
                    <div className="links">
                        <a href="#">
                            <AiOutlineTwitter className='icon' />
                            <span>@hellenstans</span>
                        </a>
                        <a href="#">
                            <FaEnvelope className='icon' />
                            <span>@hellen1cute@gmail.com</span>
                        </a>
                        <a href="#">
                            <FaTelegramPlane className='icon' />
                            <span>@elle97</span>
                        </a>
                        <a href="#">
                            <BsDiscord className='icon' />
                            <span>elle#9679</span>
                        </a>
                        <a href="#">
                            <AiFillGithub className='icon' />
                            <span>@hellenstans97</span>
                        </a>
                    </div>
                </div>
                <MainSec/>
            </main>
        </div>
    )
}

export default Profile
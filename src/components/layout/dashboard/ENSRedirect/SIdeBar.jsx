import React from 'react'
import { BsChevronDoubleLeft } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { TbCopy } from "react-icons/tb"
import { FaEnvelope, FaTelegramPlane } from "react-icons/fa"
import { BsDiscord } from "react-icons/bs"
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai"
import base from "../../../../assets/images/base.svg"
import ens from "../../../../assets/images/ens.svg"
import eig from "../../../../assets/images/eig.svg"
import jai from "../../../../assets/images/jai.svg"
import Select from 'react-select';
function SIdeBar() {

    const options = [
        { value: 'eth', label: 'Ethereum' },
        { value: 'opt', label: 'optimism' },
    ];

    const truncateAddress = (address, startChars = 10, endChars = 4) => {
        if (!address) return '';

        const start = address.slice(0, startChars);
        const end = address.slice(-endChars);

        return `${start}...${end}`;
    };
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            display: 'flex',
            // padding: '9px 7px 9px 10px',
            justifyContent: 'space-between',
            fontSize: "14px",
            alignItems: 'center',
            alignSelf: 'stretch',
            border: 'none',
            outline: 'none',
            borderRadius: '4px',
            background: 'linear-gradient(181deg, #F7F3FA 0%, rgba(255, 255, 255, 0.50) 100%)',
            boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(35px)',
        }),
        // You can add more styles for other components like option, indicatorSeparator, etc.
    };

    return (
        <div className="sideBar">
            <div className="head">
                <Link to="/"> <img src={`${window.location.origin}/logo.png`} alt="" /></Link>
                <div className="left">
                    <BsChevronDoubleLeft />
                </div>
            </div>
            <div className="dp">
                <img src={`${window.location.origin}/dp.png`} alt="" />
                <h1>Hellenstans.eth</h1>
                <div className="address">
                    <p>
                        {truncateAddress("0x7f736235D9b05e8A8dAC7015DC6B2237Ad61de1D")}
                    </p>
                    <TbCopy className='icon' />
                </div>
                <input type="text" style={{ display: "none" }} />
            </div>
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
                    <BsDiscord className='icon' />
                    <span>elle#9679</span>
                </a>
                <a href="#">
                    <AiFillGithub className='icon' />
                    <span>@hellenstans97</span>
                </a>
                <a href="#">
                    <FaTelegramPlane className='icon' />
                    <span>@elle97</span>
                </a>
            </div>
            <h1>Manage Collections</h1>
            <div className="links">
                <Select
                    styles={customStyles}
                    defaultValue={{ value: 'eth', label: 'Ethereum' }}
                    // onChange={setSelectedOption}
                    options={options}
                    className='select'
                />
                <div className="btn">
                    <div className="innerBtn">
                        <img src={base} alt="" />
                        <span>Base, Introduced</span>
                    </div>
                    <span>1</span>
                </div>
                <div className="btn">
                    <div className="innerBtn">
                        <img src={ens} alt="" />
                        <span>BENS: Ethereum N...</span>
                    </div>
                    <span>6</span>
                </div>
                <div className="btn">
                    <div className="innerBtn">
                        <img src={eig} alt="" />
                        <span>BEigenLayer Worl...</span>
                    </div>
                    <span>1</span>
                </div>
                <div className="btn">
                    <div className="innerBtn">
                        <img src={jai} alt="" />
                        <span>Jia Launch</span>
                    </div>
                    <span>1</span>
                </div>
            </div>
        </div>
    )
}

export default SIdeBar
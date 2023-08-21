import React, { useEffect, useState } from 'react'
import { BsChevronDoubleLeft } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { TbCopy } from "react-icons/tb"
import { FaEnvelope, FaTelegramPlane, FaReddit, FaTimes } from "react-icons/fa"
import { BsDiscord } from "react-icons/bs"
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai"
import base from "../../../assets/images/base.svg"
import ensimg from "../../../assets/images/ens.svg"
import eig from "../../../assets/images/eig.svg"
import jai from "../../../assets/images/jai.svg"
import Select from 'react-select';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'
import { setSidebarState } from '../../../redux/ensStore'
function SIdeBar() {
    const dispatch = useDispatch();
    const { owner, sidebarState } = useSelector((state) => state.ensStore);
    const [ensRecord, setEnsRecord] = useState(null);
    const [ens, setEns] = useState(null);
    const [ensCount, setEnsCount] = useState(null);
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

    const fetchRecords = async () => {
        try {
            const ensdata = await axios.get(`https://us-central1-matic-services.cloudfunctions.net/domainlist?address=${owner}`)
            const primaryens = await axios.get(`https://api.ensideas.com/ens/resolve/${owner}`)
            const ens = primaryens.data.name ? primaryens.data.name : ensdata.data[0];
            setEns(ens);
            setEnsCount(ensdata.data.length);
            const res = await axios.get(`https://us-central1-matic-services.cloudfunctions.net/textrecords?ens=${ens}`)
            setEnsRecord(res.data);
            // console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    const copyAddrress = async () => {
        if (ensRecord) {
            await navigator.clipboard.writeText(ensRecord?.longaddress);
        }
    }
    const togglesideBarFunc = () => {
        dispatch(setSidebarState(false));
    }

    useEffect(() => {
        if (owner) {
            fetchRecords();
        }
    }, [owner])

    return (
        <div className={sidebarState ? "sideBar active" : "sideBar"}>
            <div className="head" >
                <Link to="/"> <img src={`${window.location.origin}/logo.png`} alt="" /></Link>
                <div className="left">
                    <BsChevronDoubleLeft />
                </div>
                <div className="cancel" onClick={togglesideBarFunc}>
                    <FaTimes />
                </div>
            </div >
            <div className="dp">
                <img src={`${ensRecord?.avatar ? ensRecord.avatar : window.location.origin}/dp.png`} alt="" />
                <h1>{ens}</h1>
                <div className="address">
                    <p>
                        {ensRecord?.address}
                    </p>
                    <TbCopy className='icon' onClick={copyAddrress} />
                </div>
                <input type="text" style={{ display: "none" }} />
            </div>
            <div className="links">
                {
                    ensRecord?.twitter &&
                    <a href={`https://twitter.com/${ensRecord.twitter}`} target='_blank' className="twitter">
                        <AiOutlineTwitter className='icon' />
                        <span>@{ensRecord.twitter}</span>
                    </a>
                }
                {
                    ensRecord?.email &&
                    <a href="#" target='_blank' className="email">
                        <FaEnvelope className='icon' />
                        <span>@{ensRecord.email}</span>
                    </a>
                }
                {
                    ensRecord?.discord &&
                    <a href="#" target='_blank' className="discord">
                        <BsDiscord className='icon' />
                        <span>@{ensRecord.discord}</span>
                    </a>
                }
                {
                    ensRecord?.github &&
                    <a href={`https://github.com/${ensRecord.github}`} target='_blank' className="github">
                        <AiFillGithub className='icon' />
                        <span>@{ensRecord.github}</span>
                    </a>
                }
                {
                    ensRecord?.telegram &&
                    <a href={`https://t.me/${ensRecord.telegram}`} target='_blank' className="telegram">
                        <FaTelegramPlane className='icon' />
                        <span>@{ensRecord.telegram}</span>
                    </a>
                }
                {
                    ensRecord?.reddit &&
                    <a href="#" target='_blank' className="reddit">
                        <FaReddit className='icon' />
                        <span>@{ensRecord.reddit}</span>
                    </a>
                }
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
                        <img src={ensimg} alt="" />
                        <span>BENS: Ethereum N...</span>
                    </div>
                    <span>{ensCount}</span>
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
        </div >
    )
}
export default SIdeBar
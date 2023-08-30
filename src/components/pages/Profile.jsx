import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../../assets/css/profile.css"
import { RiShareBoxLine } from "react-icons/ri"
import { TbCopy } from "react-icons/tb"
import { BiCalendar } from "react-icons/bi";
import { FaEnvelope, FaTelegramPlane } from "react-icons/fa"
import { BsDiscord } from "react-icons/bs"
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai"
import MainSec from '../layout/dashboard/profile/MainSec'
import { ethers } from 'ethers'
import axios from 'axios'
function Profile() {
    const [ensRecord, setEnsRecord] = useState(null);
    const { ens } = useParams();
    // const [ens, setEns] = useState(null);
    const [ensCount, setEnsCount] = useState(null);
    const fetchRecords = async () => {
        try {
            const provider = new ethers.providers.JsonRpcProvider("https://eth.llamarpc.com");
            const owner = await provider.resolveName(ens);
            const ensdata = await axios.get(`https://us-central1-matic-services.cloudfunctions.net/domainlist?address=${owner}`);
            const primaryens = await axios.get(`https://api.ensideas.com/ens/resolve/${owner}`)
            // const ens = primaryens.data.name ? primaryens.data.name : ensdata.data[0];
            // setEns(ens);
            setEnsCount(ensdata.data.length);
            const res = await axios.get(`https://us-central1-matic-services.cloudfunctions.net/textrecords?ens=${ens}`)
            setEnsRecord(res.data);
            console.log(res.data);
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
    useEffect(() => {
        fetchRecords();
    }, [])

    return (
        <div className='profile'>
            <div className="banner">
                <div className="header">
                    <Link to="">
                        <img loading="lazy" src="/logo.png" alt="" />
                    </Link>
                </div>
                <h2>Share Profile <RiShareBoxLine className='icon' /></h2>
            </div>
            <main>
                <div className="sidebar">
                    <div className="cover">
                        <div className="imageCont">
                            <img loading="lazy" src='/dp.png' alt="" />
                        </div>
                        <h1>{ens}</h1>
                        <p><BiCalendar className='icon' />Onchain since July 15, 2023</p>
                        <div className="address">
                            <span>  {ensRecord?.address}</span>
                            <TbCopy className='icon' onClick={copyAddrress} />
                        </div>
                    </div>
                    <h3>ensredirect.xyz</h3>
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
                            ensRecord?.telegram &&
                            <a href={`https://t.me/${ensRecord.telegram}`} target='_blank' className="telegram">
                                <FaTelegramPlane className='icon' />
                                <span>@{ensRecord.telegram}</span>
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
                            ensRecord?.reddit &&
                            <a href="#" target='_blank' className="reddit">
                                <FaReddit className='icon' />
                                <span>@{ensRecord.reddit}</span>
                            </a>
                        }
                    </div>
                </div>
                <MainSec />
            </main>
        </div>
    )
}

export default Profile
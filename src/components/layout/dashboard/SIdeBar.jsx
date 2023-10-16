import React, { useEffect, useState } from 'react'
import { BsChevronDoubleLeft } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { TbCopy } from "react-icons/tb"
import { FaEnvelope, FaTelegramPlane, FaReddit, FaTimes } from "react-icons/fa"
import { BsDiscord } from "react-icons/bs"
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai"
import ensimg from "../../../assets/images/ens.svg"
import ethLogo from "../../../assets/images/ethereum-logo.svg"
import optLogo from "../../../assets/images/optimism-logo.svg"
import Select from 'react-select';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'
import { setSidebarState, setNetwork } from '../../../redux/ensStore'
import { Network, Alchemy } from "alchemy-sdk";

function SIdeBar() {
    const dispatch = useDispatch();
    const { owner, sidebarState } = useSelector((state) => state.ensStore);
    const [ensRecord, setEnsRecord] = useState(null);
    const [ens, setEns] = useState(null);
    const [ensCount, setEnsCount] = useState(null);
    const [nftCount, setNftCount] = useState({
        eth: 0,
        opt: 0,
    });
    const options = [
        {
            value: "ethereum",
            text: 'Ethereum',
            icon: <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="15px" height="15px" version="1.1" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 784.37 1277.39" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns: xodm="http://www.corel.com/coreldraw/odm/2003">
                <g id="Layer_x0020_1">
                    <g id="_1421394342400">
                        <g>
                            <polygon fill="#343434" fillRule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54" />
                            <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33" />
                            <polygon fill="#3C3C3B" fillRule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89" />
                            <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89" />
                            <polygon fill="#141414" fillRule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33" />
                            <polygon fill="#393939" fillRule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33" />
                        </g>
                    </g>
                </g>
            </svg>
        },
        {
            value: "optimism",
            text: 'Optimism',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 2500 2500">
                <g id="Layer_x0020_1">
                    <g id="_1995692876000">
                        <path fill="#FF0420" d="M2500,1250C2500,560,1940,0,1250,0S0,560,0,1250s560,1250,1250,1250S2500,1940,2500,1250z"></path>
                        <path fill="#FFFFFF" d="M886,1582c-75,0-136-18-183-53c-47-36-71-87-71-152c0-14,2-31,5-51c8-45,20-99,35-163c43-172,153-258,330-258    c48,0,92,8,130,25c38,16,68,40,90,72s33,69,33,113c0,13-2,30-5,50c-10,56-21,110-34,163c-22,86-60,150-114,193    c-54,42-126,63-216,63V1582z M900,1447c35,0,65-11,89-31c25-21,43-52,54-95c15-59,26-110,33-154c3-13,4-27,4-41c0-57-30-86-89-86    c-35,0-65,11-90,31c-25,21-42,52-53,95c-12,42-23,93-34,154c-3,13-4,26-4,40C809,1418,840,1447,900,1447z"></path>
                        <path fill="#FFFFFF" d="M1297,1573c-7,0-12-2-16-7c-3-5-4-11-3-17l130-610c1-7,5-13,11-17c6-5,12-7,18-7h250c70,0,125,15,167,43    c43,29,64,71,64,125c0,16-2,32-6,49c-16,72-47,125-95,160c-47,35-112,52-194,52h-127l-43,206c-2,7-5,13-11,17c-6,5-12,7-18,7h-128    L1297,1573z M1629,1214c27,0,49-7,69-22s33-35,40-62c2-11,3-20,3-28c0-18-6-32-16-42c-11-10-29-15-55-15h-113l-36,168h108V1214z"></path>
                    </g>
                </g>
            </svg>
        },
    ];

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
    const fetcEthNftCount = (owner) => {
        const settings = {
            apiKey: import.meta.env.VITE_ETH_ALCHEMYKey,
            network: Network.ETH_MAINNET, // Replace with your network.
        };

        const alchemy = new Alchemy(settings);
        alchemy.nft.getNftsForOwner(owner).then(nfts => {
            setNftCount(prevState => ({
                ...prevState,
                eth: nfts.totalCount
            }));
            // console.log(nftCount);
            // console.log(nfts.totalCount);
        });
    }
    const fetcOptNftCount = (owner) => {
        const settings = {
            apiKey: import.meta.env.VITE_OPT_ALCHEMYKey,
            network: Network.OPT_MAINNET, // Replace with your network.
        };

        const alchemy = new Alchemy(settings);
        alchemy.nft.getNftsForOwner(owner).then(nfts => {
            setNftCount(prevState => ({
                ...prevState,
                opt: nfts.totalCount
            }));
        });
    }

    const setSelectedOption = (e) => {
        dispatch(setNetwork(e.value));
    }

    const goBackToPrevPage = () => {
        history.back();
    }

    useEffect(() => {
        if (owner) {
            fetchRecords();
            // Get how many NFTs an address owns.  
            fetcEthNftCount(owner)
            fetcOptNftCount(owner);
        }
    }, [owner])

    return (
        <div className={sidebarState ? "sideBar active" : "sideBar"}>
            <div className="head" >
                <Link to="/"> <img loading="lazy" src={`${window.location.origin}/logo.png`} alt="" /></Link>
                <div className="left">
                    <BsChevronDoubleLeft onClick={goBackToPrevPage} />
                </div>
                <div className="cancel" onClick={togglesideBarFunc}>
                    <FaTimes />
                </div>
            </div >
            <div className="dp">
                {
                    ensRecord?.avatar ?
                        <img loading="lazy" src={`${ensRecord.avatar}`} alt="" />
                        :
                        <img loading="lazy" src={`${window.location.origin}/dp.png`} alt="" />
                }
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
                    onChange={setSelectedOption}
                    options={options}
                    className='select'
                    getOptionLabel={e => (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {e.icon}
                            <span style={{ marginLeft: 5 }}>{e.text}</span>
                        </div>
                    )}
                />
                <div className="btn">
                    <div className="innerBtn">
                        <img loading="lazy" src={ethLogo} alt="" />
                        <span>Etherum</span>
                    </div>
                    <span>{nftCount.eth}</span>
                </div>
                <div className="btn">
                    <div className="innerBtn">
                        <img loading="lazy" src={ensimg} alt="" />
                        <span>ENS: Ethereum N...</span>
                    </div>
                    <span>{ensCount}</span>
                </div>
                <div className="btn">
                    <div className="innerBtn">
                        <img loading="lazy" src={optLogo} alt="" />
                        <span>Optimism</span>
                    </div>
                    <span>{nftCount.opt}</span>
                </div>
            </div>
        </div >
    )
}
export default SIdeBar
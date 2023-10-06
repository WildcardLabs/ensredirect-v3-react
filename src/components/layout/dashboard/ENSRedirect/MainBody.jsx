import React, { useEffect, useState } from 'react'
import { BiHomeAlt, BiCalendar } from "react-icons/bi";
import ensGroup1 from "../../../../assets/images/ensGroup1.svg"
import listing from "../../../../assets/images/listing.svg"
import grid from "../../../../assets/images/grid.svg"
import DomainList from './DomainList';
import DomainGrid from './DomainGrid';
import Rectangle1 from "../../../../assets/images/Rectangle1.png"
import Caret from "../../../../assets/images/Caret up.svg"
import ensRedirectForm from "../../../../assets/images/ensRedirectForm.svg"
import { BsArrowRight } from 'react-icons/bs';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import SuccessPage from '../../../pages/SuccessPage';
import Web3 from 'web3';
import { domainAbi } from '../../../utils/constants';
import { useWalletClient } from 'wagmi'
import { ethers } from 'ethers';
import { useEthersSigner } from '../../../utils/ethers'
import { setSidebarState } from '../../../../redux/ensStore';
import PublishPage from '../../../pages/PublishPage';
import { Link } from 'react-router-dom';

function MainBody() {
  const dispatch = useDispatch();
  const signer = useEthersSigner();
  const [ensGrid, setEnsGrid] = useState(false)
  const [no, setNo] = useState(0);
  const [ens, setEns] = useState([]);
  const [primaryens, setPrimaryens] = useState(null);
  const [selectedEns, setSelectedEns] = useState(null);
  const [redirectUrl, setRedirectUrl] = useState(null);
  const [dp, setDp] = useState(null);
  const [gasEnable, setGasEnable] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPublishPopUp, setShowPublishPopUp] = useState(false);
  const { owner } = useSelector((state) => state.ensStore);

  const fetchEns = async () => {
    try {
      // const ensTextRecord = await axios.get(`https://us-central1-matic-services.cloudfunctions.net/textrecords?ens=${ens}`)
      // setDp(ensTextRecord?.data.avatar);
      const res = await axios.get(`https://us-central1-matic-services.cloudfunctions.net/domainlist?address=${owner}`)
      const list = res.data;
      console.log(list);
      if (list.length > 0) {
        let i = 0
        for await (const data of list) {
          if (data.includes("eth")) {
            setNo(no => no + 1);
            setEns(ens => [...ens, data]);
          }
        }
      }
      const res2 = await axios.get(`https://api.ensideas.com/ens/resolve/${owner}`)
      const primarydata = res2.data.name ? res2.data.name : list[0];
      setPrimaryens(primarydata);
    } catch (error) {
      console.log(error);
    }
  }

  const toggleList = () => {
    setEnsGrid(false);
  }
  const toggleGrid = () => {
    setEnsGrid(true);
  }
  const setSelectedEnsFunc = (txt) => {
    setSelectedEns(txt)
  }
  const togglesideBarFunc = () => {
    dispatch(setSidebarState(true));
  }
  const redirectFunc = (e) => {
    e.preventDefault();
    const url = e.target.url.value.trim();
    setRedirectUrl(url);
    if (url !== "" && selectedEns) {
      setShowPublishPopUp(true);
    }
  }

  const redirect = async () => {
    try {
      if (gasEnable) {
        if (redirectUrl !== "" && selectedEns) {
          const res = await axios.get(`https://us-central1-matic-services.cloudfunctions.net/redirect?web=${redirectUrl}&ens=${selectedEns}&address=${owner}`);
          if (res.data) {
            const ensContract = new ethers.Contract(
              res.data.resolver,
              domainAbi,
              signer
            );
            setLoading(true)
            const transaction = await ensContract.setContenthash(res.data.node, res.data.ipfs);
            // // Wait for 1 confirmation
            const transactionReceipt = await transaction.wait(1);
            setLoading(false);
            setSuccess(true);
            // console.log('Transaction receipt after 1 confirmation:', transactionReceipt);
          }
        }
      }
    } catch (error) {
      setLoading(false);
      setSuccess(false);
    }
  }

  useEffect(() => {
    if (owner) {
      fetchEns();
    }
  }, [owner])

  return (
    <main>
      <div className="mobilehead">
        <a href="/"><img src="/logo.png" alt="" /></a>
        <div className="menu" onClick={togglesideBarFunc}>
          <img loading="lazy" src={dp ? dp : "/dp.png"} alt="dp" />
          <img loading="lazy" src={Caret} alt="caret up" />
        </div>
      </div>
      <div className="banner">
        <div className="head">
          <ul>
            <Link to='/'>
              <BiHomeAlt className="icon" />
              <span>Home</span>
            </Link>
            <div className="ensBtn">
              <img loading="lazy" src={ensGroup1} alt="" />
              <span>
                Redirect Your ENS Domain
              </span>
            </div>
          </ul>
        </div>
        <div className="text">
          <h1>
            Welcome, {primaryens}
          </h1>
          <p>
            <BiCalendar className='icon' />
            <span>
              Onchain since July 15, 2023
            </span>
          </p>
        </div>
      </div>
      <div className="ensDomainCont">
        <div className="head">
          <div className="sec">
            <h1>My Names</h1>
            <span>{no}</span>
            <p>Select domain name to redirect to</p>
          </div>
          <div className="sec1">
            <img loading="lazy" src={listing} alt="" className={!ensGrid ? "active" : ""} onClick={toggleList} />
            <img loading="lazy" src={grid} alt="" className={ensGrid ? "active" : ""} onClick={toggleGrid} />
          </div>
        </div>
        {
          ensGrid ?
            <DomainGrid ens={ens} primaryens={primaryens} setSelectedEnsFunc={setSelectedEnsFunc} />
            :
            <DomainList ens={ens} primaryens={primaryens} setSelectedEnsFunc={setSelectedEnsFunc} />
        }
        <h4>ENSRedirect</h4>
        <div className="child">
          <div className="cover">
            <img loading="lazy" src={Rectangle1} alt="" />
          </div>
          <div className="text">
            <h3>Enter Your Website URL to Redirect to</h3>
            <p>Redirect your ENS domain to any website of your choice. Effortlessly forward your .eth to any social or professional profile, showcase your work, champion a cause or simply have fun with memes.</p>
            <form action="" onSubmit={redirectFunc}>
              <p>
                <img loading="lazy" src={ensRedirectForm} alt="" />
                {selectedEns}
              </p>
              <div className="row">
                <input type="url" name='url' placeholder='Enter website url to redirect to' />
                <button>
                  <BsArrowRight />
                  Redirect
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showPublishPopUp
        &&
        <PublishPage setGasEnable={setGasEnable} gasEnable={gasEnable} redirect={redirect} setShowPublishPopUp={setShowPublishPopUp} loading={loading} />
      }
      {success
        &&
        <SuccessPage setShowPublishPopUp={setShowPublishPopUp} selectedEns={selectedEns} redirectUrl={redirectUrl} setSuccess={setSuccess} />
      }
    </main>
  )
}

export default MainBody
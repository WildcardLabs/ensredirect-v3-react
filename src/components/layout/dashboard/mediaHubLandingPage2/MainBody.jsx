import React, { useEffect, useState } from 'react'
import { BiArrowBack, BiCalendar } from "react-icons/bi";
import { PiTrashLight } from "react-icons/pi";
import { BsArrowRightShort, BsArrowLeft } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import Caret from "../../../../assets/images/Caret up.svg"
import mediaHubGroup1 from "../../../../assets/images/mediaHubGroup1.svg"
import Youtube from "../../../../assets/images/Youtube.svg"
import Applepodcast from "../../../../assets/images/Applepodcast.svg"
import Tiktok from "../../../../assets/images/Tiktok.svg"
import Spotify from "../../../../assets/images/Spotify.svg"
import Twitch from "../../../../assets/images/Twitch.svg"
import Facebook from "../../../../assets/images/Facebook.svg"
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useWalletClient } from 'wagmi'
import { ethers } from 'ethers';
import { useEthersSigner } from '../../../utils/ethers'
import { useDispatch } from 'react-redux';
import { setSidebarState } from '../../../../redux/ensStore';
import PublishPage from '../../../pages/PublishPage';
import { domainAbi } from '../../../utils/constants';
import SuccessPopUp from '../../../pages/SuccessPopup';
function MainBody() {
  const dispatch = useDispatch();
  const signer = useEthersSigner();
  const [userEns, setUserEns] = useState(null)
  const { ens } = useParams();
  const [dp, setDp] = useState(null);
  const [record, setRecord] = useState(null);
  const [redirectUrl, setRedirectUrl] = useState(null);
  const [gasEnable, setGasEnable] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPublishPopUp, setShowPublishPopUp] = useState(false);
  const [formtTxt, setFormtTxt] = useState({
    facebook: "",
    youtube: "",
    twitch: "",
    tiktok: "",
    apple: "",
    spotify: ""
  });
  const { facebook, youtube, twitch, tiktok, apple, spotify } = formtTxt;
  const fetchEnsRecords = async () => {
    try {
      const ensTextRecord = await axios.get(`https://us-central1-matic-services.cloudfunctions.net/textrecords?ens=${ens}`)
      setRecord(ensTextRecord?.data);
      setDp(ensTextRecord?.data.avatar);
    } catch (error) {
      console.log(error);
    }
  }

  const setTxtRecord = (e) => {
    setFormtTxt({ ...formtTxt, [e.target.name]: e.target.value })
  }

  const togglesideBarFunc = () => {
    dispatch(setSidebarState(true));
  }
  const goBackFunc = (e) => {
    e.preventDefault();
    history.back();
  }
  const redirectFunc = (e) => {
    e.preventDefault();
    setShowPublishPopUp(true);
  }

  const publishSocials = async () => {
    try {
      if (gasEnable) {
        setLoading(true);
        const res = await axios.get(`https://us-central1-matic-services.cloudfunctions.net/ensprofile?ens=${ens}&facebook=${facebook}&youtube=${youtube}&twitch=${twitch}&tiktok=${tiktok}&apple=${apple}&spotify=${spotify}`);
        if (res.data) {
          const ensContract = new ethers.Contract(
            res.data.resolver,
            domainAbi,
            signer
          );
          const transaction = await ensContract.setContenthash(res.data.node, res.data.ipfs);
          // // Wait for 1 confirmation
          const transactionReceipt = await transaction.wait(1);
          setLoading(false);
          setSuccess(true);
        }
      }
    } catch (error) {
      setLoading(false);
      setSuccess(false);
    }
  }
  useEffect(() => {
    setUserEns(ens);
  }, []);
  return (
    <main>
      <div className="mobilehead">
        <a href="/" onClick={goBackFunc}><BsArrowLeft /> Back</a>
        <div className="menu" onClick={togglesideBarFunc}>
          <img loading="lazy" src={dp ? dp : "/dp.png"} alt="dp" />
          <img loading="lazy" src={Caret} alt="caret up" />
        </div>
      </div>
      <div className="banner">
        <div className="head">
          <ul>
            <li onClick={goBackFunc}>
              <BiArrowBack className="icon" />
              <span>Back</span>
            </li>
            <div className="ensBtn">
              <img loading="lazy" src={mediaHubGroup1} alt="" />
              <span>
                Custom MediaHub
              </span>
            </div>
          </ul>
        </div>
        <div className="text">
          <h1>
            Personalize your ENS Profile
          </h1>
          <p>
            <BiCalendar className='icon' />
            <span>
              Onchain since July 15, 2023
            </span>
          </p>
        </div>
      </div>
      <form className="child" onSubmit={redirectFunc}>
        <div className="socialRow">
          <div className="socialCover"></div>
          <div className="box">
            <div className="text">
              <h1>Socials </h1>
              <p>Enhance your online presence: Link your social media accounts effortlessly. Connect with friends and followers across platforms.</p>
            </div>
            <Link to={`/addsocials/${userEns}`}> <FaArrowRight className='icon' /> Add</Link>
          </div>
        </div>
        <div className="row">
          <div className="text">
            <h1>MediaHub</h1>
            <p>Showcase your video and audio content all in one page. Elevate how your content is discovered.</p>
          </div>
          <div className="box">
            <div className="innerBox">
              <h1>Youtube</h1>
              <div className="innerRow">
                <img loading="lazy" src={Youtube} alt="" />
                <input type="url" placeholder='Enter your Youtube Link' name='youtube' value={youtube} onChange={setTxtRecord} />
              </div>
              <div className="btns">
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text"></div>
          <div className="box">
            <div className="innerBox">
              <h1>Apple podcast</h1>
              <div className="innerRow">
                <img loading="lazy" src={Applepodcast} alt="" />
                <input type="url" placeholder='Enter your Apple podcast Link' name='apple' value={apple} onChange={setTxtRecord} />
              </div>
              <div className="btns">
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text"></div>
          <div className="box">
            <div className="innerBox">
              <h1>Tiktok</h1>
              <div className="innerRow">
                <img loading="lazy" src={Tiktok} alt="" />
                <input type="url" placeholder='Enter your Tiktok Link' name='tiktok' value={tiktok} onChange={setTxtRecord} />
              </div>
              <div className="btns">
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text"></div>
          <div className="box">
            <div className="innerBox">
              <h1>Spotify</h1>
              <div className="innerRow">
                <img loading="lazy" src={Spotify} alt="" />
                <input type="url" placeholder='Enter your Spotify Link' name='spotify' value={spotify} onChange={setTxtRecord} />
              </div>
              <div className="btns">
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text"></div>
          <div className="box">
            <div className="innerBox">
              <h1>Twitch</h1>
              <div className="innerRow">
                <img loading="lazy" src={Twitch} alt="" />
                <input type="text" placeholder='Enter your Twitch username' name='twitch' value={twitch} onChange={setTxtRecord} />
              </div>
              <div className="btns">
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text"></div>
          <div className="box">
            <div className="innerBox">
              <h1>Facebook Media</h1>
              <div className="innerRow">
                <img loading="lazy" src={Facebook} alt="" />
                <input type="url" placeholder='Enter your Facebook Media Link' name='facebook' value={facebook} onChange={setTxtRecord} />
              </div>
              <div className="btns">
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text">
          </div>
          <div className="box">
            <a className='preview'>Preview</a>
            <button className='publish'> <BsArrowRightShort className='icon' />Publish</button>
          </div>
        </div>
      </form>
      {showPublishPopUp
        &&
        <PublishPage setGasEnable={setGasEnable} gasEnable={gasEnable} redirect={publishSocials} setShowPublishPopUp={setShowPublishPopUp} loading={loading} />
      }
     {success
        &&
        <SuccessPopUp ens={ens} redirectUrl={`https://${ens}.limo`} setSuccess={setSuccess} />
      }
    </main>
  )
}

export default MainBody

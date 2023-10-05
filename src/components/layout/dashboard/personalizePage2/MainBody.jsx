import React, { useEffect, useState } from 'react'
import { BiArrowBack, BiCalendar } from "react-icons/bi";
import { PiTrashLight } from "react-icons/pi";
import { BsArrowRightShort, BsArrowLeft } from "react-icons/bs";
import ensGroup1 from "../../../../assets/images/personalize.svg"
import Caret from "../../../../assets/images/Caret up.svg"
import Twitter from "../../../../assets/images/twitter.svg"
import Discord from "../../../../assets/images/Discord.svg"
import Telegram from "../../../../assets/images/Telegram.svg"
import Github from "../../../../assets/images/Github.svg"
import Reddit from "../../../../assets/images/reddit.svg"
import Tiktok from "../../../../assets/images/Tiktok.svg"
import { useParams } from 'react-router-dom';
import { setSidebarState } from '../../../../redux/ensStore';
import { useDispatch } from 'react-redux';
import { setTextAbi } from '../../../utils/constants';
import { ethers } from 'ethers';
import axios from 'axios';
import SuccessPopUp from '../../../pages/SuccessPopup';
function MainBody() {
  const dispatch = useDispatch();
  const { ens } = useParams();
  const [dp, setDp] = useState(null);
  const [record, setRecord] = useState(null);
  const [success, setSuccess] = useState(false);
  const [formTxt, setFormTxt] = useState({
    ens: ens,
    avatar: "",
    bio: "",
    twitter: "",
    discord: "",
    telegram: "",
    github: "",
    reddit: "",
    tiktok: ""
  })
  const { avatar, bio, twitter, discord, telegram, github, reddit, tiktok } = formTxt;
  const togglesideBarFunc = () => {
    dispatch(setSidebarState(true));
  }
  const goBackFunc = (e) => {
    e.preventDefault();
    history.back();
  }

  const setTxtRecord = (e) => {
    setFormTxt({ ...formTxt, [e.target.name]: e.target.value })
  }
  const emptyTxt = (e) => {
    const key = e.target.getAttribute("data-txtrecord")
    setFormTxt({ ...formTxt, [key]: "" })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (avatar !== "" || bio !== "" || twitter !== "" || discord !== "" || telegram !== "" || github !== "" || reddit !== "" || tiktok !== "") {
        const nonEmptyFields = {};

        for (const key in formTxt) {
          if (formTxt.hasOwnProperty(key) && formTxt[key] !== "") {
            if (key === "avatar") {
              nonEmptyFields[key] = "https://avatar-twitter-cv4s4om35q-uc.a.run.app/?user=" + formTxt[key];
            } else {
              nonEmptyFields[key] = formTxt[key];
            }
          }
        }
        const res = await axios.post("https://us-central1-matic-services.cloudfunctions.net/saverecords", nonEmptyFields);
        setSuccess(true);
        setFormTxt({
          ens: ens,
          avatar: "",
          bio: "",
          twitter: "",
          discord: "",
          telegram: "",
          github: "",
          reddit: "",
          tiktok: ""
        })
      }else{
        // console.log("Dd");
      }
    } catch (error) {
      console.log(error);
      setSuccess(false);
    }
  }

  // useEffect(() => {
  //   console.log(ens);
  // }, [ens])
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
              <img loading="lazy" src={ensGroup1} alt="" />
              <span>
                ENS Profile
              </span>
            </div>
          </ul>
        </div>
        <div className="text">
          <h1>
            Personalize your ENS Profile
          </h1>
          
        </div>
      </div>
      <form className="child" onSubmit={onSubmit}>
        <div className="row">
          <div className="text">
            <h1>Profile Picture</h1>
            <p>Link your twitter avatar to your ENS Domain.</p>
          </div>
          <div className="box tweet">
            <div className="innerBox">
              <h1>Twitter Avatar</h1>
              <div className="innerRow">
                <img loading="lazy" src={Twitter} alt="" />
                <input type="text" onChange={setTxtRecord} placeholder='Enter your Twitter username' name='avatar' value={avatar} />
              </div>
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text">
            <h1>Profile Bio</h1>
            <p>Describe yourself. Write a short bio.</p>
          </div>
          <div className="box">
            <div className="innerBox">
              <div className="innerRow">
                <textarea onChange={setTxtRecord} placeholder='Short bio...' name='bio' value={bio}></textarea>
              </div>
              <p>500 characters</p>
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text">
            <h1>Add Your Socials </h1>
            <p>Enhance your online presence: Link your social media accounts effortlessly. Connect with friends and followers across platdivs.</p>
          </div>
          <div className="box">
            <div className="innerBox">
              <h1>Twitter</h1>
              <div className="innerRow">
                <img loading="lazy" src={Twitter} alt="" />
                <input type="text" onChange={setTxtRecord} placeholder='Enter your Twitter username' name='twitter' value={twitter} />
                <PiTrashLight className='icon' data-txtrecord="twitter" onClick={emptyTxt} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text">
          </div>
          <div className="box">
            <div className="innerBox">
              <h1>Discord</h1>
              <div className="innerRow">
                <img loading="lazy" src={Discord} alt="" />
                <input type="text" onChange={setTxtRecord} placeholder='Enter your Discord username' name='discord' value={discord} />
                <PiTrashLight className='icon' data-txtrecord="discord" onClick={emptyTxt} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text">
          </div>
          <div className="box">
            <div className="innerBox">
              <h1>Telegram</h1>
              <div className="innerRow">
                <img loading="lazy" src={Telegram} alt="" />
                <input type="text" onChange={setTxtRecord} placeholder='Enter your Telegram username' name='telegram' value={telegram} />
                <PiTrashLight className='icon' data-txtrecord="telegram" onClick={emptyTxt} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text">
          </div>
          <div className="box">
            <div className="innerBox">
              <h1>Github</h1>
              <div className="innerRow">
                <img loading="lazy" src={Github} alt="" />
                <input type="text" onChange={setTxtRecord} placeholder='Enter your Github username' name='github' value={github} />
                <PiTrashLight className='icon' data-txtrecord="github" onClick={emptyTxt} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text">
          </div>
          <div className="box">
            <div className="innerBox">
              <h1>Reddit</h1>
              <div className="innerRow">
                <img loading="lazy" src={Reddit} alt="" />
                <input type="text" onChange={setTxtRecord} placeholder='Enter your Reddit username' name='reddit' value={reddit} />
                <PiTrashLight className='icon' data-txtrecord="reddit" onClick={emptyTxt} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text">
          </div>
          <div className="box">
            <div className="innerBox">
              <h1>Tiktok</h1>
              <div className="innerRow">
                <img loading="lazy" src={Tiktok} alt="" />
                <input type="text" onChange={setTxtRecord} placeholder='Enter your Tiktok username' name='tiktok' value={tiktok} />
                <PiTrashLight className='icon' data-txtrecord="tiktok" onClick={emptyTxt} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text">
          </div>
          <div className="box">
            <button className='preview'>Preview</button>
            <button className='publish'> <BsArrowRightShort className='icon' />Publish</button>
          </div>
        </div>
      </form>
      {success
        &&
        <SuccessPopUp ens={ens} redirectUrl={`https://${ens}.limo`} setSuccess={setSuccess} />
      }
    </main>
  )
}

export default MainBody

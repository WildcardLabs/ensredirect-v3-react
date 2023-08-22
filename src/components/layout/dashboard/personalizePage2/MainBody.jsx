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
function MainBody() {
  const dispatch = useDispatch();
  const { ens } = useParams();
  const [dp, setDp] = useState(null);
  const [record, setRecord] = useState(null);
  const [success, setSuccess] = useState(false);
  const [formtTxt, setFormTxt] = useState({
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
  const { avatar, bio, twitter, discord, telegram, github, reddit, tiktok } = formtTxt;
  const fetchEnsRecords = async () => {
    try {
      const ensTextRecord = await axios.get(`https://us-central1-matic-services.cloudfunctions.net/textrecords?ens=${ens}`)
      setRecord(ensTextRecord?.data);
      setDp(ensTextRecord?.data.avatar);
    } catch (error) {
      console.log(error);
    }
  }

  const togglesideBarFunc = () => {
    dispatch(setSidebarState(true));
  }
  const goBackFunc = (e) => {
    e.preventDefault();
    history.back();
  }

  const setTxtRecord = (e) => {
    setFormTxt({ ...formtTxt, [e.target.name]: e.target.value })
  }
  const emptyTxt = (e) => {
    const key = e.target.getAttribute("data-txtRecord")
    setFormTxt({ ...formtTxt, [key]: "" })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://us-central1-matic-services.cloudfunctions.net/saverecords", formtTxt);
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
      // console.log("vccvvccv");
      // const iface = new ethers.utils.Interface(setTextAbi);
      // const node = new ethers.utils.namehash("vinchbat.eth");
      // console.log(node);
    } catch (error) {
      console.log(error);
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
          <img src={dp ? dp : "/dp.png"} alt="dp" />
          <img src={Caret} alt="caret up" />
        </div>
      </div>
      <div className="banner">
        <div className="head">
          <ul>
            <li>
              <BiArrowBack className="icon" />
              <span>Back</span>
            </li>
            <div className="ensBtn">
              <img src={ensGroup1} alt="" />
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
          <p>
            <BiCalendar className='icon' />
            <span>
              Onchain since July 15, 2023
            </span>
          </p>
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
                <img src={Twitter} alt="" />
                <input type="text" onChange={setTxtRecord} placeholder='Enter your Twitter username' name='avatar' value={avatar} />
              </div>
              <div className="btns">
                <button>save</button>
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
              <div className="btns">
                <div className='clear' data-txtRecord="bio" onClick={emptyTxt}>clear</div>
                <button>save</button>
              </div>
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
                <img src={Twitter} alt="" />
                <input type="text" onChange={setTxtRecord} placeholder='Enter your Twitter username' name='twitter' value={twitter} />
                <PiTrashLight className='icon' data-txtRecord="twitter" onClick={emptyTxt} />
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
                <img src={Discord} alt="" />
                <input type="text" onChange={setTxtRecord} placeholder='Enter your Discord username' name='discord' value={discord} />
                <PiTrashLight className='icon' data-txtRecord="discord" onClick={emptyTxt} />
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
                <img src={Telegram} alt="" />
                <input type="text" onChange={setTxtRecord} placeholder='Enter your Telegram username' name='telegram' value={telegram} />
                <PiTrashLight className='icon' data-txtRecord="telegram" onClick={emptyTxt} />
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
                <img src={Github} alt="" />
                <input type="text" onChange={setTxtRecord} placeholder='Enter your Github username' name='github' value={github} />
                <PiTrashLight className='icon' data-txtRecord="github" onClick={emptyTxt} />
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
                <img src={Reddit} alt="" />
                <input type="text" onChange={setTxtRecord} placeholder='Enter your Reddit username' name='reddit' value={reddit} />
                <PiTrashLight className='icon' data-txtRecord="reddit" onClick={emptyTxt} />
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
                <img src={Tiktok} alt="" />
                <input type="text" onChange={setTxtRecord} placeholder='Enter your Tiktok username' name='tiktok' value={tiktok} />
                <PiTrashLight className='icon' data-txtRecord="tiktok" onClick={emptyTxt} />
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
    </main>
  )
}

export default MainBody
import React, { useEffect, useState } from 'react'
import { BiArrowBack, BiCalendar } from "react-icons/bi";
import { PiTrashLight } from "react-icons/pi";
import { BsArrowRightShort,BsArrowLeft } from "react-icons/bs";
import ensGroup1 from "../../../../assets/images/personalize.svg"
import Caret from "../../../../assets/images/Caret up.svg"
import twitter from "../../../../assets/images/twitter.svg"
import discord from "../../../../assets/images/Discord.svg"
import Telegram from "../../../../assets/images/Telegram.svg"
import Github from "../../../../assets/images/Github.svg"
import Reddit from "../../../../assets/images/reddit.svg"
import Tiktok from "../../../../assets/images/Tiktok.svg"
import { useParams } from 'react-router-dom';
import { setSidebarState } from '../../../../redux/ensStore';
import { useDispatch } from 'react-redux';
function MainBody() {
  const dispatch = useDispatch();
  const { ens } = useParams();
  const [dp, setDp] = useState(null);
  const [record, setRecord] = useState(null);
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
  // useEffect(() => {
  //   console.log(ens);
  // }, [ens])
  return (
    <main>
      <div className="mobilehead">
        <a href="/" onClick={goBackFunc}><BsArrowLeft/> Back</a>
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
      <form className="child">
        <div className="row">
          <div className="text">
            <h1>Profile Picture</h1>
            <p>Link your twitter avatar to your ENS Domain.</p>
          </div>
          <div className="box tweet">
            <div className="innerBox">
              <h1>Twitter Avatar</h1>
              <div className="innerRow">
                <img src={twitter} alt="" />
                <input type="text" placeholder='Enter your Twitter username' />
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
                <textarea name="" id="" placeholder='Short bio...' ></textarea>
              </div>
              <p>500 characters</p>
              <div className="btns">
                <div className='clear'>clear</div>
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
                <img src={twitter} alt="" />
                <input type="text" placeholder='Enter your Twitter username' />
                <PiTrashLight className='icon' />
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
                <img src={discord} alt="" />
                <input type="text" placeholder='Enter your Discord username' />
                <PiTrashLight className='icon' />
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
                <input type="text" placeholder='Enter your Telegram username' />
                <PiTrashLight className='icon' />
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
                <input type="text" placeholder='Enter your Github username' />
                <PiTrashLight className='icon' />
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
                <input type="text" placeholder='Enter your Reddit username' />
                <PiTrashLight className='icon' />
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
                <input type="text" placeholder='Enter your Tiktok username' />
                <PiTrashLight className='icon' />
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
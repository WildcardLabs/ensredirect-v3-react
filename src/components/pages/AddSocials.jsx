import React, { useEffect, useState } from 'react'
import "../../assets/css/addSocials.css"
import { BiArrowBack } from "react-icons/bi";
import { PiTrashLight } from "react-icons/pi";
import twitter from "../../assets/images/twitter.svg"
// import discord from "../../assets/images/discord.svg"
import Telegram from "../../assets/images/Telegram.svg"
import Github from "../../assets/images/Github.svg"
import Reddit from "../../assets/images/Reddit.svg"
import Tiktok from "../../assets/images/Tiktok.svg"
import { Link, useNavigate, useParams } from 'react-router-dom';
function AddSocials() {
  const [userEns, setUserEns] = useState(null)
  const { ens } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    setUserEns(ens);
  }, []);

  const goBack = (e) => {
    e.preventDefault();
    // history.back();
    navigate(-1)
  }

  return (
    <div className="addSocials">
      <div className="head">
        <Link to="" onClick={goBack}>
          <BiArrowBack className='icon' /> <span>Back</span>
        </Link>
      </div>
      <form action="" className='child'>
        <div className="row">
          <h1>Profile Picture</h1>
          <div className="innerBox">
            <h1>Twitter Avatar</h1>
            <div className="innerRow">
              <img src={twitter} alt="" />
              <input type="url" placeholder='Enter your Twitter username' />
            </div>
            <div className="btns">
              <button>Save</button>
            </div>
          </div>
        </div>
        <div className="row">
          <h1>Profile Picture</h1>
          <div className="innerBox">
            <div className="innerRow">
              <textarea name="" id="" maxLength={500} placeholder='Short bio...' ></textarea>
            </div>
            <p>500 characters</p>
            <div className="btns">
              <div className='clear'>clear</div>
              <button>save</button>
            </div>
          </div>
        </div>
        <div className="row">
          <h1>Add Your Socials</h1>
          <div className="innerBox">
            <h1>Twitter</h1>
            <div className="innerRow">
              <img src={twitter} alt="" />
              <input type="text" placeholder='Enter your Twitter username' />
              <PiTrashLight className='icon' />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="innerBox">
            <h1>Discord</h1>
            <div className="innerRow">
              <img src={twitter} alt="" />
              <input type="text" placeholder='Enter your Discord username' />
              <PiTrashLight className='icon' />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="innerBox">
            <h1>Telegram</h1>
            <div className="innerRow">
              <img src={Telegram} alt="" />
              <input type="text" placeholder='Enter your Telegram username' />
              <PiTrashLight className='icon' />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="innerBox">
            <h1>Github</h1>
            <div className="innerRow">
              <img src={Github} alt="" />
              <input type="text" placeholder='Enter your Github username' />
              <PiTrashLight className='icon' />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="innerBox">
            <h1>Reddit</h1>
            <div className="innerRow">
              <img src={Reddit} alt="" />
              <input type="text" placeholder='Enter your Reddit username' />
              <PiTrashLight className='icon' />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="innerBox">
            <h1>Tiktok</h1>
            <div className="innerRow">
              <img src={Tiktok} alt="" />
              <input type="text" placeholder='Enter your Tiktok username' />
              <PiTrashLight className='icon' />
            </div>
          </div>
        </div>
        <div className="row">
          <button className='submit'>save</button>
        </div>
      </form>
    </div>
  )
}


export default AddSocials
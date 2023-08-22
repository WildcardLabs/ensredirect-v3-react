import React, { useEffect, useState } from 'react'
import "../../assets/css/addSocials.css"
import { BiArrowBack } from "react-icons/bi";
import { PiTrashLight } from "react-icons/pi";
import Twitter from "../../assets/images/twitter.svg"
import Discord from "../../assets/images/discord.svg"
import Telegram from "../../assets/images/Telegram.svg"
import Github from "../../assets/images/Github.svg"
import Reddit from "../../assets/images/reddit.svg"
import Tiktok from "../../assets/images/Tiktok.svg"
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function AddSocials() {
  const [userEns, setUserEns] = useState(null)
  const { ens } = useParams();
  const navigate = useNavigate();
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
  useEffect(() => {
    setUserEns(ens);
  }, []);

  const goBack = (e) => {
    e.preventDefault();
    // history.back();
    navigate(-1)
  }

  const settxtrecord = (e) => {
    setFormTxt({ ...formtTxt, [e.target.name]: e.target.value })
  }
  const emptyTxt = (e) => {
    const key = e.target.getAttribute("data-txtrecord")
    setFormTxt({ ...formtTxt, [key]: "" })
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://us-central1-matic-services.cloudfunctions.net/saverecords", formtTxt);
      // setSuccess(true);
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
      });
      navigate(-1)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="addSocials">
      <div className="head">
        <Link to="" onClick={goBack}>
          <BiArrowBack className='icon' /> <span>Back</span>
        </Link>
      </div>
      <form action="" className='child' onSubmit={onSubmit}>
        <div className="row">
          <h1>Profile Picture</h1>
          <div className="innerBox">
            <h1>Twitter Avatar</h1>
            <div className="innerRow">
              <img src={Twitter} alt="" />
              <input type="text" placeholder='Enter your Twitter username' name={"avatar"} value={avatar} onChange={settxtrecord} />
            </div>
            <div className="btns">
              <button>Save</button>
            </div>
          </div>
        </div>
        <div className="row">
          <h1>Profile Bio</h1>
          <div className="innerBox">
            <div className="innerRow">
              <textarea maxLength={500} placeholder='Short bio...' name={"bio"} value={bio} onChange={settxtrecord}></textarea>
            </div>
            <p>500 characters</p>
            <div className="btns">
              <div className='clear' data-txtrecord="bio" onClick={emptyTxt}>clear</div>
              <button>save</button>
            </div>
          </div>
        </div>
        <div className="row">
          <h1>Add Your Socials</h1>
          <div className="innerBox">
            <h1>Twitter</h1>
            <div className="innerRow">
              <img src={Twitter} alt="" />
              <input type="text" placeholder='Enter your Twitter username' name={"twitter"} value={twitter} onChange={settxtrecord} />
              <PiTrashLight className='icon' data-txtrecord="twitter" onClick={emptyTxt} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="innerBox">
            <h1>Discord</h1>
            <div className="innerRow">
              <img src={Discord} alt="" />
              <input type="text" placeholder='Enter your Discord username' name={"discord"} value={discord} onChange={settxtrecord} />
              <PiTrashLight className='icon' data-txtrecord="discord" onClick={emptyTxt} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="innerBox">
            <h1>Telegram</h1>
            <div className="innerRow">
              <img src={Telegram} alt="" />
              <input type="text" placeholder='Enter your Telegram username' name={"telegram"} value={telegram} onChange={settxtrecord} />
              <PiTrashLight className='icon' data-txtrecord="telegram" onClick={emptyTxt} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="innerBox">
            <h1>Github</h1>
            <div className="innerRow">
              <img src={Github} alt="" />
              <input type="text" placeholder='Enter your Github username' name={"github"} value={github} onChange={settxtrecord} />
              <PiTrashLight className='icon' data-txtrecord="github" onClick={emptyTxt} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="innerBox">
            <h1>Reddit</h1>
            <div className="innerRow">
              <img src={Reddit} alt="" />
              <input type="text" placeholder='Enter your Reddit username' name={"reddit"} value={reddit} onChange={settxtrecord} />
              <PiTrashLight className='icon' data-txtrecord="reddit" onClick={emptyTxt} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="innerBox">
            <h1>Tiktok</h1>
            <div className="innerRow">
              <img src={Tiktok} alt="" />
              <input type="text" placeholder='Enter your Tiktok username' name={"tiktok"} value={tiktok} onChange={settxtrecord} />
              <PiTrashLight className='icon' data-txtrecord="tiktok" onClick={emptyTxt} />
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
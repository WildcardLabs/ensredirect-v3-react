import React, { useEffect, useState } from 'react'
import "../../assets/css/addSocials.css"
import { BiArrowBack } from "react-icons/bi";
import { PiTrashLight } from "react-icons/pi";
import Twitter from "../../assets/images/twitter.svg"
import Discord from "../../assets/images/Discord.svg"
import Telegram from "../../assets/images/Telegram.svg"
import Github from "../../assets/images/Github.svg"
import Reddit from "../../assets/images/reddit.svg"
import Tiktok from "../../assets/images/Tiktok.svg"
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import SuccessPopUp from './SuccessPopup';
function AddSocials() {
  const [userEns, setUserEns] = useState(null)
  const { ens } = useParams();
  const navigate = useNavigate();
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
  useEffect(() => {
    setUserEns(ens);
  }, []);

  const goBack = (e) => {
    e.preventDefault();
    // history.back();
    navigate(-1)
  }

  const settxtrecord = (e) => {
    setFormTxt({ ...formTxt, [e.target.name]: e.target.value })
  }
  const emptyTxt = (e) => {
    const key = e.target.getAttribute("data-txtrecord")
    setFormTxt({ ...formTxt, [key]: "" })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const nonEmptyFields = {};

      for (const key in formTxt) {
        if (formTxt.hasOwnProperty(key) && formTxt[key] !== "") {
          nonEmptyFields[key] = formTxt[key];
        }
      }
      setFormTxt(nonEmptyFields);
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
      });
    } catch (error) {
      console.log(error);
      setSuccess(false);
    }
  }
  // useEffect(() => {
  //   if (success) {
  //     setTimeout(() => {
  //       navigate(-1);
  //     }, 5000);
  //   }
  // }, [success])

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
              <img loading="lazy" src={Twitter} alt="" />
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
              <img loading="lazy" src={Twitter} alt="" />
              <input type="text" placeholder='Enter your Twitter username' name={"twitter"} value={twitter} onChange={settxtrecord} />
              <PiTrashLight className='icon' data-txtrecord="twitter" onClick={emptyTxt} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="innerBox">
            <h1>Discord</h1>
            <div className="innerRow">
              <img loading="lazy" src={Discord} alt="" />
              <input type="text" placeholder='Enter your Discord username' name={"discord"} value={discord} onChange={settxtrecord} />
              <PiTrashLight className='icon' data-txtrecord="discord" onClick={emptyTxt} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="innerBox">
            <h1>Telegram</h1>
            <div className="innerRow">
              <img loading="lazy" src={Telegram} alt="" />
              <input type="text" placeholder='Enter your Telegram username' name={"telegram"} value={telegram} onChange={settxtrecord} />
              <PiTrashLight className='icon' data-txtrecord="telegram" onClick={emptyTxt} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="innerBox">
            <h1>Github</h1>
            <div className="innerRow">
              <img loading="lazy" src={Github} alt="" />
              <input type="text" placeholder='Enter your Github username' name={"github"} value={github} onChange={settxtrecord} />
              <PiTrashLight className='icon' data-txtrecord="github" onClick={emptyTxt} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="innerBox">
            <h1>Reddit</h1>
            <div className="innerRow">
              <img loading="lazy" src={Reddit} alt="" />
              <input type="text" placeholder='Enter your Reddit username' name={"reddit"} value={reddit} onChange={settxtrecord} />
              <PiTrashLight className='icon' data-txtrecord="reddit" onClick={emptyTxt} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="innerBox">
            <h1>Tiktok</h1>
            <div className="innerRow">
              <img loading="lazy" src={Tiktok} alt="" />
              <input type="text" placeholder='Enter your Tiktok username' name={"tiktok"} value={tiktok} onChange={settxtrecord} />
              <PiTrashLight className='icon' data-txtrecord="tiktok" onClick={emptyTxt} />
            </div>
          </div>
        </div>
        <div className="row">
          <button className='submit'>save</button>
        </div>
      </form>
      {success
        &&
        <SuccessPopUp ens={ens} redirectUrl={`https://${ens}.limo`} setSuccess={setSuccess} />
      }
    </div>
  )
}


export default AddSocials
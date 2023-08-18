import React, { useEffect, useState } from 'react'
import { BiArrowBack, BiCalendar } from "react-icons/bi";
import { PiTrashLight } from "react-icons/pi";
import { BsArrowRightShort } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import mediaHubGroup1 from "../../../../assets/images/mediaHubGroup1.svg"
import Youtube from "../../../../assets/images/Youtube.svg"
import Applepodcast from "../../../../assets/images/Applepodcast.svg"
import Tiktok from "../../../../assets/images/Tiktok.svg"
import Spotify from "../../../../assets/images/Spotify.svg"
import Twitch from "../../../../assets/images/Twitch.svg"
import Facebook from "../../../../assets/images/Facebook.svg"
import socialBanner from "../../../../assets/images/Rectangle 4201.png"
import { Link, useParams } from 'react-router-dom';
function MainBody() {
  const [userEns, setUserEns] = useState(null)
  const { ens } = useParams();
  useEffect(() => {
    setUserEns(ens);
  }, []);
  return (
    <main>
      <div className="banner">
        <div className="head">
          <ul>
            <li>
              <BiArrowBack className="icon" />
              <span>Back</span>
            </li>
            <div className="ensBtn">
              <img src={mediaHubGroup1} alt="" />
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
      <form className="child">
        <div className="socialRow">
          <img src={socialBanner} alt="" />
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
                <img src={Youtube} alt="" />
                <input type="url" placeholder='Enter your Youtube Link' />
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
              <h1>Applepodcast</h1>
              <div className="innerRow">
                <img src={Applepodcast} alt="" />
                <input type="url" placeholder='Enter your Applepodcast Link' />
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
                <img src={Tiktok} alt="" />
                <input type="url" placeholder='Enter your Tiktok Link' />
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
                <img src={Spotify} alt="" />
                <input type="url" placeholder='Enter your Spotify Link' />
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
                <img src={Twitch} alt="" />
                <input type="text" placeholder='Enter your Twitch username' />
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
                <img src={Facebook} alt="" />
                <input type="url" placeholder='Enter your Facebook Media Link' />
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
            <button className='preview'>Preview</button>
            <button className='publish'> <BsArrowRightShort className='icon' />Publish</button>
          </div>
        </div>
      </form>
    </main>
  )
}

export default MainBody
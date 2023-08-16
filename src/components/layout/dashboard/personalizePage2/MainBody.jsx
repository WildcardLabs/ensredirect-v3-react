import React, { useEffect, useState } from 'react'
import { BiHomeAlt, BiCalendar } from "react-icons/bi";
import { PiTrashLight } from "react-icons/pi";
import { BsArrowRightShort } from "react-icons/bs";
import ensGroup1 from "../../../../assets/images/personalize.svg"
import twitter from "../../../../assets/images/twitter.svg"
import discord from "../../../../assets/images/discord.svg"
import Telegram from "../../../../assets/images/Telegram.svg"
import Github from "../../../../assets/images/Github.svg"
import Reddit from "../../../../assets/images/Reddit.svg"
import Tiktok from "../../../../assets/images/Tiktok.svg"
function MainBody() {
  return (
    <main>
      <div className="banner">
        <div className="head">
          <ul>
            <li>
              <BiHomeAlt className="icon" />
              <span>Home</span>
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
          <div className="box">
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
                <PiTrashLight className='icon'/>
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
                <PiTrashLight className='icon'/>
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
                <PiTrashLight className='icon'/>
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
                <PiTrashLight className='icon'/>
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
                <PiTrashLight className='icon'/>
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
                <PiTrashLight className='icon'/>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text">
          </div>
          <div className="box">
            <button className='preview'>Preview</button>
            <button className='publish'> <BsArrowRightShort className='icon'/>Publish</button>
          </div>
        </div>
      </form>
    </main>
  )
}

export default MainBody
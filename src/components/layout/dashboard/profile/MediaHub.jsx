import React from 'react'
import { FaClock } from 'react-icons/fa'
import youtube from "../../../../assets/images/Group 9.svg"
import apple from "../../../../assets/images/Group 10.svg"
import tiktok from "../../../../assets/images/Group 11.svg"
import spotify from "../../../../assets/images/Group 12.svg"
import Facebook from "../../../../assets/images/Group 13.svg"
import Twitch from "../../../../assets/images/Group 14.svg"
function MediaHub() {
    return (
        <div className='mediahub'>
            <a href='#' className="box" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1691158429271-05e8dbc80daf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80)` }}>
                <div className="boxwrap">
                    <h2 style={{ background: "#F70101" }}>Youtube</h2>
                    <img loading="lazy" src="/Play.svg" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Lacus cursus...
                    </p>
                    <div className="innerbox">
                        <h4>
                            <span> <FaClock /> 20:15</span>
                            <span>Jhone Deo</span>
                        </h4>
                        <img loading="lazy" src={youtube} alt="" />
                    </div>
                </div>
            </a>
            <a href='#' className="box" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1691851004542-adebba3310d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1447&q=80)` }}>
                <div className="boxwrap">
                    <h2 style={{ background: "#DB4AF1" }}>Applepodcast</h2>
                    <img loading="lazy" src="/Play.svg" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Lacus cursus...
                    </p>
                    <div className="innerbox">
                        <h4>
                            <span> <FaClock /> 20:15</span>
                            <span>Jhone Deo</span>
                        </h4>
                        <img loading="lazy" src={apple} alt="" />
                    </div>
                </div>
            </a>
            <a href='#' className="box" style={{ backgroundImage: `url(https://plus.unsplash.com/premium_photo-1684058279462-6dc1290f0fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80)` }}>
                <div className="boxwrap">
                    <h2 style={{ background: "rgba(67, 67, 67, 0.87)" }}>Tiktok</h2>
                    <img loading="lazy" src="/Play.svg" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Lacus cursus...
                    </p>
                    <div className="innerbox">
                        <h4>
                            <span> <FaClock /> 20:15</span>
                            <span>Jhone Deo</span>
                        </h4>
                        <img loading="lazy" src={tiktok} alt="" />
                    </div>
                </div>
            </a>
            <a href='#' className="box" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1691851004542-adebba3310d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1447&q=80)` }}>
                <div className="boxwrap">
                    <h2 style={{ background: " linear-gradient(336deg, #00D95F 0%, #10BC4C 100%)" }}>Spotify</h2>
                    <img loading="lazy" src="/Play.svg" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Lacus cursus...
                    </p>
                    <div className="innerbox">
                        <h4>
                            <span> <FaClock /> 20:15</span>
                            <span>Jhone Deo</span>
                        </h4>
                        <img loading="lazy" src={spotify} alt="" />
                    </div>
                </div>
            </a>
            <a href='#' className="box" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1692237848531-bb798f6367bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80)` }}>
                <div className="boxwrap">
                    <h2 style={{ background: "linear-gradient(0deg, #0062E0 0%, #19AFFF 100%)" }}>Facebook</h2>
                    <img loading="lazy" src="/Play.svg" alt="" />
                    <p>
                        Amet et commodo
                    </p>
                    <div className="innerbox">
                        <h4>
                            <span> <FaClock /> 20:15</span>
                            <span>Jhone Deo</span>
                        </h4>
                        <img loading="lazy" src={Facebook} alt="" />
                    </div>
                </div>
            </a>
            <a href='#' className="box" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1691851004542-adebba3310d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1447&q=80)` }}>
                <div className="boxwrap">
                    <h2 style={{ background: "linear-gradient(336deg, #732ADF 0%, #9146FF 100%)" }}>Twitch</h2>
                    <img loading="lazy" src="/Play.svg" alt="" />
                    <p>
                        How can guild.xyz help communities organize
                    </p>
                    <div className="innerbox">
                        <h4>
                            <span> <FaClock /> 20:15</span>
                            <span>EthereumDenver</span>
                        </h4>
                        <img loading="lazy" src={Twitch} alt="" />
                    </div>
                </div>
            </a>
        </div>
    )
}

export default MediaHub
import React from 'react'
import "../../assets/css/success.css"
import { FaTimes } from "react-icons/fa"
import { BsInfo } from "react-icons/bs"

function ProfilePublished() {
    return (

        <section className="success">
            <div className="box">
                <div className="head">
                    <h1>Profile Published</h1>
                    <FaTimes className='icon' />
                </div>
                <div className="child">
                    <p>To test profile by appending “.limo” on any browser e.g. ensredirect.eth.limo</p>
                    <div className="info">
                        <div className="infoIcon">
                            <BsInfo />
                        </div>
                        <p>Resolving the domain might take a few minutes, 1st time only</p>
                    </div>
                    <div className="tweet">
                        <h1>Tweet</h1>
                        <p>Hi! I just redirected my name via @ensredirect! hellenstans.eth now seemlessly redirects to <a href="#">https://twitter.com/hellenstans</a>. Check it out: hellenstans.eth.limo</p>
                    </div>
                    <div className="links">
                        <div className='redirect'>
                            View Profile
                        </div>
                        <div className='tweetBtn'>
                            Tweet
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfilePublished
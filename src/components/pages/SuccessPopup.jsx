import React from 'react'
import "../../assets/css/success.css"
import { FaTimes } from "react-icons/fa"
import { BsInfo } from "react-icons/bs"
function SuccessPopUp({ ens, redirectUrl, setSuccess }) {
    return (

        <section className="success">
            <div className="box">
                <div className="head">
                    <h1>Transaction Successful</h1>
                    <FaTimes className='icon' onClick={() => { setSuccess(false); }} />
                </div>
                <div className="childCont">
                    <p>Test redirect by appending “.limo” on any browser e.g. ensredirect.eth.limo</p>
                    <div className="info">
                        <div className="infoIcon">
                            <BsInfo />
                        </div>
                        <p>Resolving the domain might take a few minutes, 1st time only</p>
                    </div>
                    <div className="tweet">
                        <h1>Tweet</h1>
                        <p>Hi! I just published my web3 profile via @ensredirect.<a href="#">{redirectUrl}</a>. Check it out: {ens}.limo</p>
                    </div>
                    <div className="links">
                        <a href={`https://${ens}.limo`} target="_blank" rel="noopener noreferrer" className='redirect'>
                            Visit Profile
                        </a>
                        <a href={`https://twitter.com/intent/tweet?textHi! I just published my web3 profile via @ensredirect. Check it out: ${ens}.limo to forward it to his tweet.`} target="_blank" rel="noopener noreferrer" className='tweetBtn'>
                            Tweet
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuccessPopUp

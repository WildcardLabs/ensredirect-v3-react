import React from 'react'
import "../../assets/css/success.css"
import { FaTimes } from "react-icons/fa"
import { BsInfo } from "react-icons/bs"
function SuccessPage({ selectedEns, redirectUrl,setSuccess }) {
    return (

        <section className="success">
            <div className="box">
                <div className="head">
                    <h1>Transaction Successful</h1>
                    <FaTimes className='icon' onClick={()=>{setSuccess(false)}}/>
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
                        <p>Hi! I just redirected my name via @ensredirect! {selectedEns} now seemlessly redirects to <a href="#">{redirectUrl}</a>. Check it out: {selectedEns}.limo</p>
                    </div>
                    <div className="links">
                        <a href={`https://${selectedEns}.limo`} target="_blank" rel="noopener noreferrer" className='redirect'>
                            Test Redirect
                        </a>
                        <a href={`https://twitter.com/intent/tweet?text=Hi! I just redirected my name via @ensredirect! ${selectedEns} now seamlessly redirects to ${redirectUrl}. Check it out: ${selectedEns}.limo to forward it to his tweet.`} target="_blank" rel="noopener noreferrer" className='tweetBtn'>
                            Tweet
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuccessPage

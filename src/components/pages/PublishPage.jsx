import React, { useEffect, useState } from 'react'
import "../../assets/css/publish.css"
import { FaTimes } from "react-icons/fa"
import { BsInfo, BsArrowRightShort } from "react-icons/bs"
import { useLocation } from 'react-router-dom'
function PublishPage({ setGasEnable, gasEnable, redirect, setShowPublishPopUp, loading}) {
    const {pathname} = useLocation();
    const [redirectPage,setRedirectPage] = useState(false)
    useEffect(()=>{
        setRedirectPage(pathname.includes("ensRedirect"));
    },[])
    const handleCheckboxChange = () => {
        setGasEnable(!gasEnable);
    };
    const togglePopUp = () => {
        setShowPublishPopUp(false);
    };
    return (
        <section className="publish">
            <div className="box">
                <div className="head">
                    <h1>Publish</h1>
                    <FaTimes className='icon' onClick={togglePopUp} />
                </div>
                <div className="childCont">
                    <div className="update">
                        <h1>Gassless updates</h1>
                        <div className="text">
                            <p>Note that you will be required to pay gas fee only once for your initial transaction. All future transactions will be completely gasless and free.</p>
                            <label htmlFor="agree">
                                <input type="checkbox" name="agree" id="agree" style={{ display: "none" }} onChange={handleCheckboxChange} checked={gasEnable} />
                                <div className="btn"></div>
                            </label>
                        </div>
                    </div>
                    <div className="links">
                        <div className='close' onClick={togglePopUp}>
                            Close
                        </div>
                        <div className='publish' onClick={redirect}>
                            {
                                loading ?
                                    <div className="loader"></div>
                                    :
                                    <BsArrowRightShort className='icon' />
                            }
                            {
                                redirectPage?
                                    " Redirect"
                                    :
                                    " Publish"

                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PublishPage
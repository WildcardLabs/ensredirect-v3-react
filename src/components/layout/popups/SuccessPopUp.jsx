import React, { useEffect } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { FaCheckCircle, FaTimes } from 'react-icons/fa'

function SuccessPopUp({ setSuccess ,msg}) {
    useEffect(() => { setTimeout(() => {
        setSuccess(false);
    }, 5000); }, [])
    return (
        <div className='successpopup'>
            <div className="childcont">
                <FaTimes className='cancel' onClick={() => setSuccess(false)} />
                <FaCheckCircle className='good' />
                <h1>{msg}</h1>
                <div className="btns">
                    <a href="#">
                        <BsArrowRightShort />
                        published</a>
                </div>
            </div>
        </div>
    )
}

export default SuccessPopUp
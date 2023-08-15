import React from 'react'
import "../../assets/css/publish.css"
import { FaTimes } from "react-icons/fa"
import { BsInfo,BsArrowRightShort} from "react-icons/bs"
function PublishPage() {
  return (
    <section className="publish">
    <div className="box">
        <div className="head">
            <h1>Publish</h1>
            <FaTimes className='icon' />
        </div>
        <div className="child">
            <div className="update">
                <h1>Gassless updates</h1>
                <div className="text">
                <p>Note that you will be required to pay gas fee only once for your initial transaction. All future transactions will be completely gasless and free.</p>
                <label htmlFor="agree">
                <input type="checkbox" name="agree" id="agree" style={{display:"none"}}/>
                <div className="btn"></div>
                </label>
                </div>
            </div>
            <div className="links">
                <div className='close'>
                Close
                </div>
                <div className='publish'>
                    <BsArrowRightShort className='icon'/>
                Publish    
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default PublishPage
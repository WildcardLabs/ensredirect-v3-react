import React from 'react'
import one from "../../../assets/images/one.svg"
import two from "../../../assets/images/two.svg"
import three from "../../../assets/images/three.svg"
function CreatePopup() {
    return (
        <ul className="createPopUp">
            <li>
                <img src={one} alt="" />
                <p>Redirect Your ENS Domain</p>
            </li>
            <li>
                <img src={two} alt="" />
                <p>ENS Profile</p>
            </li>
            <li>
                <img src={three} alt="" />
                <p>Custom MediaHub</p>
            </li>
        </ul>
    )
}

export default CreatePopup
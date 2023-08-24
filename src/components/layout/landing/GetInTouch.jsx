import React from 'react'
import { Link } from 'react-router-dom'
import {BsEnvelopeFill} from "react-icons/bs"
import {FaTwitter ,FaGithub} from "react-icons/fa"
function GetInTouch() {
  return (
    <section className='getInTouch'>
        <h1>Get in touch</h1>
        <p>We love to hear from you! you can reach us at</p>
      <div className="links">
      <a href='#' target='_blank'>
            <BsEnvelopeFill/>
            team@ensredirect.xyz
        </a>
        <a href="https://twitter.com/@ensredirect" target='_blank'>
            <FaTwitter/>
            @ensredirect
        </a>
        <a href='#' target='_blank'>
            <FaGithub/>
            Github
        </a>
      </div>
    </section>
  )
}

export default GetInTouch
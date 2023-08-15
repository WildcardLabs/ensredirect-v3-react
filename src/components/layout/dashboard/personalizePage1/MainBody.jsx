import React, { useEffect, useState } from 'react'
import { BiHomeAlt, BiCalendar } from "react-icons/bi";
import ensGroup1 from "../../../../assets/images/personalize.svg"
import ensGroup2 from "../../../../assets/images/ensGroup2.svg"
import { motion } from 'framer-motion'
import listing from "../../../../assets/images/listing.svg"
import grid from "../../../../assets/images/grid.svg"
import Rectangle1 from "../../../../assets/images/Rectangle1.png"
import ensRedirectForm from "../../../../assets/images/ensRedirectForm.svg"
import { BsArrowRight } from 'react-icons/bs';
import axios from 'axios';
import { Link } from 'react-router-dom';
function MainBody() {
  const [no, setNo] = useState(0);
  const [ens, setEns] = useState([]);
  const fetchEns = async () => {
    try {
      const res = await axios.get("https://us-central1-matic-services.cloudfunctions.net/domainlist?address=0x1208a26FAa0F4AC65B42098419EB4dAA5e580AC6")
      const list = res.data;
      if (list.length > 0) {
        let i = 0
        for await (const data of list) {
          if (data.includes("eth")) {
            setNo(no => no + 1);
            setEns(ens => [...ens, data]);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchEns();
  },[])

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
      <div className="ensDomainCont">
        <div className="head">
          <div className="sec">
            <h1>My Names</h1>
            <span>{no}</span>
            <p>Select domain name to redirect to</p>
          </div>
        </div>
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className='domianGrid'>
            {
                ens.map((item, idx) => (
                    <div className="box" key={idx}>
                        <div className="innerBox">
                            <div className="cover">
                                <img src={ensGroup2} alt="" />
                            </div>
                           {
                            idx === 0 ?
                            <div className="text">
                            <h3>Primary</h3>
                          <p>{item}</p>
                          <Link to="">
                          Setup ENS Profile
                          </Link>
                          </div>
                          :
                          <div className="text">
                        <p>{item}</p>
                       
                        </div>
                           }
                        </div>
                    </div>
                ))
            }
        </motion.div>
      </div>
    </main>
  )
}

export default MainBody
import React, { useEffect, useState } from 'react'
import { BiHomeAlt, BiCalendar } from "react-icons/bi";
import mediaHubGroup1 from "../../../../assets/images/mediaHubGroup1.svg"
import ensGroup2 from "../../../../assets/images/ensGroup2.svg"
import { motion } from 'framer-motion'
import listing from "../../../../assets/images/listing.svg"
import grid from "../../../../assets/images/grid.svg"
import Rectangle1 from "../../../../assets/images/Rectangle1.png"
import ensRedirectForm from "../../../../assets/images/ensRedirectForm.svg"
import { BsArrowRight } from 'react-icons/bs';
import axios from 'axios';
import DomainGrid from './DomainGrid';
import DomainList from './DomainList';
function MainBody() {
  const [ensGrid, setEnsGrid] = useState(false)
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

  const toggleList = () => {
    setEnsGrid(false);
  }
  const toggleGrid = () => {
    setEnsGrid(true);
  }
  useEffect(() => {
    fetchEns();
  }, [])

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
              <img src={mediaHubGroup1} alt="" />
              <span>
              Custom MediaHub
              </span>
            </div>
          </ul>
        </div>
        <div className="text">
          <h1>
          Customize your MediaHub
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
          <div className="sec1">
            <img src={listing} alt="" className={!ensGrid ? "active" : ""} onClick={toggleList} />
            <img src={grid} alt="" className={ensGrid ? "active" : ""} onClick={toggleGrid} />
          </div>
        </div>
        {
          ensGrid ?
            <DomainGrid ens={ens} />
            :
            <DomainList ens={ens} />
        }
      </div>
    </main>
  )
}

export default MainBody
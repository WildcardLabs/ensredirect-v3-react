import React, { useEffect, useState } from 'react'
import { BiHomeAlt, BiCalendar } from "react-icons/bi";
import ensGroup1 from "../../../../assets/images/ensGroup1.svg"
import listing from "../../../../assets/images/listing.svg"
import grid from "../../../../assets/images/grid.svg"
import DomainList from './DomainList';
import DomainGrid from './DomainGrid';
import Rectangle1 from "../../../../assets/images/Rectangle1.png"
import ensRedirectForm from "../../../../assets/images/ensRedirectForm.svg"
import { BsArrowRight } from 'react-icons/bs';
import axios from 'axios';
import {  useSelector } from "react-redux";
function MainBody() {
  const [ensGrid, setEnsGrid] = useState(false)
  const [no, setNo] = useState(0);
  const [ens, setEns] = useState([]);
  const [selectedEns, setSelectedEns] = useState([]);
  const { owner } = useSelector((state) => state.ensStore);

  const fetchEns = async () => {
    try {
      const res = await axios.get(`https://us-central1-matic-services.cloudfunctions.net/domainlist?address=${owner}`)
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
  const setSelectedEnsFunc =(txt) =>{
    setSelectedEns(txt)
  }

  useEffect(() => {
   if (owner) {
    fetchEns();
   }
  }, [owner])

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
                Redirect Your ENS Domain
              </span>
            </div>
          </ul>
        </div>
        <div className="text">
          <h1>
            Welcome, Hellenstans.eth
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
            <DomainGrid ens={ens} setSelectedEnsFunc={setSelectedEnsFunc}/>
            :
            <DomainList ens={ens} setSelectedEnsFunc={setSelectedEnsFunc}/>
        }
        <h4>ENSRedirect</h4>
        <div className="child">
          <div className="cover">
            <img src={Rectangle1} alt="" />
          </div>
          <div className="text">
            <h3>Enter Your Website URL to Redirect to</h3>
            <p>Redirect your ENS domain to any website of your choice. Effortlessly forward your .eth to any social or professional profile, showcase your work, champion a cause or simply have fun with memes.</p>
            <form action="">
              <p>
                <img src={ensRedirectForm} alt="" />
                {selectedEns}
              </p>
              <div className="row">
                <input type="url" placeholder='Enter website url to redirect to' />
                <button>
                  <BsArrowRight />
                  Redirect
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainBody
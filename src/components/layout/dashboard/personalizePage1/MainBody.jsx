import React, { useEffect, useState } from 'react'
import { BiHomeAlt, BiCalendar } from "react-icons/bi";
import ensGroup1 from "../../../../assets/images/personalize.svg"
import ensGroup2 from "../../../../assets/images/ensGroup2.svg"
import Caret from "../../../../assets/images/Caret up.svg"
import { motion } from 'framer-motion'
import listing from "../../../../assets/images/listing.svg"
import grid from "../../../../assets/images/grid.svg"
import Rectangle1 from "../../../../assets/images/Rectangle1.png"
import ensRedirectForm from "../../../../assets/images/ensRedirectForm.svg"
import { BsArrowRight } from 'react-icons/bs';
import axios from 'axios';
import DomainGrid from './DomainGrid';
import DomainList from './DomainList';
import { useDispatch, useSelector } from 'react-redux';
import { setSidebarState } from '../../../../redux/ensStore';
import { Link } from 'react-router-dom';
function MainBody() {
  const dispatch = useDispatch();
  const [ensGrid, setEnsGrid] = useState(false)
  const [no, setNo] = useState(0);
  const [ens, setEns] = useState([]);
  const [primaryens, setPrimaryens] = useState(null);
  const [dp, setDp] = useState(null);
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
      const res2 = await axios.get(`https://api.ensideas.com/ens/resolve/${owner}`)
      const primarydata = res2.data.name ? res2.data.name : list[0];
      setPrimaryens(primarydata);
      const ensTextRecord = await axios.get(`https://us-central1-matic-services.cloudfunctions.net/textrecords?ens=${primarydata}`)
      setDp(ensTextRecord?.data.avatar);
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
  const togglesideBarFunc = () => {
    dispatch(setSidebarState(true));
  }
  useEffect(() => {
    fetchEns();
  }, [])

  return (
    <main>
      <div className="mobilehead">
        <a href="/"><img src="/logo.png" alt="" /></a>
        <div className="menu" onClick={togglesideBarFunc}>
          <img src={dp ? dp : "/dp.png"} alt="dp" />
          <img src={Caret} alt="caret up" />
        </div>
      </div>
      <div className="banner">
        <div className="head">
          <ul>
          <Link to="/">
              <BiHomeAlt className="icon" />
              <span>Home</span>
            </Link>
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
            <img loading="lazy" src={listing} alt="" className={!ensGrid ? "active" : ""} onClick={toggleList} />
            <img loading="lazy" src={grid} alt="" className={ensGrid ? "active" : ""} onClick={toggleGrid} />
          </div>
        </div>
        {
          ensGrid ?
            <DomainGrid ens={ens} primaryens={primaryens} />
            :
            <DomainList ens={ens} primaryens={primaryens} />
        }
      </div>
    </main>
  )
}

export default MainBody

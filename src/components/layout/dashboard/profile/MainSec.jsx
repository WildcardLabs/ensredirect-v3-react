import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useParams, Route, Routes } from 'react-router-dom'
import Collection from './Collection';
import MediaHub from './MediaHub';

function MainSec() {
    const [collectionPath,setCollectionPath]=useState("")
    const {ens} = useParams();
    const { pathname } = useLocation();

    useEffect(()=>{
       console.log(pathname); 
       if(!pathname.includes("mediahub")){
        setCollectionPath(pathname);
       }
    },[pathname])
    return (
        <div className="mainSec">
            <div className="header">
                <NavLink to={`/profile/${ens}/`}>Collection</NavLink>
                <NavLink to={"mediahub"}>MediaHub</NavLink>
            </div>
            <div className="child">
            <Routes>
          <Route exact path="/" element={<Collection/>}/>
          <Route exact path="/mediahub" element={<MediaHub/>}/>
        </Routes>
            </div>
        </div>
    )
}

export default MainSec
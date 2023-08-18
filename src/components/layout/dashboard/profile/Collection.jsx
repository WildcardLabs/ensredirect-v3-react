import React, { useState, useEffect } from 'react'
import ensGroup2 from "../../../../assets/images/ensGroup2.svg"
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Collection() {
    const { ens } = useParams();
    const [secState, setSecState] = useState(true);
    const [arrEns, setArrEns] = useState([]);
    const [counts] = useState(["Bored Ape Yacht Club #8817", "Bored Ape Yacht Club #8817", "Bored Ape Yacht Club #8817", "Bored Ape Yacht Club #8817", "Bored Ape Yacht Club #8817", "Bored Ape Yacht Club #8817", "Bored Ape Yacht Club #8817", "Bored Ape Yacht Club #8817"]);

    const fetchEns = async () => {
        try {
            const res = await axios.get("https://us-central1-matic-services.cloudfunctions.net/domainlist?address=0x1208a26FAa0F4AC65B42098419EB4dAA5e580AC6")
            const list = res.data;
            if (list.length > 0) {
                let i = 0
                for await (const data of list) {
                    if (data.includes("eth")) {
                        setArrEns(arrEns => [...arrEns, data]);
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchEns();
    }, [])

    return (
        <div className='collection'>
            <div className="head">
                <div className={secState ? "btn active" : "btn"}
                    onClick={() => { setSecState(true) }}
                >ALL (18)</div>
                <div className={!secState ? "btn active" : "btn"}
                    onClick={() => { setSecState(false) }}
                >ENS (6)</div>
            </div>
            {
                secState ?
                    <div className="nfts">
                        {
                            counts.map(count => (
                                <div className="nft">
                                    <img src="/dp.png" alt="" />
                                    <p>{count}</p>
                                </div>
                            ))
                        }
                    </div>
                    :
                    <div className="ens">
                        {
                            arrEns &&
                            arrEns.map((item, idx) => (
                                <div className="box" key={idx}>
                                    <div className="innerBox">
                                        <div className="cover">
                                            <img src={ensGroup2} alt="" />
                                        </div>
                                        {
                                            item === ens ?
                                                <div className="text">
                                                    <h3>Primary</h3>
                                                    <p>{item}</p>
                                                    <Link to={`/personalize/${item}`}>
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
                    </div>
            }


        </div>
    )
}

export default Collection
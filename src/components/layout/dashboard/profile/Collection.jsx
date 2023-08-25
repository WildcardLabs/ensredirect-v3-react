import React, { useState, useEffect } from 'react'
import ensGroup2 from "../../../../assets/images/ensGroup2.svg"
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { ethers } from 'ethers';
function Collection() {
    const { ens } = useParams();
    const [secState, setSecState] = useState(true);
    const [arrEns, setArrEns] = useState([]);
    const [counts] = useState(["Bored Ape Yacht Club #8817", "Bored Ape Yacht Club #8817", "Bored Ape Yacht Club #8817", "Bored Ape Yacht Club #8817", "Bored Ape Yacht Club #8817", "Bored Ape Yacht Club #8817", "Bored Ape Yacht Club #8817", "Bored Ape Yacht Club #8817"]);

    const fetchEns = async () => {
        const provider = new ethers.providers.JsonRpcProvider("https://eth.llamarpc.com");
        const address = await provider.resolveName(ens);
        try {
            const res = await axios.get(`https://us-central1-matic-services.cloudfunctions.net/domainlist?address=${address}`)
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
                            counts.map((count, idx) => (
                                <div className="nft" key={idx}>
                                    <img src="/dp.png" alt="" loading="lazy" />
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
                                            <img src={ensGroup2} alt="" loading="lazy" />
                                        </div>
                                        {
                                            item === ens ?
                                                <div className="text">
                                                    <h3>Primary</h3>
                                                    <p>{item}</p>
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
import React, { useEffect } from 'react'
import Web3 from 'web3';
import { useLocation } from "react-router-dom"
import { web3Modal } from '../utils/web3Utils';
import { useDispatch } from "react-redux";
import { setOwner } from '../../redux/ensStore';
function ScrollToTop() {
    const dispatch = useDispatch();
    const checkIfConnected = async () => {
        if (web3Modal.cachedProvider) {
            const provider = await web3Modal.connect();
            const web3 = new Web3(provider);
            const accounts = await web3.eth.getAccounts();
            const account = accounts[0];
            dispatch(setOwner(account));
        }
    };
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        checkIfConnected();
    }, [pathname])
    return (null)
}

export default ScrollToTop; 
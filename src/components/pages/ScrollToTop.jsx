import React, { useEffect } from 'react'
import Web3 from 'web3';
import { useLocation } from "react-router-dom"
import { useDispatch } from "react-redux";
import { setOwner } from '../../redux/ensStore';
import { useWalletClient } from 'wagmi'
function ScrollToTop() {
    const dispatch = useDispatch();
    const { data: walletClient } = useWalletClient()
    const checkIfConnected = async () => {
        const accounts = await walletClient.getAddresses();
        dispatch(setOwner(accounts[0]));
    };
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])
    useEffect(() => {
        if (walletClient) {
            checkIfConnected();
        }
    }, [walletClient])
    return (null)
}

export default ScrollToTop; 
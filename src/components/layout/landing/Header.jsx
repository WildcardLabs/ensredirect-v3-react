import React, { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom'
import { AiOutlinePlus, AiOutlineMenu } from "react-icons/ai"
import CreatePopup from '../popups/CreatePopup'
import bg from "../../../assets/images/bg.svg"
import MobileMenuPopUp from '../popups/MobileMenuPopUp'
import { web3Modal } from "../../utils/web3Utils";
import Web3 from "web3"
import { useDispatch, useSelector } from "react-redux";
import {setOwner } from "../../../redux/ensStore"
function Header() {
  const dispatch = useDispatch();
  const [createPopUp, setCreatePopUp] = useState(false);
  const [menuPopUp, setMenuPopUp] = useState(false);
  const [web3, setweb3] = useState(null);
  const { owner } = useSelector((state) => state.ensStore);
  function popUpCreateMenu() {
    setCreatePopUp(!createPopUp)
    setMenuPopUp(false)
  }

  function popUpMobileMenu() {
    setMenuPopUp(!menuPopUp)
    setCreatePopUp(false)
  }

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      setweb3(web3);
      dispatch(setOwner(account));
    } catch (error) {
      console.log(error);
    }
  }
  const disconnectWallet = async () => {
    web3Modal.clearCachedProvider();
    window.localStorage.clear("WEB3_CONNECT_CACHED_PROVIDER");
    dispatch(setOwner(null));
  }

  // Define a function to switch networks
  const switchNetwork = async (targetChainId) => {
    if (web3) {
      try {
        const currentChainId = await web3.eth.getChainId();
        if (Number(currentChainId) !== targetChainId) {
          // Perform network switching logic specific to each wallet
          if (web3.currentProvider.isMetaMask || web3.currentProvider.isWalletConnect) {
            try {
              const response = await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: `0x${targetChainId.toString(16)}` }],
              });
              console.log('Switch response:', response);
            } catch (error) {
              console.error('Error switching network:', error);
            }
          } else if (web3.currentProvider.isTrust) {
            try {
              const response = await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: `0x${targetChainId.toString(16)}`,
                    chainName: 'Ethereum Mainnet',
                    nativeCurrency: {
                      name: 'ETH',
                      symbol: 'ETH',
                      decimals: 18,
                    },
                    rpcUrls: ['https://eth.llamarpc.com'],
                  },
                ],
              });
              // console.log('Switch response:', response);
            } catch (error) {
              console.error('Error switching network:', error);
            }
          } else {
            console.log("Unsupported wallet");
          }
        } else {
          console.log("Already on the target network.");
        }
      } catch (error) {
        console.error("Error getting chain ID:", error);
      }
    }
  };

  useEffect(() => {
    switchNetwork(1);
  }, [web3])

  return (
    <header>
      <nav>
        <Link to='/' className="sec">
          <img src="logo.svg" alt="logo" />
          <h1>ENSRedirect</h1>
        </Link>
        <div className="sec1">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/"}>About Us</Link></li>
          </ul>
          <button className='create' onClick={popUpCreateMenu}> <AiOutlinePlus /> Create</button>
          {
            owner ?
              <button className='connect' onClick={disconnectWallet}>Disconnet Wallet</button>
              :
              <button className='connect' onClick={connectWallet}>Connect Wallet</button>
          }
        </div>
        <AiOutlineMenu className="menu" onClick={popUpMobileMenu} />
      </nav>
      <div className="box">
        <div className="innerbox">
          <h1>
            Create utility
            for your
          </h1>
          <h1 className='color'>
            ENS name
          </h1>
          <p>
            Unlock the true potential of your ENS name with our ultimate all-in-one solution.
          </p>
          <button>
            Get Started
          </button>
        </div>
        <div className="innerbox">
          <img src={bg} alt="" />
        </div>
      </div>
      {createPopUp && <CreatePopup popUpCreateMenu={popUpCreateMenu} />}
      {menuPopUp && <MobileMenuPopUp popUpCreateMenu={popUpCreateMenu} popUpMobileMenu={popUpMobileMenu} />}

    </header>
  )
}

export default Header
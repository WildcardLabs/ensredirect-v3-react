import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js'
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import Web3Modal from 'web3modal';

const options = {
 
  binancechainwallet:{
    package:true,
  },
  coinbasewallet: {
    package: CoinbaseWalletSDK, 
    options: {
      appName: "Coinbase",
      rpc: "https://eth.llamarpc.com",
      chainId:1
    }
  },
  walletconnect: {
    package: WalletConnectProvider, 
    options: {
      rpc: "https://eth.llamarpc.com",
      chainId:1
    }
  }
}


const web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions: options,
  theme: 'dark',
//   disableInjectedProvider: false,
});
export { web3Modal }

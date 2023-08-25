import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "./redux/store";
import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
    mainnet,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { Provider } from "react-redux";
const { chains, publicClient } = configureChains(
    [mainnet],
    [
        alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMYID }),
        publicProvider(),
    ]
);

const { connectors } = getDefaultWallets({
    appName: "ENS Redirect",
    projectId: import.meta.env.VITE_PROJECTID,
    chains
});

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
})
ReactDOM.createRoot(document.getElementById('root')).render(
    <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
            <Provider store={store}>
                <App />
            </Provider>
        </RainbowKitProvider>
    </WagmiConfig>
)

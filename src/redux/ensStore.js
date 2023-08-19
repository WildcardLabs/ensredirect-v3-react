import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initializing state
const initialState = {
    loading: false,
    error: null,
    nfts: [],
    nft: null,
    web3Instance: null,
    owner: null
};

//
const ensSlice = createSlice({
    name: "Ens",
    initialState,
    // extraReducers: (builder) => {},
    reducers: {
        clear(state) {
            return {
                ...state,
                success: null,
                error: null,
            };
        },
        setWeb3(state, action) {
            return {
                ...state,
                web3Instance: action.payload
            };
        },
        setOwner(state, action) {
            return {
                ...state,
                owner: action.payload
            };
        },
        setNfts(state, action) {
            console.log(action.payload);
            return {
                ...state,
                nfts: action.payload
            };
        },
        setNft(state, action) {
            return {
                ...state,
                nft: action.payload
            };
        }
    },
});

export const { clear, setWeb3, setOwner ,setNfts ,setNft} =
    ensSlice.actions;

export default ensSlice.reducer;
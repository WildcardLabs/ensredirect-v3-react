import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initializing state
const initialState = {
    loading: false,
    error: null,
    nfts: [],
    sidebarState: false,
    signer: null,
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
        setSigner(state, action) {
            return {
                ...state,
                signer: action.payload
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
        setSidebarState(state, action) {
            return {
                ...state,
                sidebarState: action.payload
            };
        }
    },
});

export const { clear, setSigner, setOwner ,setNfts ,setSidebarState} =
    ensSlice.actions;

export default ensSlice.reducer;
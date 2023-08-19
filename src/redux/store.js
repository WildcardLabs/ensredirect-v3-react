import { configureStore } from "@reduxjs/toolkit";
import ens from "./ensStore";
export default configureStore({
  reducer: {
    ensStore: ens,
  },
});
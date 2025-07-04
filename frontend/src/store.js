import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalSlice";

const store = configureStore({
  reducer: {
    global: globalReducer,
    // Add other reducers here
  },
});

export default store;
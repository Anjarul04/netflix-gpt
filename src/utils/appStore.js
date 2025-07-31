import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptREducer from "./gptSlice";
import configReducer from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptREducer,
    config:configReducer,
  },
});

export default appStore;
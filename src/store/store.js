// Redux Toolkit (Vanilla Redux is oldschool, more complicated and buggier) app-wide state management. Redux Store holds cross-component and app-wide state for ENTIRE app.

import { configureStore } from "@reduxjs/toolkit";

import tictacReducer from "./tictacslice"; // Can be named anything bc it imports the default export since there are no {} around tictacReducer

const store = configureStore({
  reducer: {
    tictac: tictacReducer,
  },
});

export default store;

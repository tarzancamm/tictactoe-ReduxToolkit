import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  squares: ["", "", "", "", "", "", "", "", ""],
  player: true,
};

const tictacSlice = createSlice({
  name: "tictac",
  initialState,
  reducers: {
    setSquare(state, action) {
      state.squares.splice(action.payload.index, 1, action.payload.sign);
      state.player = !state.player;
    },
    reset(state) {
      (state.squares = ["", "", "", "", "", "", "", "", ""]);
        (state.player = true);
    },
  },
});

export const tictacActions = tictacSlice.actions; // Imported by components
export default tictacSlice.reducer; // Imported by store.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  squares: ["", "", "", "", "", "", "", "", ""],
  player: true,
};

const tictacSlice = createSlice({
  name: "tictac",
  initialState,
  reducers: {
    setSquare(state) {
        if ()
        if (state.player) {
            state.squares
        }
    },
    reset(state) {
      (state.squares = ["", "", "", "", "", "", "", "", ""]),
        (state.player = true);
    },
    changePlayer(state) {
        state.player = !state.player
    }
  },
});

export const tictacActions = tictacSlice.actions; // Imported by components
export default tictacSlice.reducer; // Imported by store.js

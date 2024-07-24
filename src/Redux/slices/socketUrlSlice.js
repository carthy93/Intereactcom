import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  socketUrl: "",
};

export const socketUrlSlice = createSlice({
  name: "socketUrl",
  initialState,
  reducers: {
    setSocketUrl: (state, { payload }) => {
      state.socketUrl = payload;
    },
    clearSocketUrl: (state) => {
      state.socketUrl = "";
    },
  },
});

export const { setSocketUrl, clearSocketUrl } = socketUrlSlice.actions;

export default socketUrlSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uId: "",
};

export const uIdSlice = createSlice({
  name: "uId",
  initialState,
  reducers: {
    setUid: (state, { payload }) => {
      state.uId = payload;
    },
    clearUid: (state) => {
      state.uId = "";
    },
  },
});

export const { setUid, clearUid } = uIdSlice.actions;

export default uIdSlice.reducer;

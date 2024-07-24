import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversations: [],
};

export const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    setConversations: (state, { payload }) => {
      state.conversations = payload;
    },
    clearConversations: (state) => {
      state.conversations = {};
    },
  },
});

export const { setConversations, clearConversations } =
  conversationsSlice.actions;

export default conversationsSlice.reducer;

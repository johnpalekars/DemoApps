import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  room: "",
  socket: ""
};

const chatSlice = createSlice({
  name: "chatState",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      return state;
    },
    setRoom: (state, action) => {
      state.room = action.payload;
      return state;
    },
    setSocket: (state, action) => {
      state.socket = action.payload;
      return state;
    }
  }
});

export const { setUser, setRoom, setSocket } = chatSlice.actions;

export default chatSlice.reducer;

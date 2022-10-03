import counterReducer from "./reducers/counter";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/users";
import chatReducer from "./reducers/chatRoom";

const store = configureStore({
  reducer: { counter: counterReducer, users: usersReducer, chat: chatReducer }
});

export default store;

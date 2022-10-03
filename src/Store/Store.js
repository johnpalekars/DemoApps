import counterReducer from "./reducers/counter";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/users";

const store = configureStore({
  reducer: { counter: counterReducer, users: usersReducer },
});

export default store;

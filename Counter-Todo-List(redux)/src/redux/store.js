import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice.js";
import todoReducer from "./todoSlice.js";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});
export default store;

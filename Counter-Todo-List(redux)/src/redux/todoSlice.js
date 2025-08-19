import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { inputVal: "", todoList: [] },
  reducers: {
    setInputValue: (state, action) => {
      state.inputVal = action.payload;
    },
    addToTask: (state) => {
      if (state.inputVal.trim() !== "") {
        state.todoList.push(state.inputVal);
        state.inputVal = "";
      }
    },
    removeTask: (state, action) => {
      state.todoList = state.todoList.filter(
        (_, index) => index !== action.payload
      );
    },
  },
});

export const { setInputValue, addToTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;

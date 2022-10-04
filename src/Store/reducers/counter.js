import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      return { value: state.value + 1 };
    },
    decrement: (state) => {
      return { value: state.value - 1};
    },
    incrementByTen:(state)=>{
        return {value: state.value +10};
    },
    decrementByTen:(state)=>{
      return {value: state.value -10};
  }
  },
});

export const { increment, decrement } = counterSlice.actions;
export const counterINC = counterSlice;

export default counterSlice.reducer;


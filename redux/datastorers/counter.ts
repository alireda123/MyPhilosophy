import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CounterState = {
  count: number;
  incrementer: number;
};

export const initialState: CounterState = {
  count: 0,
  incrementer: 3
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementby3: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    }
  }
});

export const { increment, decrement, incrementby3 } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter;

export default counterSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type list = {
  id: number,
  content: string,
  completed: boolean
};

export type stater = {
  data: list[],
  error: boolean,
  loading: boolean
}

export const initialState: stater = {

    data: [{
      id: Math.max(Math.random() * 1000),
      content: "my first item",
      completed: false
    }],
    error: false,
    loading: false}


export const listSlice = createSlice({
  name: "listslice",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Object>) => {
      [...state.data, action.payload];
    },
    delete: (state, action: PayloadAction<Object>) => {
      const filterer = state.data.filter(item => item.id !== action.payload);
      state.data = filterer;
    } 
}});

export const selectCount = (state: any) => state.listslice;

 


export default listSlice.reducer;

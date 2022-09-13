import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArrUser } from "../../@types";

interface typeInitialState {
  changeNumber: number;
  arrUser?: ArrUser[];
  arrCompleted?: ArrUser[];
  arrIncomplete?: ArrUser[];
}
const initialState: typeInitialState = {
  changeNumber: 0,
};
export const { reducer: sectionOneReduce, actions: sectionOneAction } =
  createSlice({
    name: "sectionOne",
    initialState,
    reducers: {
      setTabAndRadio: (state, action: PayloadAction<number>) => {
        state.changeNumber = action.payload;
      },
      arrUser: (state, action: PayloadAction<ArrUser[]>) => {
        state.arrUser = action.payload;
      },
      filterCompleted: (state) => {
        state.arrCompleted = state.arrUser?.filter((item) => item.completed);
      },
      filterUserIncomplete: (state, action: PayloadAction<number>) => {
        state.arrIncomplete = state.arrUser?.filter(
          (item) => item.userId === action.payload && !item.completed
        );
      },
    },
  });

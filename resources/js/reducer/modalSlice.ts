import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = { show: false } as any;

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    show(state) {
      state.show = true;
    },
    hide(state) {
      state.show = false;
    },
    setDataModal(state, action: PayloadAction<any>) {
      state.show = action.payload.show;
      state.title = action.payload.title;
      state.message = action.payload.message;
    },
  },
});

export const { show, hide, setDataModal } = modalSlice.actions;
export default modalSlice.reducer;

export interface DataModalInterface {
  show: boolean;
  title: string;
  message: string;
}

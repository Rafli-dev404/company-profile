import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = { show: false } as any;

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        show(state) {
            state.show = true;
        },
        hide(state) {
            state.show = false;
        },
        setDataNotification(state, action: PayloadAction<any>) {
            state.show = action.payload.show;
            state.description = action.payload.description;
            state.title = action.payload.title;
        },
    },
});

export const { show, hide, setDataNotification } = notificationSlice.actions;
export default notificationSlice.reducer;

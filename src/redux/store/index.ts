import { configureStore } from "@reduxjs/toolkit";
import { customerSlice } from "../features/customerSlice";
import { reservationSlice } from "../features/reservationSlice";


export const store = configureStore({
  reducer: {
    reservations: reservationSlice.reducer,
    customers: customerSlice.reducer
  }
})

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch
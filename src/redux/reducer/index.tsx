import { combineReducers } from "redux";
import { customerSlice } from "../features/customerSlice";
import { reservationSlice } from "../features/reservationSlice";

export const reducer = combineReducers({
  reservations: reservationSlice.reducer,
  customers: customerSlice.reducer
})

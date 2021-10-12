import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialStateProps{
  value: string[]
}

const initialState: IInitialStateProps = {
  value : ["Hamza Zaheer"]
}

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    addReservationAction: (state = initialState, action : PayloadAction<string>) => {
      const {value} = state;
      const {payload} = action;
      value.push(payload);
    },
    removeReservationAction: (state : IInitialStateProps, action: PayloadAction<number>)=>{
      const {value} = state;
      const {payload}= action;
      value.splice(payload, 1);
    }
  }
})

export const {addReservationAction, removeReservationAction} = reservationSlice.actions;
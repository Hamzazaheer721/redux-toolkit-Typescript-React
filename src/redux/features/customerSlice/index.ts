import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IAddFoodToCustomerProps {
  name: string,
  id: string
} 

interface ICustomerProps{
  id: string
  name: string
  food: string[]
}

interface Customer {
  value : ICustomerProps[]
}

const initialState: Customer = {
  value: []
}

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomerAction : (state = initialState, action: PayloadAction<ICustomerProps>) => {
      const {value} = state;
      const {payload} = action;
      value.push(payload)
    },
    addFoodtoCustomerAction: (state, action : PayloadAction<IAddFoodToCustomerProps>) => {
      const {value} = state;
      const {payload} = action;
      value.map(_customer => _customer.id === payload.id && _customer.food.push(payload.name))
    }
  }
})

export const {addCustomerAction, addFoodtoCustomerAction} = customerSlice.actions; 
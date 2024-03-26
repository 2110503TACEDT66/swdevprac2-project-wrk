import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interface";

type CartState = {
    carItems : ReservationItem[]
}

const initialState : CartState = { carItems:[] }

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addReservation : (state, action: PayloadAction<ReservationItem>)=>{
            state.carItems.push(action.payload)
        },
        removeReservation : (state, action:PayloadAction<ReservationItem>)=>{
            const remainItems = state.carItems.filter(obj => {
                return((obj.name !== action.payload.name)
                ||(obj._id !== action.payload._id));
            })
            state.carItems = remainItems
        }
    }
})

export const {addReservation, removeReservation} = cartSlice.actions
export default cartSlice.reducer
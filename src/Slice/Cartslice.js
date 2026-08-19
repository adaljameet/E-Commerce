import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
    name: "cart",
    initialState: {
        cartlist: []
    },
    reducers: {     
        addToCart: (state, action) => {
            state.cartlist.push(action.payload)
        },
        removeToCart: (state, action) => {
            state.cartlist = state.cartlist.filter((item) => item.id !== action.payload)
        }

    }
})

export const { addToCart, removeToCart } = Cartslice.actions;
export default Cartslice.reducer;
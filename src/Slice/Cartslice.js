import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const Cartslice = createSlice({
    name: "cart",
    initialState: {
        cartlist: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : []
    },
    reducers: {
        addToCart: (state, action) => {
            var product = action.payload;
            var cnt = state.cartlist.filter(v => v.id === product.id)
            // console.log(cnt.length)
            if (cnt.length > 0) {
                var data = state.cartlist.map((v, i) => {
                    if (v.id === product.id) {
                        v.counter = v.counter + 1;
                    }
                    return v
                })
                state.cartlist = data;
            }
            else {
                var p_data = { ...product, counter: 1 }
                // var list = [...state.cartlist ,p_data]
                state.cartlist.push(p_data)
            }
            // state.cartlist.push(action.payload)
            localStorage.setItem(
                "cartItems",
                JSON.stringify(state.cartlist)
            );

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You added all the items!",
                showConfirmButton: false,
                timer: 1500
            });


        },
        removeToCart: (state, action) => {
            const product = action.payload;
            const existingItem = state.cartlist.find(v => v.id === product.id);
            // console.log(existingItem);
            if (existingItem) {
                if (existingItem.counter > 1) {
                    existingItem.counter -= 1;
                } else {
                    state.cartlist = state.cartlist.filter(
                        v => v.id !== product.id
                    );
                }
            }
            localStorage.setItem(
                "cartItems",
                JSON.stringify(state.cartlist)
            );
        }
    }
})

export const { addToCart, removeToCart } = Cartslice.actions;
export default Cartslice.reducer;
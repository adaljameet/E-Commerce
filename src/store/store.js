import { configureStore } from '@reduxjs/toolkit'
import Cartslice from '../Slice/Cartslice';

const store = configureStore({
    reducer:{
        cart: Cartslice
    }
})

export default store;   
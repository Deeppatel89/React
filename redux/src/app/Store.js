import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/CounterSlice'

const Store = configureStore({
    reducer:{
        counter:counterReducer,
    },
})

export default Store;

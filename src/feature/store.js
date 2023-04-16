import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./services/CartSlice";

 const store = configureStore({
    reducer:{
        cart:CartSlice,
    }
})

export default store;
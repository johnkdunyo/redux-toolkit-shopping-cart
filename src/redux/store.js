import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import cartReducer from "./reducers/cartReducer";
import itemsReducer from "./reducers/itemsReducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: itemsReducer,
        cart: cartReducer,
    }
});


export default store;
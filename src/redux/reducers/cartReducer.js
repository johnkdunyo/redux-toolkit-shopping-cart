import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items : [
        // {
        //  id: 1,
        //   name: "MacBook",
        //   price: 25,
        //   quantity: 1,
        // },
    ]
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        incrementCart: (state, action) => {
            // get the particular item and increment
            const item = state.items.find(item=>item.id === action.payload.id)
            item.quantity +=1;
        },
        decrementCart: (state, action) => {
            // get the particular item and decrement... remember to remove once the quatity is 0
            const item = state.items.find(item=>item.id === action.payload.id);
            if(item.quantity === 1){
                console.log(item.quantity)
                state.items = state.items.filter(item=>item.id!==action.payload.id);
                
            }else{
                item.quantity -= 1;
            }
        },
        addToCart : (state, action) => {
            // if it exists, increase the quantity
            // state.items.push(action.payload)
            const item = state.items.find((item)=>item.id === action.payload.id)
            if(!item){
                action.payload.quantity = 1;
                state.items.push(action.payload)
            }else {
                item.quantity +=1
            }
          
        } 
    }
});

export const { incrementCart, decrementCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
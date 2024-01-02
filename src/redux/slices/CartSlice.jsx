import { createSlice } from "@reduxjs/toolkit";

// eslint-disable-next-line react-refresh/only-export-components
const CartSlice = createSlice({
    name: "cart",   
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart : (state, action) => {
            const existingItem = state.cart.find(
                (item) => item.id === action.payload.id);
                if(existingItem){
                    state.cart = state.cart.map((item) => 
                    item.id === action.payload.id ? { ...item, qty: item.qty + 1} : item
                    );

                }else {
                    state.cart.push(action.payload);
                }
            

        },
        removeFromCart: (state, action) =>{
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
            console.log(state.cart);
        }

    }
});
export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
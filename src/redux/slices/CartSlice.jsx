import { createSlice } from "@reduxjs/toolkit";
// eslint-disable-next-line react-refresh/only-export-components
const CartSlice = createSlice({
    name: "cart",   
    initialState: {
        cartElem:localStorage.getItem('cartElem') ? JSON.parse(localStorage.getItem('cartElem')) : [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartElem.find(
                (item) => item.id === action.payload.id);
                if(existingItem){
                    state.cartElem = state.cartElem.map((item) => 
                    item.id === action.payload.id ? { ...item, qty: item.qty + 1} : item
                    );

                }else {
                    state.cartElem.push(action.payload);
                } 
                localStorage.setItem("cartElem",JSON.stringify(state.cartElem))           

        },
        removeFromCart: (state, action) =>{
            state.cartElem = state.cartElem.filter((item) => item.id !== action.payload.id);
            localStorage.setItem("cartElem",JSON.stringify(state.cartElem))
            console.log(state.cartElem);
        },
        incrementQty: (state, action) => {
            state.cartElem = state.cartElem.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1} : item);
            localStorage.setItem("cartElem",JSON.stringify(state.cartElem))  
        },
        decrementQty: (state, action) => {
            state.cartElem = state.cartElem.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty - 1} : item);
            localStorage.setItem("cartElem",JSON.stringify(state.cartElem))  
        },
            
    }
});
export const { addToCart, removeFromCart, incrementQty, decrementQty } = CartSlice.actions;
export default CartSlice.reducer;
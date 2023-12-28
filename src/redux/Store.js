import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './slices/CartSlice';
const Store = configureStore({
    reducer:{
        cartIt: CartSlice,
    }
});
export default Store;
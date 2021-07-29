import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

const store = configureStore({
    reducers: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer,
    }
})

export default store;
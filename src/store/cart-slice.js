import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

const cartSlice = create({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false,
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++;
            state.changed = true

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                })
            } else {
                existingItem.quantity = existingItem++;
                exisitingItem.totalPrice = existingItem.totalPrice + newItem.totalPrice;
            }


        },
        removeItemToCart(state, action) {
            const id = action.payload.id;
            const existingItem = state.items.find(item => item.id === id)

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id === id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
            state.totalQuantity--;
            state.changed = true;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;
import { ADD_ITEM, TOOGLE_CART_HIDDEN, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from '../types';
export const toogleCart = () => ({
    type: TOOGLE_CART_HIDDEN,
});
export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item,
});
export const removeItemFromCart = (item) => ({
    type: REMOVE_ITEM,
    payload: item,
});
export const clearItemFromCart = (item) => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item,
});

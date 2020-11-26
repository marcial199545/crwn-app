import { ADD_ITEM, TOOGLE_CART_HIDDEN } from '../types';
export const toogleCart = () => ({
    type: TOOGLE_CART_HIDDEN,
});
export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item,
});

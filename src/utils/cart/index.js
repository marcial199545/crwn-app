export const addItemToCart = (cartItems, newItem) => {
    const existingCartItems = cartItems.find((item) => item.id === newItem.id);
    if (existingCartItems) {
        return cartItems.map((item) =>
            item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
    }
    return [...cartItems, { ...newItem, quantity: 1 }];
};
export const clearItemFromCart = (cartItems, item) => {
    let newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    return newCartItems;
};
export const removeItemFromCart = (cartItems, item) => {
    let existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingCartItem.quantity === 1) {
        return clearItemFromCart(cartItems, existingCartItem);
    }
    return cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: --cartItem.quantity } : cartItem
    );
};

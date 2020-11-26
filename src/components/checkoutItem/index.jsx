import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, removeItemFromCart, addItem } from '../../redux/cart/actions';
import './checkout.scss';
const CheckOutItem = ({ cartItem, clearItem, removeItemFromCart, addItemToCart }) => {
    const { name, price, imageUrl, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItemFromCart(cartItem)}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItemToCart(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
    addItemToCart: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckOutItem);

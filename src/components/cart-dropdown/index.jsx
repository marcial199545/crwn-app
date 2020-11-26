import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../Button';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { toogleCart } from '../../redux/cart/actions';
import { selectCartItems } from '../../redux/cart/selectors';
import CartItem from '../cartItem';
import './cart-dropdown.scss';

const Cart = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? (
                cartItems.map((item) => <CartItem key={item.id} item={item} />)
            ) : (
                <span className='empty-message'>Your cart is empty</span>
            )}
        </div>
        <Button
            onClick={() => {
                history.push('/checkout');
                dispatch(toogleCart());
            }}
        >
            Got To Checkout
        </Button>
    </div>
);
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(Cart));

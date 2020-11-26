import React from 'react';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/selectors.js';
import { toogleCart } from '../../redux/cart/actions';
import './cartIcon.scss';

const CartIcon = ({ toogleCart, itemCount }) => (
    <div className='cart-icon' onClick={toogleCart}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    toogleCart: () => dispatch(toogleCart()),
});
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

import userReducer from './user/reducer';
import cartReducer from './cart/reducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
});
export default rootReducer;

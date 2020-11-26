import { SET_CURRENT_USER } from '../types';
const INITIAL_STATE = {
    currentUser: null,
};
const useReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };
        default:
            return state;
    }
};
export default useReducer;

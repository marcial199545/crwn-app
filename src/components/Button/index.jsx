import './button.scss';
import React from 'react';

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
    return (
        <button
            className={`${inverted ? 'inverted' : ''} ${
                isGoogleSignIn ? 'google-sign-in' : ''
            } custom-button`}
            {...otherProps}
        >
            {children}
        </button>
    );
};
export default Button;

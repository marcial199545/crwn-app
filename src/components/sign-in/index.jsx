import React, { Component } from 'react';
import FormInput from '../FormInput';
import Button from '../Button';
import './sign-in.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
    }
    handleInputChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email: '', password: '' });
    };
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>sign in with your email and password</span>
                <form
                    onSubmit={(e) => {
                        this.handleSubmit(e);
                    }}
                >
                    <FormInput
                        name='email'
                        type='email'
                        label='email'
                        value={this.state.email}
                        handleChange={this.handleInputChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        label='password'
                        required
                        handleChange={this.handleInputChange}
                        value={this.state.password}
                    />
                    <div className='buttons'>
                        <Button type='submit'>Sign In</Button>
                        <Button isGoogleSignIn onClick={signInWithGoogle}>
                            Sign In With Google
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

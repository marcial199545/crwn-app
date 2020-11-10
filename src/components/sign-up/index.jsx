import React, { Component } from 'react';
import './sign-up.scss';
import FormInput from '../FormInput';
import Button from '../Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        console.log('SignUp -> confirmPassword', confirmPassword);
        console.log('SignUp -> password', password);
        if (password.trim() !== confirmPassword.trim()) {
            alert("passwords don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
        } catch (error) {
            alert(error.message);
            console.error(error);
        }
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'> I don't have an account</h2>
                <span>Sign up with your Email and password</span>
                <form onSubmit={this.handleSubmit} className='sign-up-form'>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <Button type='submit'>Sign Up</Button>
                </form>
            </div>
        );
    }
}
export default SignUp;

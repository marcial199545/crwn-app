import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import RegisterAndLoginPage from './pages/RegisterAndLoginPage';
import { auth } from './firebase/firebase.utils';
import './App.scss';
class App extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: null,
        };
    }
    unsubscribeFromAuth = null;
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });
            console.log(user);
        });
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/shop' component={ShopPage} />
                    <Route exact path='/signin' component={RegisterAndLoginPage} />
                </Switch>
            </div>
        );
    }
}

export default App;

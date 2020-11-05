import React from 'react';
import HomePage from './pages/HomePage';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
const HatsPage = () => {
    return (
        <div>
            <h1>Hats page</h1>
        </div>
    );
};
function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/shop/hats' component={HatsPage} />
            </Switch>
        </div>
    );
}

export default App;

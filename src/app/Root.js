import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from "history"; //history helps to manage sessions throughout the app
import { Login } from './views'; // Importing All Pages
const hist = createBrowserHistory();

class Root extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to={'/Login'}>Login</Link></li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact path='/Login' component={Login} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default Root;
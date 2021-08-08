import React, { Component } from "react";

import {
    Switch,
    Route
} from "react-router-dom";

import MainPage from './components/pages/Main/MainPage';
import LogInPage from "./components/pages/LogIn/LogInPage";
import UserPage from "./components/pages/UserPage/UserPage";
import SettingsPage from "./components/pages/SettingsPage/SettingsPage";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
          selectedUser: '',
          users: []
        };
    }

    onChangeSelectedUser = (user) => {
        this.setState({ selectedUser: user })
    };

    getUsers = () => {
        this.setState({ users: users });
    };

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/settings">
                        <SettingsPage />
                    </Route>
                    <Route path="/login">
                        <LogInPage />
                    </Route>
                    <Route path="/user/:id">
                        <UserPage />
                    </Route>
                    <Route exact path="/">
                        <MainPage 
                            onChangeSelectedUser={this.onChangeSelectedUser} 
                            getUsers={this.getUsers}
                        />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default App;

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import React, { Component } from 'react';
import LoginPage from "./LoginPage.js";
import SearchPage from "./SearchPage.js";

const TOKEN = 'TOKEN'

export default class App extends Component {

    state = {
        token: localStorage.getItem(TOKEN) || ''
    }

    handleTokenChange = token => {
        localStorage.setItem(TOKEN, token)
        this.setState({ token: token })
        console.log(this.state.token)
    }


    render() {
        return (
            <div>

                <Router>
                    <Switch>
                        {/* <Route exact path="/">
                            <Home />
                        </Route> */}

                        <Route path="/search-page"
                            exact render={(routerProps) =>
                                <SearchPage {...routerProps} />} />


                        <Route path="/login"
                            exact render={(routerProps) =>
                                <LoginPage
                                    handleTokenChange={this.handleTokenChange} {...routerProps} />}
                        />
                    </Switch>
                </Router>

            </div>
        )
    }
}

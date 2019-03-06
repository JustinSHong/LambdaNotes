import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { FirebaseContext } from "./components/Firebase";
import * as ROUTES from "./utils/routes";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import PWForget from "./components/PWForget";
import Home from "./components/Home";

const SomeComponent = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return <div>I've access to Firebase and render something.</div>;
        }}
    </FirebaseContext.Consumer>
);

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <SomeComponent />
                    <Navigation />
                    <hr />
                    <Route
                        exact
                        path={ROUTES.LANDING}
                        component={LandingPage}
                    />
                    <Route path={ROUTES.SIGN_UP} component={SignUp} />
                    <Route path={ROUTES.SIGN_IN} component={SignIn} />
                    <Route path={ROUTES.PASSWORD_FORGET} component={PWForget} />
                    <Route path={ROUTES.HOME} component={Home} />
                </div>
            </Router>
        );
    }
}

export default App;

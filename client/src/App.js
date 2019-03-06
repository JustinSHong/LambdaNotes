import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { FirebaseContext } from "./components/Firebase";
import Navigation from "./components/Navigation";
import * as ROUTES from "./utils/routes";

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
                    <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                    <Route
                        path={ROUTES.PASSWORD_FORGET}
                        component={PasswordForgetPage}
                    />
                    <Route path={ROUTES.HOME} component={HomePage} />
                </div>
            </Router>
        );
    }
}

export default App;

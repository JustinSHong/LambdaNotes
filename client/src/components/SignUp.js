import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../utils/routes";
import FirebaseContext from "./Firebase/context";

const SignUp = props => (
    <div>
        <h1>SIGN UP HERE!</h1>
        <FirebaseContext.Consumer>
            {firebase => <SignUpForm {...props} firebase={firebase} />}
        </FirebaseContext.Consumer>
    </div>
);

const SignUpForm = props => {
    const [formData, setFormData] = useState({
        username,
        email: "",
        passwordOne: "",
        passwordTwo: "",
        error: null
    });

    const { username, email, passwordOne, passwordTwo, error } = formData;

    const handleSubmit = e => {
        e.preventDefault();

        props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                setFormData({ ...formData });
                props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                setFormData({ error });
            });
    };

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // simple validation
    const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === "" ||
        email === "" ||
        username === "";

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="username"
                value={username}
                onChange={handleChange}
                type="text"
                placeholder="Your name"
            />
            <input
                name="email"
                value={email}
                onChange={handleChange}
                type="text"
                placeholder="Your email"
            />
            <input
                name="passwordOne"
                value={passwordOne}
                onChange={handleChange}
                type="password"
                placeholder="Password"
            />
            <input
                name="passwordTwo"
                value={passwordTwo}
                onChange={handleChange}
                type="password"
                placeholder="Confirm your password"
            />
            <button disabled={isInvalid} type="submit">
                Sign Up
            </button>

            {error && <p>{error.message}</p>}
        </form>
    );
};

const SignUpLink = () => (
    <p>
        <Link to={ROUTES.SIGN_UP}>Click here if you don't have an account</Link>
    </p>
);

export { SignUpForm, SignUpLink };

export default SignUp;

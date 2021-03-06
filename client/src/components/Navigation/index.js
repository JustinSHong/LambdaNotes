import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../utils/routes";

const Navigation = () => (
    <div>
        <ul>
            <li>
                <Link to={ROUTES.LANDING}>Landing Page</Link>
            </li>
            <li>
                <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
            </li>
            <li>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
            <li>
                <Link to={ROUTES.HOME}>Home</Link>
            </li>
        </ul>
    </div>
);

export default Navigation;

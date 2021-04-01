import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home'
import AboutUs from "./main_pages/AboutUs";
import ApiCall from "./main_pages/ApiCall";

export default function MyRoutes() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                        <Link to="/api">Api call</Link>
                    </li>
                </ul>
                <hr/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about-us">
                        <AboutUs/>
                    </Route>
                    <Route path="/api">
                        <ApiCall/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

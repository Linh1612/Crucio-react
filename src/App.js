import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import React from "react";
import Crucio from './js/crucio';

const App = () => {
    const routes = useRoutes([
        { path: "/", element: <Crucio /> },
    ]);
    return routes;
};

const AppWrapper = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default AppWrapper;
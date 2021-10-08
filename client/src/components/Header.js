import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from '../pages/Projects';
import NavTabs from './NavTabs';

const Header = () => {
    return (
        <header>
            <Router>
            <NavTabs />
            <h1>Stitchmark</h1>
            {/* home page? */}
            <h3>Todos</h3>
            {/* will need to create page for this? or part of main page */}
            {/* <h3>Current projects</h3> */}
            <Route exact path="/projects" component={Projects}> Projects </Route>
            </Router>
        </header>
    )
}

export default Header;
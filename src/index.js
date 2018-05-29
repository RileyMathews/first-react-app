import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Riley from './home';
import ProjectList from './projects/ProjectsList'
import about from './about/aboutMe'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./nav/NavBar";

ReactDOM.render((
    <Router>
        <div>
            <NavBar/>
            <Route exact path="/" component={Riley} />
            <Route exact path="/projects" component={ProjectList} />
            <Route exact path="/about" component={about} />
        </div>
    </Router>
), document.querySelector("#root"))
registerServiceWorker();

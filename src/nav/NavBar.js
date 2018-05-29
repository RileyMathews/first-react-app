import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"


class NavBar extends Component {

    toggleMenu() {
        const menu = document.getElementById("navMenu")
        const burger = document.getElementById("burger")
        menu.classList.toggle("is-active")
        burger.classList.toggle("is-active")
    }

    render() {
        return (
            <nav className="navbar" aria-label="main navigation">
                <div className="navbar-brand">
                    <div className="navbar-start">
                        <a role="button" className="navbar-burger" id="burger" onClick={this.toggleMenu} aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
                <div className="navbar-menu" id="navMenu">
                    <Link className="navbar-item" to="/">Home</Link>
                    <Link className="navbar-item" to="/projects">Projects</Link>
                    <Link className="navbar-item" to="/about">About</Link>
                </div>
            </nav>
        );
    }
}

export default NavBar;


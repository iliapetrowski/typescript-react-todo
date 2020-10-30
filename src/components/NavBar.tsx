import React from "react";
import './Navbar.module.css'

export const Navbar: React.FunctionComponent = ()=> (
    <nav>
        <div className="nav-wrapper px1 blue-grey darken-2">
            <a href="/" className="brand-logo right">TypeScript Sandbox</a>
            <ul className="left hide-on-med-and-down">
                <li><a href="/">Hello</a></li>
                <li><a href="/">About us</a></li>
                <li><a href="/">Information</a></li>
            </ul>
        </div>
    </nav>
)

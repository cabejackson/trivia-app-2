import React from 'react';
import { Route, Link, Redirect } from "react-router-dom";
import "./Header.css";


const Header = () => {
    return (
        <div className="header__back">
            <nav>
                <h1 className="welcome">Lets Play Trivia !</h1>

                <ul className="navBar__ul">
                    <li>
                        <Link to="/" > START HERE </Link>
                    </li>

                    <li>
                        <Link to="/about" > ABOUT THE DEV </Link>
                    </li>


                </ul>
            </nav>
        </div>
    )
}

export default Header

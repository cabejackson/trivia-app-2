import React, { Component } from 'react';
import { Route, Link, Redirect } from "react-router-dom";
import NavButton from "../NavButton/NavButton";
import "./Landing.css";


export default class Landing extends Component {
    render() {
        return (
            <div className="content-img-background" >
                <div className="mainBox">
                    <div className="boarderLine">
                        <div className="cutesyLine"></div>
                        <h3 className="catchyPhrase">LET'S GET STARTED!</h3>
                        <div className="cutesyLine"></div>

                        <div className="btn">
                            <h1 className="catchyPhrase">CLICK <br /> 'START GAME'<br /> TO BEGIN</h1>
                            <button className="start__quiz_btn">
                                <NavButton
                                    tag={Link}
                                    to="/game"
                                    type="button"
                                    className="NavButton__startQuiz"
                                >
                                    START GAME!
                    </NavButton>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

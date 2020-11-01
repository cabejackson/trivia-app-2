import React from 'react';
import { Link } from "react-router-dom";
import ApiContext from "../../contexts/ApiContext";
import NavButton from "../NavButton/NavButton";
import "./About.css";



export default function About(props) {
    return (
        <ApiContext.Consumer>
            {context => {
                // console.log('this is context', context);
                return (
                    <>
                        <div className="body___divForEntirePage-about">
                            <div className="content-img-background-about" >




                                <div className="mainBox-about">
                                    <div className="boarderLine-about">
                                        <div className="titleText-about">
                                            <h2>Caleb Jackson<br /> (He/They)</h2>
                                        </div>
                                        <div className="cutesyLine-about"></div>
                                        <h3 className="catchyPhrase-about">


                                        </h3>
                                        <button id="button-go-to-sign-up" className="about___btn">
                                            <a href="https://www.linkedin.com/in/caleb-jackson-cabe/" >LinkedIn</a>
                                        </button>
                                        <button id="button-go-to-sign-up" className="about___btn">
                                            <a href="https://github.com/cabejackson" >Github</a>

                                        </button>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </>

                )
            }}
        </ApiContext.Consumer>




    )
}

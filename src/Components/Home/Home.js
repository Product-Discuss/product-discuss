import React from "react";
import { useState } from "react";
import "./Home.css";
import Login from "../Log in/Login";
import Signin from "../Sign in/Signin";

const Home = () => {
    const [isLoginState, setLoginState] = useState(1);

    return (
        <div className={"container"}>
            <span className={"catchyPhrase"}>
                <h1 className={"catchyPhraseH1"}>
                    Discuss <span className={"catchyProduct"}>Product</span>
                </h1>
                <h1 className={"catchyPhraseH1"}>
                    Rate <span className={"catchyProduct"}>Product</span>
                </h1>
                <h1 className={"catchyPhraseH1"}>
                    Buy <span className={"catchyProduct"}>Product</span>
                </h1>

                <h3 className={"catchyPhraseH3"}>
                    All your favourites are at one place now !
                </h3>
            </span>

            <hr />

            <span className={"log-in-home"}>
                {isLoginState ? (
                    <Login setLoginState={setLoginState} />
                ) : (
                    <Signin setLoginState={setLoginState} />
                )}
            </span>
        </div>
    );
};

export default Home;

import React from "react";
import { useState } from "react";
import "./Home.css";
import Login from "../Log in/Login";
import Signin from "../Sign in/Signin";

const Home = () => {
    const [isLoginState, setLoginState] = useState(1);

    return (
        <div id="container">
            <span id="catchyPhrase">
                <h1>Catchy Phrase</h1>
            </span>
            <span id="log-in">
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

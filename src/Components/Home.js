import React from "react";
import { useState } from "react";
import "./Home.css";

const Home = () => {
    const [isLoginState, setLoginState] = useState(1);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogInClick = () => {
        clearAllInputs();
    };

    const clearAllInputs = () => {
        setName("");
        setEmail("");
        setPassword("");
    };

    if (isLoginState) {
        return (
            <div id="container">
                <span id="catchyPhrase">
                    <h1>Catchy Phrase</h1>
                </span>
                <span id="login">
                    <form>
                        <label id="email"> Email</label>
                        <br />
                        <input
                            type="text"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                            required
                        />
                        <br />
                        <label id="pwd">Password</label>
                        <br />
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                            required
                        />
                    </form>

                    <button id="login-button" onClick={handleLogInClick}>
                        Log in
                    </button>
                    <button id="login-google-button">Log in with Google</button>
                    <button
                        id="sign-up-button"
                        onClick={() => {
                            setLoginState(0);
                            clearAllInputs();
                        }}
                    >
                        Sign up
                    </button>
                </span>
            </div>
        );
    } else {
        return (
            <div id="container">
                <span id="catchyPhrase">
                    <h1>Catchy Phrase</h1>
                </span>
                <span id="login">
                    <form>
                        <label id="name"> Name</label>
                        <br />
                        <input
                            type="text"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                            required
                        />
                        <br />
                        <label id="email"> Email</label>
                        <br />
                        <input
                            type="text"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                            required
                        />
                        <br />
                        <label id="pwd">Password</label>
                        <br />
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                            required
                        />
                    </form>

                    <button id="login-button">Sign up</button>
                    <button id="login-google-button">Log in with Google</button>
                    <button
                        id="sign-up-button"
                        onClick={() => {
                            setLoginState(1);
                            clearAllInputs();
                        }}
                    >
                        Log in
                    </button>
                </span>
            </div>
        );
    }
};

export default Home;

import { useState } from "react";
import "./Signin.css";

const Signin = (props) => {
    const setLoginState = props.setLoginState;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const clearAllInputs = () => {
        setName("");
        setEmail("");
        setPassword("");
    };
    return (
        <span>
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

            <button id="sign-up-button">Sign up</button>
            <button id="log-in-google-button">Log in with Google</button>
            <button
                id="log-in-button"
                onClick={() => {
                    setLoginState(1);
                    clearAllInputs();
                }}
            >
                Log in
            </button>
        </span>
    );
};

export default Signin;

import { useState } from "react";
import "./Login.css";
const Login = (props) => {
    const setLoginState = props.setLoginState;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogInClick = () => {
        clearAllInputs();
    };

    const clearAllInputs = () => {
        setEmail("");
        setPassword("");
    };

    return (
        <span>
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
            <button id="log-in-google-button">Log in with Google</button>
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
    );
};

export default Login;

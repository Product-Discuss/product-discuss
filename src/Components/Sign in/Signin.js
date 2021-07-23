import { useState, useContext } from "react";
import "./Signin.css";
import { auth, provider } from "../../firebase";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { UserContext } from "../../App";

const Signin = (props) => {
    const setLoginState = props.setLoginState;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userContext = useContext(UserContext);

    const clearAllInputs = () => {
        setName("");
        setEmail("");
        setPassword("");
    };

    const handleGoogleLogin = async () => {
        try {
            let result = await auth.signInWithPopup(provider);
            //objects
            let { credential, token, user } = result;
            localStorage.setItem("user", JSON.stringify(user));
            userContext.setUser(user);
        } catch (error) {
            let { errorCode, errorMessage, email, credential } = error;
            console.log(errorCode);
        }
    };

    return (
        <div className={"signin"}>
            <form>
                <label className={"name"}> Name</label>
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
                <label className={"email"}> Email</label>
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
                <label className={"pwd"}>Password</label>
                <br />
                <input
                    type={"password"}
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    required
                />
            </form>

            <div className={"buttons-div"}>
                <button className={"sign-up-button"}>Sign up</button>
                <button
                    className={"log-in-google-button"}
                    onClick={handleGoogleLogin}
                >
                    Sign in with Google
                </button>
                <button
                    className={"log-in-button"}
                    onClick={() => {
                        setLoginState(1);
                        clearAllInputs();
                    }}
                >
                    Click here to Log In!
                </button>
            </div>
        </div>
    );
};

export default Signin;

import { useState, useContext } from "react";
import { auth, provider } from "../../firebase";
import "./Login.css";
import { UserContext } from "../../App";

const Login = (props) => {
    const setLoginState = props.setLoginState;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogInClick = () => {
        clearAllInputs();
    };
    const userContext = useContext(UserContext);

    const clearAllInputs = () => {
        setEmail("");
        setPassword("");
    };

    const handleGoogleLogin = async () => {
        try {
            let result = await auth.signInWithPopup(provider);
            let { credential, token, user } = result;
            localStorage.setItem("user", JSON.stringify(user));
            userContext.setUser(user);
        } catch (error) {
            let { errorCode, errorMessage, email, credential } = error;
            console.log(errorCode);
        }
    };

    return (
        <div className={"log-in"}>
            <form>
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
                    type="password"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    required
                />
            </form>

            <div className={"buttons-div-login"}>
                <button className={"login-button"} onClick={handleLogInClick}>
                    Log in
                </button>
                <button
                    className={"log-in-google-button"}
                    onClick={handleGoogleLogin}
                >
                    Log in with Google
                </button>
                <button
                    className="sign-up-button-login"
                    onClick={() => {
                        setLoginState(0);
                        clearAllInputs();
                    }}
                >
                    Click here to Sign Up!
                </button>
            </div>
        </div>
    );
};

export default Login;

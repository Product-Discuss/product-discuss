import { useState, useContext } from "react";
import { auth, provider } from "../../firebase";
import "./Login.css";
import { UserContext } from "../../App";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const Login = (props) => {
    const setLoginState = props.setLoginState;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordShow, setisPasswordShow] = useState(false);

    const userContext = useContext(UserContext);

    const clearAllInputs = () => {
        setEmail("");
        setPassword("");
    };

    const handleLogInClick = async () => {
        try {
            let userCredential = await auth.signInWithEmailAndPassword(
                email,
                password
            );
            let user = userCredential.user;
            localStorage.setItem("user", JSON.stringify(user));
            userContext.setUser(user);
        } catch (err) {
            alert(err.message);
        }
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

    const togglePasswordVisiblity = () => {
        setisPasswordShow(isPasswordShow ? false : true);
    };

    const handleClickForgotPassword = () => {};

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
                    id="pass-field"
                    type={isPasswordShow ? "text" : "password"}
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    required
                />
                <i onClick={togglePasswordVisiblity}>{eye}</i>
                <button onClick={handleClickForgotPassword}>
                    forgot Password?
                </button>
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

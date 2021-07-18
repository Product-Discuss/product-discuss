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
          <button className={"log-in-google-button"}>Log in with Google</button>
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

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
          <button className={"log-in-google-button"}
          >Sign in with Google</button>
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

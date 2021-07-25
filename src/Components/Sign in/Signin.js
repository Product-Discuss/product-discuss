import { useState, useContext } from "react";
import "./Signin.css";
import { auth, provider } from "../../firebase";
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

  const createNewUser = async (email, password, name) => {
    try {
      if(!name){
        alert('name is empty!')
        return;
      }

      let userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

    
      auth.onAuthStateChanged(async function (user) {
        if (user) {
          
          await auth.currentUser.updateProfile({
            displayName : name
          })
          var actionCodeSettings = {
            url: "http://localhost:3000",
            handleCodeInApp: true,
          };
          await auth.currentUser.sendEmailVerification(actionCodeSettings)
          localStorage.setItem("user", JSON.stringify(auth.currentUser));
          userContext.setUser(auth.currentUser);
        }
      });
      
    } catch (error) {
      alert(error.message);
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

    clearAllInputs();
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
        <button
          className={"sign-up-button"}
          onClick={() => {
            createNewUser(email, password, name);
          }}
        >
          Sign up
        </button>
        <button className={"log-in-google-button"} onClick={handleGoogleLogin}>
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

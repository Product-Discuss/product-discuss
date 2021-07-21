import { useState } from "react";
import "./Signin.css";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

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

    const handleGoogleLogin = () => {
        const firebaseConfig = {
            apiKey: "AIzaSyCk5Ys0Z026pbDqabddXYCD86dZUVkvaRU",
            authDomain: "product-discuss.firebaseapp.com",
            projectId: "product-discuss",
            storageBucket: "product-discuss.appspot.com",
            messagingSenderId: "363374770056",
            appId: "1:363374770056:web:d55d8f353e18bf20bd2c3d",
            measurementId: "G-5FJ8XJ2EWJ",
        };
        firebase.initializeApp(firebaseConfig);
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
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

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import React, { useState, useContext } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contributors from "./Components/Contributors/Contributors";
import Api from "./Components/Api/Api";
import User from "./Components/User/User";

let UserContext = null;

function App() {
    const [user, setUser] = useState(getInitialUser());
    UserContext = React.createContext({ user, setUser });

    function getInitialUser() {
        const user = JSON.parse(localStorage.getItem("user"));
        return user;
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Router>
                <NavBar />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return user ? (
                                <Redirect to={"/user/" + user.displayName} />
                            ) : (
                                <Home />
                            );
                        }}
                    />
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/api">
                        <Api />
                    </Route>
                    <Route exact path="/contributors">
                        <Contributors />
                    </Route>
                    <Route exact path="/user/:id" component={User} />
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
export { UserContext };

import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About"
import Contributors from './Components/Contributors/Contributors'
import Api from './Components/Api/Api'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/api">
          <Api />
        </Route>
        <Route exact path="/contributors">
          <Contributors />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

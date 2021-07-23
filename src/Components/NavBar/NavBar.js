import "./navbar.css";
import { Link, Redirect } from "react-router-dom";
import { Icon } from "@fortawesome/free-solid-svg-icons";
import Home from "../Home/Home";

const NavBar = () => {
    const handleLogOut = () => {
        localStorage.removeItem("user");
        <Redirect to="/" />;
    };

    return (
        <div className="navbar">
            <h1 className="title">PRODUCT DISCUSS</h1>
            <ul className="options">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contributors">Contributors</Link>
                </li>
                <li>
                    <Link to="/api">API</Link>
                </li>
                <li>
                    <div className="dropdown">
                        <button className="dropbtn">Profile</button>
                        <div className="dropdown-content">
                            <Link to="/	" onClick={handleLogOut}>
                                Log Out
                            </Link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;

import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";
import { Icon } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    const userContext = useContext(UserContext);
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
                    <div>
                        {userContext.user ? (
                            <div className="dropdown">
                                <button className="dropbtn">Profile</button>
                                <div className="dropdown-content">
                                    <Link
                                        to="/"
                                        onClick={() => {
                                            localStorage.removeItem("user");
                                            userContext.setUser("");
                                        }}
                                    >
                                        Log Out
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { LogOut, reset } from "../features/authSlice";
import logo from "../images/KAICommuter.png";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate("/");
    };

    return (
        <div>
            <nav
                className="navbar is-fixed-top has-shadow has-background-primary-dark"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <NavLink to="/dashboard" className="navbar-item">
                        <img
                            src={logo}
                            width="112"
                            height="28"
                            alt="logo"
                        />
                    </NavLink>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                {/* <p>{user.name}</p> */}
                                <button onClick={logout} className="button is-light">
                                    Log out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

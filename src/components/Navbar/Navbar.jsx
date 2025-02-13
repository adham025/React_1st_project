import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CounterContext } from "../../Context/CounterContext";
import { TokenContext } from "../../Context/TokenContext";

export default function Navbar() {
  let { count } = useContext(CounterContext);
  let { token, setToken } = useContext(TokenContext);
  let navigate = useNavigate();

function logOut(){
localStorage.removeItem("userToken");
setToken(null);
navigate("/login")
}

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {token ? (
              <>
                <li className="nav-item">
                  <NavLink to={""} className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/categories"} className="nav-link">
                    Categories
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/cart"} className="nav-link">
                    Cart {count}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/settings"} className="nav-link">
                    Settings
                  </NavLink>
                </li>
                <li className="nav-item">
                  <p onClick={logOut} className="nav-link" style={{cursor:"pointer"}}>
                    Log Out
                  </p>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to={""} className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/categories"} className="nav-link">
                    Categories
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/cart"} className="nav-link">
                    Cart {count}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/settings"} className="nav-link">
                    Settings
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/register"} className="nav-link">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/login"} className="nav-link">
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

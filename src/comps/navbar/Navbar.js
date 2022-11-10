import "./navbar.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  return (
    <div className="font-light bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-main">
        <div className="container-fluid">
          <img
            src={require("../../media/logo.png")}
            className="logo-img"
            alt=""
          />
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
          <div
            className="collapse navbar-collapse w-75 margin-nav"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mobile-responsive-navbar">
              <li className="nav-item">
                <Link to="/">
                  <button className="fw-bold btn me-2 mb-2">Home</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs">
                  <button className="fw-bold btn me-2 mb-2">Blogs</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services">
                  <button className="fw-bold btn me-2 mb-2">Services</button>
                </Link>
              </li>
              {user?.email ? (
                <div className="d-flex flex-row mobile-responsive-navbar-flex">
                  <li className="nav-item">
                    <Link to="/my-reviews">
                      <button className="fw-bold btn me-2 mb-2">
                        My Reviews
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/add-services">
                      <button className="fw-bold btn me-2 mb-2">
                        Add Service
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="btn fw-bold " onClick={logOut}>
                      Logout
                    </button>
                  </li>{" "}
                </div>
              ) : (
                <Link to="/login">
                  <button className="fw-bold btn me-2 mb-2">Login</button>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

function logOut() {
  signOut(auth)
    .then(() => {})
    .catch((error) => {});
}

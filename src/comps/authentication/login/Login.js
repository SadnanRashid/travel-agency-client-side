import "./login.css";
import { app, auth } from "../../../firebase/firebase-config";
import { BsGoogle } from "react-icons/bs";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import ChangeTitle from "../../titleFunc/titleFun";

export default function Login() {
  ChangeTitle("Login");
  const [error, setError] = useState(null);
  const { user, loading } = useContext(AuthContext);
  // for navigation
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log("this", from);
  // useEffect to redirect to previous page if user is loggedin
  useEffect(() => {
    if (user?.email) {
      navigate(from, { replace: true });
    }
  }, [user?.email]);
  // end of navigation
  // Google signin:
  function GoogleSignin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        fetch(`https://server-side-tan.vercel.app/jsonWT/${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("jsonToken", data.token);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessageG = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        setError(errorMessageG);
      });
  }
  //
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    //
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("signed in with", user.email);
        // jesonwebtoken api:
        fetch(`https://server-side-tan.vercel.app/jsonWT/${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("jsonToken", data.token);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }
  //
  return (
    <div>
      <div className="container">
        <div className="row m-5 no-gutters shadow-lg responsive-mobile-login">
          <div className="col-md-12 col-lg-6 col-sm-12 d-none d-md-block">
            <img
              src={require("../../../media/vector_login.png")}
              className="img-fluid"
              style={{ minHeight: "100%" }}
            />
          </div>
          <div className="col-md-12 col-lg-6 col-sm-12 bg-white p-5">
            <h3 className="pb-3">Login Form</h3>
            <div className="form-style">
              <form onSubmit={handleSubmit}>
                <div className="form-group pb-3">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group pb-3">
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <input name="" type="checkbox" defaultValue="" />{" "}
                    <span className="pl-2 font-weight-bold">Remember Me</span>
                  </div>
                  <div>
                    <a href="#">Forget Password?</a>
                  </div>
                </div>
                <div className="pb-2">
                  <button
                    type="submit"
                    className="btn btn-dark w-100 font-weight-bold mt-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="d-flex flex-row justify-content-center">
                <h6 className="fw-normal text-center">OR</h6>
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 font-weight-bold mt-2"
                  onClick={GoogleSignin}
                >
                  Log in with{" "}
                  <span className="ms-2 h4">
                    <BsGoogle />
                  </span>
                </button>
              </div>
              <div className="pt-4 text-center">
                Become a Member Today. <Link to="/register">Sign Up</Link>
              </div>
              <h4>{error}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

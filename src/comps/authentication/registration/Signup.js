import "./signup.css";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase-config";
import { updateProfile } from "firebase/auth";
import { BsGoogle } from "react-icons/bs";
import { AuthContext } from "../../../context/AuthContext";
import ChangeTitle from "../../titleFunc/titleFun";

export default function Signup() {
  ChangeTitle("Register");
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // navigate
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // check loading status
  useEffect(() => {
    setLoading(true);
    if (user?.email) {
      navigate("/");
    }
  }, [user?.email]);
  if (user) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const username = form.name.value;
    const Img = form.profileImg.value;
    console.log(email, password, username, Img);
    //
    const profileData = {
      displayName: username,
      photoURL: Img,
    };

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        setError(""); //Edit later
        updateProfile(auth.currentUser, profileData)
          .then(() => {})
          .catch((error) => setError(error));
        // json token get
        fetch(`https://server-side-tan.vercel.app/jsonWT/${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("jsonToken", data.token);
          });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage, errorCode);
        setError(errorMessage);
      });
    //
  };
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
            <h3 className="pb-3">Register Form</h3>
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
                {/*  */}
                <div className="form-group pb-3">
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    className="form-control"
                    id="exampleInputName1"
                  />
                </div>
                {/*  */}
                <div className="form-group pb-3">
                  <input
                    name="profileImg"
                    type="text"
                    placeholder="Profile Image URL"
                    className="form-control"
                    id="exampleInputURL1"
                  />
                </div>
                {/*  */}
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
              <h4>{error}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

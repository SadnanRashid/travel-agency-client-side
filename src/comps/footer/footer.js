import "./footer.css";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <h1 className="big-text mt-5">Explore</h1>
      <hr />
      <div>
        <a href="#">Contact Us</a>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div className="social-box">
        <a href="https://github.com/SadnanRashid" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sadnan-rashid-38b656164/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/sadnan.rashid.1" target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
      </div>
    </footer>
  );
}

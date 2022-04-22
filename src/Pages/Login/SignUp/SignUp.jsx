import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
const SignUp = () => {
  return (
    <section className="sign-up-container">
      <form className="form-wrapper">
        <h2>
          Sign Up into <span className="colorize">Account</span>
        </h2>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Name" name="name" id="name" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" name="Email" id="email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="Password"
            id="password"
          />
        </div>

        <div className="input-group">
          <button className="btn btn-primary">Sign Up</button>
        </div>
        <p>
          Already have an Account ?{" "}
          <Link to="/login" className="colorize">
            Login
          </Link>
        </p>
        <SocialLogin />
      </form>
    </section>
  );
};

export default SignUp;

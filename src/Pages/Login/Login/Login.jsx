import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./../style.css";
const Login = () => {
  return (
    <section className="login-container">
      <form className="form-wrapper">
        <h2>
          Login into <span className="colorize">Account</span>
        </h2>
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
        <p>
          Forgot password?{" "}
          <span className="colorize cursor-pointer">Reset</span>
        </p>
        <div className="input-group">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>
          Need Account ?{" "}
          <Link to="/sign-up" className="colorize">
            Create
          </Link>
        </p>
        <SocialLogin />
      </form>
    </section>
  );
};

export default Login;

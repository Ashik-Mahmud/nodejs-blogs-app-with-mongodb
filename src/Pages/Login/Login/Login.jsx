import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../../App";
import { auth } from "../../../Firebase/Firebase.config";
import useTitle from "../../../Hooks/useTitle";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./../style.css";
const Login = () => {
  useTitle("Login");
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth } = useContext(AppContext);
  const from = location?.state?.from?.pathname || "/";
  useEffect(() => {
    if (isAuth) {
      navigate(from, { replace: true });
    }
  }, [navigate, isAuth, from]);

  const [isReset, setIsReset] = useState(false);
  /* handle login submit */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    if (!email) return toast.error("Email field is required.");
    if (!isReset) {
      if (!password) return toast.error("Password field is required");
    }

    await signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message.split(":")[1]);
      });
  };

  /* handle reset password */
  const handleResetPassword = async () => {
    if (!email) return toast.error("Need email to continue");
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(`We sent you email with password reset link on ${email}`);
      })
      .catch((err) => toast.error(err.message.split(":")[1]));
  };

  return (
    <section className="login-container">
      <form className="form-wrapper" onSubmit={handleLoginSubmit}>
        <h2>
          {isReset ? (
            <>
              Reset <span className="colorize">Password</span>
            </>
          ) : (
            <>
              Login into <span className="colorize">Account</span>
            </>
          )}
        </h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onBlur={(event) => setEmail(event.target.value)}
            placeholder="Email"
            name="Email"
            id="email"
          />
        </div>
        {!isReset && (
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              onBlur={(event) => setPassword(event.target.value)}
              name="Password"
              id="password"
            />
          </div>
        )}

        <p>
          {isReset ? "Go back" : "Forgot password?"}{" "}
          <span
            onClick={() => setIsReset((prev) => !prev)}
            className="colorize cursor-pointer"
          >
            {isReset ? "Login" : "Reset"}
          </span>
        </p>
        <div className="input-group">
          {isReset ? (
            <button
              onClick={handleResetPassword}
              type="button"
              className="btn btn-primary"
            >
              Reset
            </button>
          ) : (
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          )}
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

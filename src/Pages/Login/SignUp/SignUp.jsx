import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../../App";
import { auth } from "../../../Firebase/Firebase.config";
import SocialLogin from "../SocialLogin/SocialLogin";
const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth } = useContext(AppContext);
  const from = location?.state?.from?.pathname || "/";
  useEffect(() => {
    if (isAuth) {
      navigate(from, { replace: true });
    }
  }, [navigate, isAuth, from]);

  /* handle sign up form */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async (event) => {
    event.preventDefault();
    if (!name) return toast.error("Name field is required.");
    if (!email) return toast.error("@Email field is required.");
    if (!password) return toast.error("Password field is required.");

    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (res) {
          updateProfile(auth.currentUser, { displayName: name });
        }
        toast.success("LoggedIn user successfully done.");
        navigate("/");
      })
      .catch((err) => toast.error(err.message.split(":")[1]));
  };

  return (
    <section className="sign-up-container">
      <form className="form-wrapper" onSubmit={handleSignUp}>
        <h2>
          Sign Up into <span className="colorize">Account</span>
        </h2>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onBlur={(event) => setName(event.target.value)}
            placeholder="Name"
            name="name"
            id="name"
          />
        </div>
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

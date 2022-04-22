import { sendEmailVerification } from "firebase/auth";
import React from "react";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../Firebase/Firebase.config";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  if (!auth?.currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  /* handle verify user  */
  const verifyUser = () => {
    if (auth?.currentUser?.email) {
      sendEmailVerification(auth?.currentUser).then((res) => {
        toast.success(
          `We sent you email with verification link on ${auth?.currentUser?.email}`
        );
      });
    } else {
      toast.error("Not available email");
    }
  };

  if (
    auth?.currentUser?.providerData[0]?.providerId === "password" &&
    !auth?.currentUser?.emailVerified
  ) {
    return (
      <div className="verify-container">
        <h2>You should verify to continue</h2>
        <button onClick={verifyUser} className="btn btn-primary">
          Verify
        </button>
      </div>
    );
  }

  return children;
};

export default RequireAuth;

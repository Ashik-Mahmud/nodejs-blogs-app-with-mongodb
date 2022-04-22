import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { AiOutlineFacebook, AiOutlineGoogle } from "react-icons/ai";
import useFirebase from "../../../Hooks/useFirebase";
const SocialLogin = () => {
  const { handleSocialLogin } = useFirebase();
  /* handle google sign in */
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    handleSocialLogin(provider);
  };

  /* handle facebook sign in  */
  const handleFacebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    handleSocialLogin(provider);
  };

  return (
    <div className="social-login">
      <div className="line">Or</div>
      <div className="btn-group">
        <button type="button" onClick={handleGoogleSignIn}>
          <AiOutlineGoogle />
        </button>
        <button type="button" onClick={handleFacebookSignIn}>
          <AiOutlineFacebook />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

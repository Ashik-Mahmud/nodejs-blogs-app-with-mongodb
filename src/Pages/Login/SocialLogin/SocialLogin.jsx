import React from "react";
import { AiOutlineFacebook, AiOutlineGoogle } from "react-icons/ai";
const SocialLogin = () => {
  return (
    <div className="social-login">
      <div className="line">Or</div>
      <div className="btn-group">
        <button>
          <AiOutlineGoogle />
        </button>
        <button>
          <AiOutlineFacebook />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

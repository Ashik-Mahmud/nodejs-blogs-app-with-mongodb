import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { auth } from "../Firebase/Firebase.config";
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const handleSocialLogin = async (provider) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setLoading(true);
      })
      .catch((error) => {
        toast.error(error.message.split(":")[1]);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      user?.uid ? setIsAuth(true) : setIsAuth(false);
    });
  }, []);

  return { handleSocialLogin, user, loading, isAuth };
};

export default useFirebase;

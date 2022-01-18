import { useState } from "react";
import { useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import initializeAuthentication from "../Firebase.init";
import { UserContext } from "../../../App";
import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";

initializeAuthentication();
const useFirebase = () => {
  //   const [user, setUser] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [error, setError] = useState({});
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const handleSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setLoggedInUser(result.user);
        history.push("/sign-in");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setLoggedInUser(result.user);
        history.replace(from);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setLoggedInUser(result.user);
        history.replace(from);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setLoggedInUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedInUser(user);
      } else {
        setLoggedInUser({});
      }
    });
  }, []);
  return {
    handleSignUp,
    handleSignIn,
    handleSignOut,
    handleGoogleIn,
    error,
    loggedInUser,
  };
};
export default useFirebase;

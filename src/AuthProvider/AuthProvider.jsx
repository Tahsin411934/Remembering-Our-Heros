import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import PropTypes from 'prop-types';
import auth from "../Firebase/Firebase.confiq";
import axios from "axios";


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState(true);

  //all provider
  const googleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  //theme functionality
  const [theme, setTheme] = useState("light");
  const handleTheme = (e) => {
    const check = e.target.checked;
    check ? setTheme("dark") : setTheme("light");

  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme)

  }, [theme])

  //create User With Email And Password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };





  //signInWithEmailAndPassword
  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


  //googleLogin
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };


  //githubLogin
  const githubLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, GithubProvider);
  };

  //logOut
  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

    //updateProfile
    const updateUserProfile = (name, image) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image,
      });
    };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (Cuser) => {
      const LoggedEmail = Cuser?.email || user?.email;

      setUser(Cuser);
      setLoading(false);

      if (Cuser) {

        axios.post('https://food-sharing-website-server-beta.vercel.app/jwt', { email: LoggedEmail }, {
          withCredentials: true
        })
          .then(res => {
            console.log(res.data)

          })
      }
      else {

        axios.post('https://food-sharing-website-server-beta.vercel.app/logout', { email: LoggedEmail }, { withCredentials: true })
          .then(res => console.log(res.data))
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const values = {
    loading,
    setUser,
    user,
    setLoading,
    createUser,
    signinUser,
    googleLogin,
    githubLogin,
    logOut,
    updateUserProfile,
    handleTheme,
    theme
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};


AuthProvider.propTypes = {
  children: PropTypes.children
};
export default AuthProvider;
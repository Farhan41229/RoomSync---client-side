import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [UserLoading, setUserLoading] = useState(true);
  // console.log(user);
  const CreateUser = (email, password) => {
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const Logout = () => {
    setUserLoading(false);
    return signOut(auth);
  };
  const userLogin = (email, password) => {
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const GoggleLogin = () => {
    setUserLoading(true);
    return signInWithPopup(auth, provider);
  };
  // OnAuthStateChanged Function
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // Function Finished

  const AuthData = {
    user,
    setUser,
    CreateUser,
    Logout,
    userLogin,
    setUserLoading,
    UserLoading,
    GoggleLogin,
  };
  return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;

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
  const [DBuser, setDBuser] = useState(null);
  const [UserLoading, setUserLoading] = useState(true);

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
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser && currentUser.email) {
        try {
          // Fetch the MongoDB user using the Firebase user email
          const response = await fetch(
            `https://room-sync-server-one.vercel.app/users/${currentUser.email}`
          );
          const currentDBuser = await response.json();
          console.log(currentDBuser); // You can remove this after testing
          setDBuser(currentDBuser); // Set the MongoDB user data
        } catch (error) {
          console.error('Error fetching MongoDB user:', error);
        }
      }
      setUserLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []); // Empty dependency array means this effect runs once on component mount

  const AuthData = {
    user,
    setUser,
    CreateUser,
    Logout,
    userLogin,
    setUserLoading,
    UserLoading,
    GoggleLogin,
    DBuser, // Pass the MongoDB user to the context
    setDBuser,
  };

  return (
    <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

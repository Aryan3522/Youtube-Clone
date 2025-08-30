import { useState, createContext, useContext } from "react";
import { auth, provider } from "./firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import axiosInstance from "./axiosInstance";
import { useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const login = (userdata) => {
    setUser(userdata);
    setLoading(false);
    localStorage.setItem("user", JSON.stringify(userdata));
  }; 
  const logout = async () => {
    setUser(null);
    localStorage.removeItem("user");
    try {
      await signOut();
    } catch (error) {
      console.log("Error during SignOut: " + error);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;
      const payload = {
        email: firebaseUser.email,
        name: firebaseUser.displayName,
        image: firebaseUser.photoURL || "https://github.com/shadcn.png",
      };
      const response = await axiosInstance.post("/user/login", payload);
      login(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const payload = {
            email: firebaseUser.email,
            name: firebaseUser.displayName,
            image: firebaseUser.photoURL || "https://github.com/shadcn.png",
          };
          const response = await axiosInstance.post("/user/login", payload);
          login(response.data.result);
        } catch (error) {
          console.log(error);
          logout();
        }
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <UserContext.Provider value={{ user, login, logout, handleGoogleSignIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

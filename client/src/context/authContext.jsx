import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const authContext = createContext();
export const AuthProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const login = async (input) => {
    const res = await axios.post("http://localhost:5000/auth/login", input, {
      withCredentials: "true",
    });
    setCurrUser(res.data);
  };

  const logout = async () => {
    await axios.post("http://localhost:5000/auth/logout");
    setCurrUser(null);
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currUser));
  }, [currUser]);
  return (
    <authContext.Provider value={{ currUser, login, logout }}>
      {children}
    </authContext.Provider>
  );
};

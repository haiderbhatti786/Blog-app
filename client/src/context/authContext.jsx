import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const authContext = createContext();
export const AuthProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const baseUrl = "https://blog-app-n2gj.vercel.app"
  const login = async (input) => {
    const res = await axios.post(`${baseUrl}/auth/login`, input, {
      withCredentials: "true",
    });
    setCurrUser(res.data);
  };

  const logout = async () => {
    await axios.post(`${baseUrl}/auth/logout`);
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

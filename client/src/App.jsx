import React from "react";
import "./index.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
const Layout = () => {
  return (
    <>
      <Navbar />
      {/* outlet stattic ho ga */}
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />, // outlet me pehle home ai ga
      },
      {
        path: "/post/:id", // post ka path jis me us ke id
        element: <Single />, // outlet me single ai ga
      },
      {
        path: "/write",
        element: <Write />, // outlet me write ai ga
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
const App = () => {
  return (
    <>
      <div className="app">
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
};

export default App;

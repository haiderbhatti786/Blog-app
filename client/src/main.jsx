import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { AuthProvider } from "./context/authContext.jsx";

import App from "./App.jsx";
import { AuthProvider } from "./context/authContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);

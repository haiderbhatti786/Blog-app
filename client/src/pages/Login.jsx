import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { authContext } from "../context/authContext.jsx";

const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(authContext);

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(input);
      // 🎉 Toaster Notification for Success
      toast.success("Login Successful!", { position: "top-right" });

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.log(error);

      // ❌ Error Handling for Toaster
      toast.error(
        error.response ? error.response.data.error : "Login Failed!",
        {
          position: "top-right",
        }
      );

      setError(
        error.response ? error.response.data : { error: "Network Error" }
      );
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {error && <p>{JSON.stringify(error.error)}</p>}
        <span>
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>

      {/* ✅ ToastContainer yahan add karo */}
      <ToastContainer />
    </div>
  );
};

export default Login;

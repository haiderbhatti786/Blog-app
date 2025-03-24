import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null); // Added state for error handling
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/register", // ✔️ yad kro yhai lagana hai
        input
      );
      navigate("/login");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password" // Fixed input type
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {error && <p>{JSON.stringify(error.error)}</p>}
        {/* Display error message */}
        <span>
          Have an Account <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;

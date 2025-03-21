import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="text" placeholder="password" />
        <button>Login</button>
        <p>This is an error</p>

        <span>
          Have an Account <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;

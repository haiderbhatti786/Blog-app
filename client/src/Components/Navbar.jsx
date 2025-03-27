import { Link } from "react-router-dom";
import image from "../img/logo.png";
import { useContext } from "react";
import { authContext } from "../context/authContext.jsx";

const Navbar = () => {
  const { currUser, logout } = useContext(authContext);
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src={image} alt="logo" />
            </Link>
          </div>
          <div className="links">
            <Link className="link" to="/?cat=art">
              <h6>ART</h6>
            </Link>
            <Link className="link" to="/?cat=science">
              <h6>SCIENCE</h6>
            </Link>
            <Link className="link" to="/?cat=tech">
              <h6>TECHNOLOGY</h6>
            </Link>
            <Link className="link" to="/?cat=cinema">
              <h6>CINEMA</h6>
            </Link>
            <Link className="link" to="/?cat=design">
              <h6>DESIGN</h6>
            </Link>
            <Link className="link" to="/?cat=food">
              <h6>FOOD</h6>
            </Link>
            <span className="user">
              <b>{currUser?.username}</b>
            </span>
            {currUser ? (
              <span className="user" onClick={logout}>
                <b>Logout</b>
              </span>
            ) : (
              <Link className="link" to="/login">
                Login
              </Link>
            )}
            <span className="write">
              <Link className="user" to="/write">
                Write
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { useContext, useState } from "react";
import { authContext } from "../context/authContext.jsx";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for mobile menu
import image from "../img/logo.png";

const Navbar = () => {
  const { currUser, logout } = useContext(authContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img src={image} alt="logo" />
        </Link>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="links mobile-open"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
            >
              {["art", "science", "tech", "cinema", "design", "food"].map(
                (cat) => (
                  <motion.div
                    key={cat}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link className="link" to={`/?cat=${cat}`}>
                      {cat.toUpperCase()}
                    </Link>
                  </motion.div>
                )
              )}
              {currUser ? (
                <>
                  <span className="user">{currUser.username}</span>
                  <span className="logout" onClick={logout}>
                    Logout
                  </span>
                </>
              ) : (
                <Link className="link" to="/login">
                  Login
                </Link>
              )}
              <Link className="write" to="/write">
                Write
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

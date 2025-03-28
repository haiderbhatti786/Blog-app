import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion
import image from "../img/logo2.png";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt="logo" />
      <span>
        Made with 💖 and <b>Reactjs</b>.
      </span>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link to="/" className="home-button">
          Back to Home
        </Link>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;

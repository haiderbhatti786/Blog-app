import image from "../img/logo2.png";
const Footer = () => {
  return (
    <footer>
      <img src={image} alt="logo" />
      <span>
        Made with 💖and <b>Reactjs</b>.
      </span>
    </footer>
  );
};

export default Footer;

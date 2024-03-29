import { useGlobalContext } from "../Context/global.context";
import "../Components/styles/footer.css";

const Footer = () => {
  const { state } = useGlobalContext();
  return (
    <footer className="footer">
      <p className="footer-text">Powered by</p>
      <img className="footer-img" src="/images/DH.png" alt="DH-logo" />
    </footer>
  );
};

export default Footer;

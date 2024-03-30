import { useGlobalContext } from "../Context/global.context";
import "../Components/styles/footer.css";

const Footer = () => {
  const { state } = useGlobalContext();
  return (
    <footer className="footer">
      <div className="lienea-superior"></div>
      <div className="contenedor-footer">
        <div className="developer">
          <p className="contenido">
            Developed with
            <span className="icono">
              <img src="./images/corazon.svg" alt="Icono" />
            </span>
            by Ing.Astrid Hidalgo. All rights reserved.
          </p>
        </div>
        <div className="digitalHouse">
          <p className="footer-text">Powered by</p>
          <img className="footer-img" src="/images/DH.png" alt="DH-logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

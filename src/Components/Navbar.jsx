import { Link, useNavigate } from "react-router-dom";
import { routes } from "../Routes/routes";
import ToogleButton from "./ToggleButton";
import "../Components/styles/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="content-logo"></div>
      <div className="content-link">
        <Link to={routes.home} className="link">
          Home
        </Link>
        <div className="linea_link"></div>
        <Link to={routes.favs} className="link">
          Favs
        </Link>
        <div className="linea_link"></div>
        <Link to={routes.contact} className="link">
          Conact
        </Link>
        <div className="linea_link"></div>
      </div>
      <div className="content-buttonTheme">
        <ToogleButton />
      </div>
    </nav>
  );
};

export default Navbar;

import { useEffect, useState } from "react";
import { useGlobalContext } from "../Context/global.context";
import "../Components/styles/card.css";
import Modal from "../Components/Modal";
import Detail from "../Pages/Detail";

const Card = ({ item }) => {
  const { id, username, name } = item;
  const { state, dispatch } = useGlobalContext();
  const [imagenUsuario, setImagenUsuario] = useState("");
  const [visible, setVisible] = useState(false);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(state.favs.some((fav) => fav.id === item.id));
  }, [state.favs, item.id]);

  const addFav = () => {
    setIsFav(!isFav);
    if (isFav) {
      dispatch({ type: "DEL_FAV", payload: item });
    } else {
      dispatch({ type: "ADD_FAV", payload: item });
    }
  };

  useEffect(() => {
    const imagenes = [
      "/images/doc/image2.svg",
      "/images/doc/image3.svg",
      "/images/doc/image4.svg",
      "/images/doc/image5.svg",
      "/images/doc/image2.svg",
      "/images/doc/image3.svg",
      "/images/doc/image4.svg",
      "/images/doc/image5.svg",
      "/images/doc/image2.svg",
      "/images/doc/image3.svg",
      "/images/doc/image4.svg",
    ];
    const imagen = imagenes[item.id];
    setImagenUsuario(imagen);
  }, []);

  return (
    <div className="card">
      <div className="content-card_img">
        <img className="card_img" src={imagenUsuario} alt="avatar" />
      </div>
      <div className="contentDetalle">
        <div className="cardNombre">
          <p className="nombreDoc">Dr. {name}</p>
          <p>
            User Name: {username} - {id}
          </p>
        </div>
        <div className="contentDetalle-fav">
          <img
            src="/images/informacion.svg"
            alt="imag_detalle"
            id="imag-detalle"
            onClick={() => setVisible(true)}
          />
          <button onClick={addFav} className="favButton" id="favButton">
            {isFav ? (
              <img src="./images/icon_heart_lleno.svg" alt="Filled heart" />
            ) : (
              <img src="./images/icon_heart.svg" alt="Empty heart" />
            )}
          </button>
          <Modal show={visible} onClose={() => setVisible(false)}>
            <Detail dentistId={item.id} imagenUsuario={imagenUsuario} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Card;

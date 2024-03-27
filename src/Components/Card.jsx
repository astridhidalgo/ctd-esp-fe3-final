import { useState } from "react";
import { useGlobalContext } from "../Context/global.context";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { id, name, username } = item;
  const { state, dispatch } = useGlobalContext();

  const isFav = state.favs.some((fav) => fav.id === item.id);
  const [favIcon, setFavIcon] = useState(isFav);

  const addFav = () => {
    setFavIcon(!favIcon);
    if (isFav) {
      dispatch({ type: "DEL_FAV", payload: item });
    } else {
      dispatch({ type: "ADD_FAV", payload: item });
    }
  };

  return (
    <div className="card">
      <div id="cardNombre">
        <h3>
          {name} - {username} - {id}
        </h3>
      </div>
      <div>
        <img className="card_img" src="/images/avatar.svg" alt="avatar" />
      </div>
      <div className="contentDetalle-fav">
        <Link to={"/detail/" + id}>
          <img
            src="/images/curriculum.png"
            alt="imag_detalle"
            id="imag-detalle"
          />
        </Link>

        <button onClick={addFav} className="favButton" id="favButton">
          {favIcon ? (
            <img src="./images/icon_heart_lleno.svg" alt="Filled heart" />
          ) : (
            <img src="./images/icon_heart.svg" alt="Empty heart" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;

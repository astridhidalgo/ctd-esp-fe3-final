import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context/global.context";
import { getDentistById } from "../Api/dentist";
import "../Components/styles/modal.css";

const Detail = ({ dentistId, imagenUsuario }) => {
  const { id } = useParams();
  const { state, dispatch } = useGlobalContext();
  const { dentistSelected } = state;

  useEffect(() => {
    getDentistById(dentistId).then((data) => {
      dispatch({ type: "GET_DETAIL", payload: data });
    });
  }, [dentistSelected.id]);

  const isFav = state.favs.some((fav) => fav.id === dentistSelected.id);

  console.log({ isFav });
  const addFav = () => {
    if (isFav) {
      dispatch({ type: "DEL_FAV", payload: dentistSelected });
    } else {
      dispatch({ type: "ADD_FAV", payload: dentistSelected });
    }
  };

  return (
    <div className="detail-container">
      <div className="imagen-dentista">
        <img src={imagenUsuario} alt="avatar" />
      </div>
      <div className="content-info-dentista">
        <div className="division"></div>
        <div className="info-dentista">
          <img src="../images/iconEmail.svg" alt="email-icon"></img>
          <p className="texto-info-dentista">
            <strong>Email: </strong>
            <a href={`mailto:${dentistSelected.email}`}>
              {dentistSelected.email}
            </a>
          </p>
        </div>
        <div className="info-dentista">
          <img src="../images/iconPhone.svg" alt="phone-icon"></img>
          <p className="texto-info-dentista">
            <strong>Phone: </strong>
            <a href={`tel:${dentistSelected.phone}`}>{dentistSelected.phone}</a>
          </p>
        </div>
        <div className="info-dentista">
          <img src="../images/iconWebsite.svg" alt="website-icon"></img>
          <p className="texto-info-dentista">
            <strong>Website: </strong>
            <a href={dentistSelected.website}>{dentistSelected.website}</a>
          </p>
        </div>
      </div>
      <div className="content-nombreDr-fav">
        <div className="nombreDr-fav">
          <p>
            <strong>Dr. {dentistSelected.name}</strong>
          </p>
          <button onClick={addFav} className="favButton-Detail" id="favButton">
            {isFav ? (
              <img src="/images/icon_heart_lleno.svg" alt="Filled heart" />
            ) : (
              <img src="/images/icon_heart.svg" alt="Empty heart" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;

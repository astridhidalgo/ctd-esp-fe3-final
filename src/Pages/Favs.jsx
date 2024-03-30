import Card from "../Components/Card";
import { useGlobalContext } from "../Context/global.context";

const Favs = () => {
  const { state, dispatch } = useGlobalContext();

  return (
    <div className="content-fav">
      <h1>Dentists Favs</h1>
      {state.favs.length > 0 ? (
        <div className="card-grid">
          {state.favs.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <h3>You have no favorites added.</h3>
      )}
    </div>
  );
};

export default Favs;

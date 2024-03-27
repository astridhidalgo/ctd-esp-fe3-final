import Card from "../Components/Card";
import { useGlobalContext } from "../Context/global.context";

const Home = () => {
  const { state } = useGlobalContext();

  return (
    <main>
      <div className="card-grid">
        {state.data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;

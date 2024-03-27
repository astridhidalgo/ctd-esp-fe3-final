import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./Routes/routes";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Favs from "./Pages/Favs";
import Detail from "./Pages/Detail";
import { useGlobalContext } from "./Context/global.context";

function App() {
  const { state } = useGlobalContext();
  return (
    <div className={`App ${state.theme}`}>
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.favs} element={<Favs />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path="*" element={<h1>Not Fount, Error 404</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

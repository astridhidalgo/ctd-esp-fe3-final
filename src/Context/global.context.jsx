import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "../Components/reducers/reducer";
import { getDentists } from "../Api/dentist";

export const initialState = {
  theme: localStorage.getItem("theme") || "light",
  data: [],
  dentistSelected: {},
  favs: JSON.parse(localStorage.getItem("favs")) || [],
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  useEffect(() => {
    getDentists().then((data) => {
      const formattedData = data.map((a) => ({
        name: a.name,
        username: a.username,
        id: a.id,
      }));

      dispatch({ type: "GET_LIST", payload: formattedData });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch, toggleTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalContext = () => useContext(ContextGlobal);

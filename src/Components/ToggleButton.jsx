import { useGlobalContext } from "../Context/global.context";

const ToggleButton = () => {
  const { toggleTheme, state } = useGlobalContext();
  const { theme } = state;

  return (
    <div className="toggle-button">
      <input
        type="checkbox"
        id="darkmode-toggle"
        className="toggle-button-input"
        onChange={toggleTheme}
      />
      <label htmlFor="darkmode-toggle" className="toggle-button-label">
        {theme === "light" ? (
          <>
            <img src="/images/sol.svg" className="sun" alt="Sun" />
            <img src="/images/claro.svg" className="swicheClaro" alt="Light" />
          </>
        ) : (
          <>
            <img src="/images/luna.svg" className="moon" alt="Moon" />
            <img src="/images/oscuro.svg" className="swicheOscuro" alt="Dark" />
          </>
        )}
      </label>
    </div>
  );
};

export default ToggleButton;

import { useContext } from "react";
import { GlobalState } from "../store/global/state";

const PickTheme = () => {
  const { theme, setLightTheme, setDarkTheme } = useContext(GlobalState);

  return (
    <>
      <h3>Select the theme - </h3>
      <button onClick={setLightTheme}>Light </button>
      <button onClick={setDarkTheme}>Dark </button>

      <div>Chosen theme is {`${theme}`}</div>
    </>
  );
};

export default PickTheme;